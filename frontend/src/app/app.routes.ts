import { Routes } from '@angular/router';
import { CustomerComponent } from './components/customer.component';
import { DriverComponent } from './components/driver.component';
import { VehicleComponent } from './components/vehicle.component';
import { BookingComponent } from './components/booking.component';

export const routes: Routes = [
  { path: '', redirectTo: '/bookings', pathMatch: 'full' },
  { path: 'customers', component: CustomerComponent },
  { path: 'drivers', component: DriverComponent },
  { path: 'vehicles', component: VehicleComponent },
  { path: 'bookings', component: BookingComponent }
];
