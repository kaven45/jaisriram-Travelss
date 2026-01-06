import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ApiService } from '../services/api.service';
import { Driver } from '../models';

@Component({
  selector: 'app-driver',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './driver.component.html',
  styleUrls: ['./driver.component.css']
})
export class DriverComponent implements OnInit {
  drivers: Driver[] = [];
  newDriver: Driver = { name: '', phone: '', licenseNumber: '' };
  editingId: number | null = null;
  showForm = false;
  showSuccess = false;
  successMessage = '';

  constructor(private apiService: ApiService) {}

  ngOnInit(): void {
    this.loadDrivers();
  }

  loadDrivers(): void {
    this.apiService.getDrivers().subscribe({
      next: (data) => this.drivers = data,
      error: (error) => console.error('Error loading drivers:', error)
    });
  }

  addDriver(): void {
    if (this.newDriver.name && this.newDriver.phone && this.newDriver.licenseNumber) {
      this.apiService.createDriver(this.newDriver).subscribe({
        next: () => {
          this.loadDrivers();
          this.newDriver = { name: '', phone: '', licenseNumber: '' };
          this.showForm = false;
          this.showSuccessMessage('Driver added successfully!');
        },
        error: (error) => console.error('Error adding driver:', error)
      });
    }
  }

  showSuccessMessage(message: string): void {
    this.successMessage = message;
    this.showSuccess = true;
    setTimeout(() => {
      this.showSuccess = false;
    }, 3000);
  }

  deleteDriver(id: number | undefined): void {
    if (id && confirm('Are you sure you want to delete this driver?')) {
      this.apiService.deleteDriver(id).subscribe({
        next: () => {
          this.loadDrivers();
          this.showSuccessMessage('Driver deleted successfully!');
        },
        error: (error) => console.error('Error deleting driver:', error)
      });
    }
  }

  toggleForm(): void {
    this.showForm = !this.showForm;
    if (!this.showForm) {
      this.newDriver = { name: '', phone: '', licenseNumber: '' };
    }
  }
}
