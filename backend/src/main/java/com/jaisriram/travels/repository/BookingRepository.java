package com.jaisriram.travels.repository;

import com.jaisriram.travels.model.Booking;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface BookingRepository extends JpaRepository<Booking, Long> {
    @Query("SELECT b FROM Booking b WHERE b.customer.email = :email")
    List<Booking> findByCustomerEmail(@Param("email") String email);
    
    List<Booking> findByStatus(Booking.BookingStatus status);
}
