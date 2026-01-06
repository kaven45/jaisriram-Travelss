package com.jaisriram.travels.service;

import com.jaisriram.travels.model.Booking;
import com.jaisriram.travels.repository.BookingRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.Optional;

@Service
@Transactional
public class BookingService {

    @Autowired
    private BookingRepository bookingRepository;

    public List<Booking> getAllBookings() {
        return bookingRepository.findAll();
    }

    public Optional<Booking> getBookingById(Long id) {
        return bookingRepository.findById(id);
    }

    public List<Booking> getBookingsByCustomerEmail(String email) {
        return bookingRepository.findByCustomerEmail(email);
    }

    public List<Booking> getBookingsByStatus(Booking.BookingStatus status) {
        return bookingRepository.findByStatus(status);
    }

    public Booking createBooking(Booking booking) {
        booking.calculateTotalAmount();
        return bookingRepository.save(booking);
    }

    public Booking updateBooking(Long id, Booking bookingDetails) {
        Optional<Booking> booking = bookingRepository.findById(id);
        if (booking.isPresent()) {
            Booking existingBooking = booking.get();
            existingBooking.setPickupLocation(bookingDetails.getPickupLocation());
            existingBooking.setDropoffLocation(bookingDetails.getDropoffLocation());
            existingBooking.setPickupDateTime(bookingDetails.getPickupDateTime());
            existingBooking.setDropoffDateTime(bookingDetails.getDropoffDateTime());
            existingBooking.setPassengerCount(bookingDetails.getPassengerCount());
            existingBooking.setStatus(bookingDetails.getStatus());
            existingBooking.calculateTotalAmount();
            return bookingRepository.save(existingBooking);
        }
        return null;
    }

    public void deleteBooking(Long id) {
        bookingRepository.deleteById(id);
    }
}
