package com.jaisriram.travels.service;

import com.jaisriram.travels.model.Vehicle;
import com.jaisriram.travels.repository.VehicleRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class VehicleService {

    @Autowired
    private VehicleRepository vehicleRepository;

    public List<Vehicle> getAllVehicles() {
        return vehicleRepository.findAll();
    }

    public Optional<Vehicle> getVehicleById(Long id) {
        return vehicleRepository.findById(id);
    }

    public List<Vehicle> getAvailableVehicles() {
        return vehicleRepository.findByStatus(Vehicle.VehicleStatus.AVAILABLE);
    }

    public Vehicle saveVehicle(Vehicle vehicle) {
        return vehicleRepository.save(vehicle);
    }

    public Vehicle updateVehicle(Long id, Vehicle vehicleDetails) {
        Optional<Vehicle> vehicle = vehicleRepository.findById(id);
        if (vehicle.isPresent()) {
            Vehicle existingVehicle = vehicle.get();
            existingVehicle.setVehicleType(vehicleDetails.getVehicleType());
            existingVehicle.setModel(vehicleDetails.getModel());
            existingVehicle.setSeatingCapacity(vehicleDetails.getSeatingCapacity());
            existingVehicle.setPricePerKm(vehicleDetails.getPricePerKm());
            existingVehicle.setStatus(vehicleDetails.getStatus());
            return vehicleRepository.save(existingVehicle);
        }
        return null;
    }

    public void deleteVehicle(Long id) {
        vehicleRepository.deleteById(id);
    }
}
