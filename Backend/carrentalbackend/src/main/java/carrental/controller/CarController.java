package carrental.controller;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import carrental.model.Booking;
import carrental.model.BookingStatus;
import carrental.model.Car;
import carrental.service.CarService;

@RestController
@CrossOrigin("*")
public class CarController {
@Autowired
CarService carService;
 

@GetMapping("/caravail")
public List<Car> carAvailable( )
{
	List <Car> avail = carService.getcars();
	List <Car> unbooked=new ArrayList <>();
	for(Car car : avail)
	{
		 if(! car.getCar_status().equalsIgnoreCase("Booked"))
		 {
			unbooked.add(car);
		 }
	}
	return unbooked;
	
}
@GetMapping("/cars")
public List<Car> getcars()
{
return carService.getcars();	
}
 

@PostMapping("/addcar")
public Car addCar(@RequestBody Car car)
{	
	return carService.addCar(car);
}
 
 @PutMapping("/updatecar")
public void updateCar( @RequestBody Car car)
{
  carService.updaterate(car.getCar_no(), car.getCar_rate());
}  

@DeleteMapping("/cars/{id}")
public void deleteCar(@PathVariable long id)
{
  carService.deleteCar(id);	
}
}
