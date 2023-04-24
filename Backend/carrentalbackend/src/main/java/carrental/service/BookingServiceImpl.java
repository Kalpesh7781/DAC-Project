package carrental.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import carrental.model.Booking;
import carrental.model.BookingStatus;
import carrental.model.Car;
import carrental.repository.BookingRepo;
@Service
public class BookingServiceImpl implements BookinService {
	
	private static final BookingStatus bookingStatus = null;

	@Autowired
	private BookingRepo bookingRepo;
	
	@Autowired
	private CarService carService;

	@Override
	public BookingStatus newBooking(Booking booking) {
		// TODO Auto-generated method stub
		BookingStatus bookingStatus = new BookingStatus("Booking not fond");
		if(! bookingRepo.existsById(booking.getCar().getId()))
		{ 
			bookingRepo.updateStatus(booking.getCar().getId(), "booked");
			
			bookingRepo.save(booking);
			bookingStatus.setStatusMessage("Booking successful");
			bookingStatus.setBooking(booking);
		 
		}
		
		return bookingStatus;
	}

	@Override
	public List<Booking> allBookings() {
		// TODO Auto-generated method stub
		return bookingRepo.findAll();
	}

	@Override
	public BookingStatus deleteBooking(Booking booking) {
		// TODO Auto-generated method stub
		BookingStatus bookingStatus = new BookingStatus("Booking not fond");
		if(bookingRepo.existsById(booking.getBooking_id())) {
			
			bookingRepo.deleteById(booking.getBooking_id());
			bookingRepo.updateStatus(booking.getCar().getId(), "avail");
			bookingStatus.setStatusMessage("Booking deleted");
		}
		
		return bookingStatus;
	}

	@Override
	public List<Booking> findByCar(Car car) {
		// TODO Auto-generated method stub
		return bookingRepo.findByCar(car) ;
	}

}
