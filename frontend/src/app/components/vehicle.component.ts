import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ApiService } from '../services/api.service';
import { Vehicle } from '../models';

@Component({
  selector: 'app-vehicle',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './vehicle.component.html',
  styleUrls: ['./vehicle.component.css']
})
export class VehicleComponent implements OnInit {
  vehicles: Vehicle[] = [];
  newVehicle: Vehicle = { vehicleType: '', model: '', registrationNumber: '', seatingCapacity: 0, status: 'AVAILABLE' };
  showForm = false;
  showSuccess = false;
  successMessage = '';

  constructor(private apiService: ApiService) {}

  ngOnInit(): void {
    this.loadVehicles();
  }

  loadVehicles(): void {
    this.apiService.getVehicles().subscribe({
      next: (data) => this.vehicles = data,
      error: (error) => console.error('Error loading vehicles:', error)
    });
  }

  addVehicle(): void {
    if (this.newVehicle.registrationNumber && this.newVehicle.model && this.newVehicle.seatingCapacity > 0) {
      this.apiService.createVehicle(this.newVehicle).subscribe({
        next: () => {
          this.loadVehicles();
          this.newVehicle = { vehicleType: '', model: '', registrationNumber: '', seatingCapacity: 0, status: 'AVAILABLE' };
          this.showForm = false;
          this.showSuccessMessage('Vehicle added successfully!');
        },
        error: (error) => console.error('Error adding vehicle:', error)
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

  deleteVehicle(id: number | undefined): void {
    if (id && confirm('Are you sure you want to delete this vehicle?')) {
      this.apiService.deleteVehicle(id).subscribe({
        next: () => {
          this.loadVehicles();
          this.showSuccessMessage('Vehicle deleted successfully!');
        },
        error: (error) => console.error('Error deleting vehicle:', error)
      });
    }
  }

  toggleForm(): void {
    this.showForm = !this.showForm;
    if (!this.showForm) {
      this.newVehicle = { vehicleType: '', model: '', registrationNumber: '', seatingCapacity: 0, status: 'AVAILABLE' };
    }
  }

  getStatusClass(status: string): string {
    return status.toLowerCase().replace(' ', '-');
  }
}
