package carrental.service;

import java.util.List;

import javax.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import carrental.model.Car;
import carrental.repository.BookingRepo;
import carrental.repository.CarRepository;
@Service
public class CarServiceImpl implements CarService{
	@Autowired
CarRepository carRepository;
	@Autowired
	BookingRepo bookingRepo;

	@Override
	public List<Car> getcars() {
		// TODO Auto-generated method stub
		return carRepository.findAll();
	}

	@Override
	public Car addCar(Car car) {
		// TODO Auto-generated method stub
		if (! carRepository.existsById(car.getId()))
		{
			carRepository.save(car);
			 bookingRepo.updateStatus(car.getId(), "avail");
			
		} 
		 
		return car;
	}
	


	@Override
	public  void  deleteCar(long id) {
		// TODO Auto-generated method stub
		   carRepository.deleteById(id);
	}

	@Override
	public void updaterate(String x, int rate) {
		// TODO Auto-generated method stub
		  carRepository.updaterate(x, rate);
	}
 
}
