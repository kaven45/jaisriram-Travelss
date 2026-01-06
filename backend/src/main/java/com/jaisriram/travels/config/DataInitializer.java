package com.jaisriram.travels.config;

import com.jaisriram.travels.model.Vehicle;
import com.jaisriram.travels.model.Driver;
import com.jaisriram.travels.repository.VehicleRepository;
import com.jaisriram.travels.repository.DriverRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.stereotype.Component;

@Component
public class DataInitializer implements CommandLineRunner {

    @Autowired
    private VehicleRepository vehicleRepository;

    @Autowired
    private DriverRepository driverRepository;

    @Override
    public void run(String... args) throws Exception {
        if (vehicleRepository.count() == 0) {
            // Add Sedans - (id, vehicleType, model, registrationNumber, seatingCapacity, pricePerKm, status)
            Vehicle v1 = new Vehicle();
            v1.setVehicleType("Sedan");
            v1.setModel("Toyota Fortuner");
            v1.setRegistrationNumber("TN01AB1001");
            v1.setSeatingCapacity(5);
            v1.setPricePerKm(18.0);
            v1.setStatus(Vehicle.VehicleStatus.AVAILABLE);
            vehicleRepository.save(v1);

            Vehicle v2 = new Vehicle();
            v2.setVehicleType("Sedan");
            v2.setModel("Mahindra XUV500");
            v2.setRegistrationNumber("TN01AB1002");
            v2.setSeatingCapacity(5);
            v2.setPricePerKm(16.0);
            v2.setStatus(Vehicle.VehicleStatus.AVAILABLE);
            vehicleRepository.save(v2);

            Vehicle v3 = new Vehicle();
            v3.setVehicleType("Sedan");
            v3.setModel("Honda City");
            v3.setRegistrationNumber("TN01AB1003");
            v3.setSeatingCapacity(5);
            v3.setPricePerKm(17.0);
            v3.setStatus(Vehicle.VehicleStatus.AVAILABLE);
            vehicleRepository.save(v3);

            // Add SUVs
            Vehicle v4 = new Vehicle();
            v4.setVehicleType("SUV");
            v4.setModel("Mahindra XUV700");
            v4.setRegistrationNumber("TN01AB1004");
            v4.setSeatingCapacity(7);
            v4.setPricePerKm(28.0);
            v4.setStatus(Vehicle.VehicleStatus.AVAILABLE);
            vehicleRepository.save(v4);

            Vehicle v5 = new Vehicle();
            v5.setVehicleType("SUV");
            v5.setModel("Toyota Innova");
            v5.setRegistrationNumber("TN01AB1005");
            v5.setSeatingCapacity(7);
            v5.setPricePerKm(25.0);
            v5.setStatus(Vehicle.VehicleStatus.AVAILABLE);
            vehicleRepository.save(v5);

            Vehicle v6 = new Vehicle();
            v6.setVehicleType("SUV");
            v6.setModel("Kia Carens");
            v6.setRegistrationNumber("TN01AB1006");
            v6.setSeatingCapacity(7);
            v6.setPricePerKm(22.0);
            v6.setStatus(Vehicle.VehicleStatus.AVAILABLE);
            vehicleRepository.save(v6);

            // Add Tempo Travellers
            Vehicle v7 = new Vehicle();
            v7.setVehicleType("Tempo");
            v7.setModel("Tempo Traveller 16");
            v7.setRegistrationNumber("TN01AB1007");
            v7.setSeatingCapacity(16);
            v7.setPricePerKm(32.0);
            v7.setStatus(Vehicle.VehicleStatus.AVAILABLE);
            vehicleRepository.save(v7);

            Vehicle v8 = new Vehicle();
            v8.setVehicleType("Tempo");
            v8.setModel("Tempo Traveller 14");
            v8.setRegistrationNumber("TN01AB1008");
            v8.setSeatingCapacity(14);
            v8.setPricePerKm(30.0);
            v8.setStatus(Vehicle.VehicleStatus.AVAILABLE);
            vehicleRepository.save(v8);

            // Add Bus
            Vehicle v9 = new Vehicle();
            v9.setVehicleType("Bus");
            v9.setModel("Volvo Bus 49");
            v9.setRegistrationNumber("TN01AB1009");
            v9.setSeatingCapacity(49);
            v9.setPricePerKm(45.0);
            v9.setStatus(Vehicle.VehicleStatus.AVAILABLE);
            vehicleRepository.save(v9);

            System.out.println("✅ 9 vehicles initialized successfully!");
        }

        if (driverRepository.count() == 0) {
            Driver d1 = new Driver();
            d1.setName("Rajesh Kumar");
            d1.setLicenseNumber("DL001");
            d1.setPhone("9876543210");
            d1.setRating(4.8);
            d1.setStatus(Driver.DriverStatus.AVAILABLE);
            driverRepository.save(d1);

            Driver d2 = new Driver();
            d2.setName("Arjun Singh");
            d2.setLicenseNumber("DL002");
            d2.setPhone("9876543211");
            d2.setRating(4.9);
            d2.setStatus(Driver.DriverStatus.AVAILABLE);
            driverRepository.save(d2);

            Driver d3 = new Driver();
            d3.setName("Vikram Patel");
            d3.setLicenseNumber("DL003");
            d3.setPhone("9876543212");
            d3.setRating(4.7);
            d3.setStatus(Driver.DriverStatus.AVAILABLE);
            driverRepository.save(d3);

            Driver d4 = new Driver();
            d4.setName("Suresh Kumar");
            d4.setLicenseNumber("DL004");
            d4.setPhone("9876543213");
            d4.setRating(4.6);
            d4.setStatus(Driver.DriverStatus.AVAILABLE);
            driverRepository.save(d4);

            Driver d5 = new Driver();
            d5.setName("Ramesh Gupta");
            d5.setLicenseNumber("DL005");
            d5.setPhone("9876543214");
            d5.setRating(4.8);
            d5.setStatus(Driver.DriverStatus.AVAILABLE);
            driverRepository.save(d5);

            Driver d6 = new Driver();
            d6.setName("Ashok Kumar");
            d6.setLicenseNumber("DL006");
            d6.setPhone("9876543215");
            d6.setRating(4.5);
            d6.setStatus(Driver.DriverStatus.AVAILABLE);
            driverRepository.save(d6);

            Driver d7 = new Driver();
            d7.setName("Deepak Singh");
            d7.setLicenseNumber("DL007");
            d7.setPhone("9876543216");
            d7.setRating(4.9);
            d7.setStatus(Driver.DriverStatus.AVAILABLE);
            driverRepository.save(d7);

            Driver d8 = new Driver();
            d8.setName("Mohan Kumar");
            d8.setLicenseNumber("DL008");
            d8.setPhone("9876543217");
            d8.setRating(4.7);
            d8.setStatus(Driver.DriverStatus.AVAILABLE);
            driverRepository.save(d8);

            System.out.println("✅ 8 drivers initialized successfully!");
        }
    }
}
