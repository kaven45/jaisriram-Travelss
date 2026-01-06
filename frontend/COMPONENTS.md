# JaiSriRam Travels - Frontend Components Guide

## Overview
Modern Angular frontend with 4 main components for managing travel bookings, customers, drivers, and vehicles.

---

## Components

### 1. **Booking Management** (🟣 Purple Theme)
- **Route:** `/bookings` (Default)
- **Features:**
  - Create new bookings
  - Select from dropdown: Customer, Driver, Vehicle
  - Set pickup/dropoff locations
  - Set booking status (Pending, Confirmed, Completed, Cancelled)
  - Cancel bookings
  - Beautiful booking cards with location indicators

---

### 2. **Customer Management** (🟠 Orange Theme)
- **Route:** `/customers`
- **Features:**
  - Add new customers
  - View all customers in card grid
  - Store: Name, Email, Phone, Address
  - Delete customers with confirmation
  - Form toggle to show/hide add form

---

### 3. **Driver Management** (🔷 Purple-Blue Theme)
- **Route:** `/drivers`
- **Features:**
  - Add new drivers
  - View drivers in card grid
  - Store: Name, Email, Phone, License Number
  - Delete drivers
  - License number badge display

---

### 4. **Vehicle Management** (🔵 Cyan Theme)
- **Route:** `/vehicles`
- **Features:**
  - Add new vehicles
  - View vehicles in table format
  - Store: Registration Number, Model, Capacity, Status
  - Status options: Available, In Use, Maintenance
  - Status color badges

---

## Design Features

### Color Scheme
| Component | Primary Color | Gradient |
|-----------|---------------|----------|
| Bookings  | #9c27b0 (Purple) | #9c27b0 → #673ab7 |
| Customers | #ff6b35 (Orange) | #ff6b35 → #f7931e |
| Drivers   | #667eea (Purple) | #667eea → #764ba2 |
| Vehicles  | #00bcd4 (Cyan) | #00bcd4 → #0097a7 |

### UI Elements
- ✅ Gradient headers for each component
- ✅ Card-based layout with hover effects
- ✅ Modern form design with glass-morphism
- ✅ Responsive grid layout (auto-fill)
- ✅ Color-coded badges and status indicators
- ✅ Smooth transitions and animations
- ✅ Professional navbar with active route highlighting

---

## How to Use

### Start the Frontend
```bash
cd c:\JaiSriRam-Travels-V2\frontend
npm install  # First time only
npm start
```

The app will open at `http://localhost:4200`

### Start the Backend
```bash
cd c:\JaiSriRam-Travels-V2\backend
java -jar target/travels-booking-1.0.0.jar
```

Backend runs on `http://localhost:8081`

---

## API Integration
All components connect to backend APIs at `http://localhost:8081/api`:
- `/api/bookings` - Booking CRUD operations
- `/api/customers` - Customer CRUD operations
- `/api/drivers` - Driver CRUD operations
- `/api/vehicles` - Vehicle CRUD operations

---

## Navigation
The top navbar provides quick navigation:
- 🚗 **JaiSriRam Travels** - Logo/brand
- **Bookings** - Main booking management (default route)
- **Customers** - Customer management
- **Drivers** - Driver management
- **Vehicles** - Vehicle management

Active routes are highlighted with orange underline.

---

## Responsive Design
- ✅ Mobile-friendly layout
- ✅ Grid adapts to screen size
- ✅ Navbar becomes vertical on mobile
- ✅ Touch-friendly buttons and forms

---

## Features in Detail

### Add Form
- Toggle-able form (+ Add / Cancel)
- Beautiful gradient background
- Required field validation
- Automatic form reset after submission
- Grid-based form layout

### Data Display
**Bookings:** Beautiful cards showing:
- Customer name and booking date
- Status badge (color-coded)
- Driver and vehicle info
- Location indicators with emoji
- Cancel booking button

**Customers:** Card grid with:
- Name header
- Email, phone, address details
- Delete action

**Drivers:** Card grid with:
- Driver name and license badge
- Email and phone
- Delete action

**Vehicles:** Table format with:
- Registration number
- Model
- Capacity badge
- Status badge
- Delete action

---

## Technology Stack
- **Framework:** Angular 17 (Standalone Components)
- **Styling:** CSS3 with Gradients & Flexbox
- **HTTP:** HttpClient with RxJS Observables
- **Forms:** Template-driven with ngModel
- **Routing:** Angular Router with path matching

---

Enjoy managing your travels! 🚗✨
