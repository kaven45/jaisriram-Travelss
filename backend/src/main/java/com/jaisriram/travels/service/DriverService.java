package com.jaisriram.travels.service;

import com.jaisriram.travels.model.Driver;
import com.jaisriram.travels.repository.DriverRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class DriverService {

    @Autowired
    private DriverRepository driverRepository;

    public List<Driver> getAllDrivers() {
        return driverRepository.findAll();
    }

    public Optional<Driver> getDriverById(Long id) {
        return driverRepository.findById(id);
    }

    public List<Driver> getAvailableDrivers() {
        return driverRepository.findByStatus(Driver.DriverStatus.AVAILABLE);
    }

    public Driver saveDriver(Driver driver) {
        return driverRepository.save(driver);
    }

    public Driver updateDriver(Long id, Driver driverDetails) {
        Optional<Driver> driver = driverRepository.findById(id);
        if (driver.isPresent()) {
            Driver existingDriver = driver.get();
            existingDriver.setName(driverDetails.getName());
            existingDriver.setPhone(driverDetails.getPhone());
            existingDriver.setRating(driverDetails.getRating());
            existingDriver.setStatus(driverDetails.getStatus());
            return driverRepository.save(existingDriver);
        }
        return null;
    }

    public void deleteDriver(Long id) {
        driverRepository.deleteById(id);
    }
}
