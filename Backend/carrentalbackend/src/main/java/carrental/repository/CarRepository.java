package carrental.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
 
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

import carrental.model.Car;
 

@Repository
public interface CarRepository extends JpaRepository<Car, Long> {
 

	@Transactional
	@Modifying
	@Query("update Car set car_rate=:rate where car_no=:x")
	void updaterate(String x,int rate);
}
