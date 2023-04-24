package carrental.service;

import java.util.List;

import org.springframework.stereotype.Service;

import carrental.model.Booking;
import carrental.model.BookingStatus;
import carrental.model.Car;

@Service
public interface BookinService {
	BookingStatus newBooking(Booking booking); 
	List<Booking> allBookings();
	BookingStatus deleteBooking(Booking booking);
	List<Booking> findByCar(Car car);
}
