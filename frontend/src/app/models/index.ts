export interface Customer {
  id?: number;
  name: string;
  email: string;
  phone: string;
  address: string;
}

export interface Driver {
  id?: number;
  name: string;
  phone: string;
  licenseNumber: string;
  rating?: number;
  status?: string;
}

export interface Vehicle {
  id?: number;
  vehicleType: string;
  model: string;
  registrationNumber: string;
  seatingCapacity: number;
  pricePerKm?: number;
  status?: string;
}

export interface Booking {
  id?: number;
  customer?: { id: number };
  driver?: { id: number };
  vehicle?: { id: number };
  pickupLocation: string;
  dropoffLocation: string;
  pickupDateTime: string;
  dropoffDateTime: string;
  passengerCount: number;
  totalAmount: number;
  status: string;
}
