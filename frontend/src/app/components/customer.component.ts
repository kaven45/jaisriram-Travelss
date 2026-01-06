import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ApiService } from '../services/api.service';
import { Customer } from '../models';

@Component({
  selector: 'app-customer',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css']
})
export class CustomerComponent implements OnInit {
  customers: Customer[] = [];
  newCustomer: Customer = { name: '', email: '', phone: '', address: '' };
  editingId: number | null = null;
  showForm = false;
  showSuccess = false;
  successMessage = '';

  constructor(private apiService: ApiService) {}

  ngOnInit(): void {
    this.loadCustomers();
  }

  loadCustomers(): void {
    this.apiService.getCustomers().subscribe({
      next: (data) => this.customers = data,
      error: (error) => console.error('Error loading customers:', error)
    });
  }

  addCustomer(): void {
    if (this.newCustomer.name && this.newCustomer.email) {
      this.apiService.createCustomer(this.newCustomer).subscribe({
        next: () => {
          this.loadCustomers();
          this.newCustomer = { name: '', email: '', phone: '', address: '' };
          this.showForm = false;
          this.showSuccessMessage('Customer added successfully!');
        },
        error: (error) => console.error('Error adding customer:', error)
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

  deleteCustomer(id: number | undefined): void {
    if (id && confirm('Are you sure you want to delete this customer?')) {
      this.apiService.deleteCustomer(id).subscribe({
        next: () => {
          this.loadCustomers();
          this.showSuccessMessage('Customer deleted successfully!');
        },
        error: (error) => console.error('Error deleting customer:', error)
      });
    }
  }

  toggleForm(): void {
    this.showForm = !this.showForm;
    if (!this.showForm) {
      this.newCustomer = { name: '', email: '', phone: '', address: '' };
    }
  }
}
