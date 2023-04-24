package carrental;

import java.time.LocalDate;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

 
import carrental.model.User;
 
import carrental.repository.UserRepository;

@SpringBootApplication
public class CarRental {// implements CommandLineRunner {

	public static void main(String[] args) {
		SpringApplication.run(CarRental.class, args);
	}

	/*@Autowired
	private CarRepository carRepository;

	@Autowired
	private StationRepository stationRepository;
	
	@Autowired
	private BookingRepository bookingRepository;
	
	@Autowired
	private UserRepository userRepository;

	@Override
	public void run(String... args) throws Exception {
		// TODO Auto-generated method stub

		System.out.println("Let's see if it is  working");
		
		List<Booking> user = bookingRepository.findAll();
		System.out.println(user);
		
		LocalDate d1 = LocalDate.of(2023,03, 10);
		LocalDate d2 = LocalDate.of(2023,03, 17);
		Station s1 = new Station(1,"Mumbai");
		Station s2 = new Station(2,"Lucknow");
		Car car = new Car("a3","luxury",15,1500,s1);
		User user1 = new User(26,"farhan","25","25@gmail.com","Male");
		userRepository.save(user1);
		Booking book = new Booking(3,d1,d2,"sajida",250,s1,s2,car,user1);
		bookingRepository.save(book);

	}*/

}
