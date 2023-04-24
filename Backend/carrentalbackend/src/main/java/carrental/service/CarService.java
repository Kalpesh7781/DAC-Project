package carrental.service;

import java.util.List;

import org.springframework.stereotype.Service;

import carrental.model.Car;

@Service
public interface CarService {

	List<Car> getcars();
	void updaterate(String x,int rate);
	Car addCar(Car car);
 
void deleteCar(long id);
	
	
}
