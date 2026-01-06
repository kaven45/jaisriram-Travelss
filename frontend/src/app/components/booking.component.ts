import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ApiService } from '../services/api.service';
import { Booking, Customer, Driver, Vehicle } from '../models';

@Component({
  selector: 'app-booking',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './booking.component.html',
  styleUrls: ['./booking.component.css']
})
export class BookingComponent implements OnInit {
  bookings: Booking[] = [];
  customers: Customer[] = [];
  drivers: Driver[] = [];
  vehicles: Vehicle[] = [];
  
  selectedCustomerId: number | null = null;
  selectedDriverId: number | null = null;
  selectedVehicleId: number | null = null;
  
  newBooking: Booking = { 
    customer: { id: 0 },
    driver: { id: 0 },
    vehicle: { id: 0 },
    pickupLocation: '',
    dropoffLocation: '',
    pickupDateTime: '',
    dropoffDateTime: '',
    passengerCount: 1,
    totalAmount: 0,
    status: 'CONFIRMED'
  };
  
  newCustomerData: Customer = {
    name: '',
    email: '',
    phone: '',
    address: ''
  };

  showForm = false;
  useExistingCustomer = true;
  createdCustomerId: number | null = null;
  showSuccess = false;
  successMessage = '';

  constructor(private apiService: ApiService) {}

  ngOnInit(): void {
    this.loadBookings();
    this.loadDropdownData();
  }

  loadBookings(): void {
    this.apiService.getBookings().subscribe({
      next: (data) => this.bookings = data,
      error: (error) => console.error('Error loading bookings:', error)
    });
  }

  loadDropdownData(): void {
    this.apiService.getCustomers().subscribe({
      next: (data) => this.customers = data,
      error: (error) => console.error('Error loading customers:', error)
    });

    this.apiService.getDrivers().subscribe({
      next: (data) => this.drivers = data,
      error: (error) => console.error('Error loading drivers:', error)
    });

    this.apiService.getVehicles().subscribe({
      next: (data) => this.vehicles = data,
      error: (error) => console.error('Error loading vehicles:', error)
    });
  }

  createNewCustomer(): void {
    if (this.newCustomerData.name && this.newCustomerData.email && this.newCustomerData.phone) {
      this.apiService.createCustomer(this.newCustomerData).subscribe({
        next: (customer) => {
          this.createdCustomerId = customer.id || 0;
          this.selectedCustomerId = this.createdCustomerId;
          this.newBooking.customer = { id: this.createdCustomerId };
          this.customers.push(customer);
          this.newCustomerData = { name: '', email: '', phone: '', address: '' };
          this.showSuccessMessage('Customer created successfully!');
          console.log('Customer created successfully', customer);
        },
        error: (error) => console.error('Error creating customer:', error)
      });
    } else {
      this.showSuccessMessage('Please fill in Name, Email, and Phone!');
    }
  }

  addBooking(): void {
    let customerId = this.useExistingCustomer ? this.selectedCustomerId : this.createdCustomerId;
    let driverId = this.selectedDriverId;
    let vehicleId = this.selectedVehicleId;

    if (customerId && driverId && vehicleId &&
        this.newBooking.pickupLocation && this.newBooking.dropoffLocation && 
        this.newBooking.pickupDateTime && this.newBooking.dropoffDateTime &&
        this.newBooking.passengerCount) {
      
      const bookingToCreate: Booking = {
        customer: { id: customerId },
        driver: { id: driverId },
        vehicle: { id: vehicleId },
        pickupLocation: this.newBooking.pickupLocation,
        dropoffLocation: this.newBooking.dropoffLocation,
        pickupDateTime: this.newBooking.pickupDateTime,
        dropoffDateTime: this.newBooking.dropoffDateTime,
        passengerCount: this.newBooking.passengerCount,
        totalAmount: 0,
        status: 'CONFIRMED'
      };
      
      console.log('Sending booking:', bookingToCreate);
      
      this.apiService.createBooking(bookingToCreate).subscribe({
        next: () => {
          this.loadBookings();
          this.resetForm();
          this.showSuccessMessage('Booking created successfully!');
        },
        error: (error) => {
          console.error('Error adding booking:', error);
          this.showSuccessMessage('Error creating booking. Check console.');
        }
      });
    } else {
      this.showSuccessMessage('Please fill in all required fields!');
    }
  }

  showSuccessMessage(message: string): void {
    this.successMessage = message;
    this.showSuccess = true;
    setTimeout(() => {
      this.showSuccess = false;
    }, 3000);
  }

  resetForm(): void {
    this.newBooking = { 
      customer: { id: 0 },
      driver: { id: 0 },
      vehicle: { id: 0 },
      pickupLocation: '',
      dropoffLocation: '',
      pickupDateTime: '',
      dropoffDateTime: '',
      passengerCount: 1,
      totalAmount: 0,
      status: 'CONFIRMED'
    };
    this.newCustomerData = { name: '', email: '', phone: '', address: '' };
    this.createdCustomerId = null;
    this.selectedCustomerId = null;
    this.selectedDriverId = null;
    this.selectedVehicleId = null;
    this.useExistingCustomer = true;
    this.showForm = false;
  }

  getAvailableVehicles(): Vehicle[] {
    if (!this.newBooking.passengerCount || this.newBooking.passengerCount <= 0) {
      return [];
    }
    return this.vehicles.filter(v => v.seatingCapacity >= this.newBooking.passengerCount);
  }

  deleteBooking(id: number | undefined): void {
    if (id && confirm('Are you sure you want to cancel this booking?')) {
      this.apiService.deleteBooking(id).subscribe({
        next: () => this.loadBookings(),
        error: (error) => console.error('Error deleting booking:', error)
      });
    }
  }

  toggleForm(): void {
    this.showForm = !this.showForm;
    if (!this.showForm) {
      this.resetForm();
    }
  }

  getCustomerName(id: number | undefined): string {
    return this.customers.find(c => c.id === id)?.name || 'N/A';
  }

  getDriverName(id: number | undefined): string {
    return this.drivers.find(d => d.id === id)?.name || 'N/A';
  }

  getVehicleModel(id: number | undefined): string {
    return this.vehicles.find(v => v.id === id)?.model || 'N/A';
  }

  getSelectedVehiclePrice(): number {
    if (!this.selectedVehicleId) return 0;
    const vehicle = this.vehicles.find(v => v.id === this.selectedVehicleId);
    return vehicle?.pricePerKm || 0;
  }

  getStatusClass(status: string): string {
    return status.toLowerCase().replace(' ', '-');
  }
}
