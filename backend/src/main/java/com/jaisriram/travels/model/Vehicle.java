package com.jaisriram.travels.model;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@Table(name = "vehicles")
@Data
@NoArgsConstructor
@AllArgsConstructor
public class Vehicle {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(nullable = false)
    private String vehicleType;

    @Column(nullable = false)
    private String model;

    @Column(nullable = false)
    private String registrationNumber;

    @Column(nullable = false)
    private Integer seatingCapacity;

    @Column(nullable = false)
    private Double pricePerKm = 24.0;

    @Column(nullable = false)
    @Enumerated(EnumType.STRING)
    private VehicleStatus status = VehicleStatus.AVAILABLE;

    public enum VehicleStatus {
        AVAILABLE, BOOKED, MAINTENANCE
    }
}
