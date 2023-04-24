package carrental.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import carrental.model.Booking;
import carrental.model.BookingStatus;
import carrental.model.Cancel;
import carrental.model.Car;
import carrental.service.BookinService;
import carrental.service.CancelService;

@RestController
@CrossOrigin("*")
public class BookingController {
@Autowired
private BookinService bookingService;

@Autowired
private CancelService cancelService;

@GetMapping("/allbookings")
public List< Booking > allBookings(){
	return bookingService.allBookings();
}

 

@DeleteMapping("/deletebooking")
public BookingStatus deleteBooking(@RequestBody Booking booking) {
	return bookingService.deleteBooking(booking);
}

@GetMapping("/findbycar")
public List<Booking> findByCar(@RequestBody Car car){
	return bookingService.findByCar(car);
}

@GetMapping("/cancel")
public List<Cancel> cancelBooking( ){
	return  cancelService.allCancel();
}
 
@PostMapping("/newbooking")
public BookingStatus newBooking(@RequestBody Booking booking) {
	return bookingService.newBooking(booking);
}
}
