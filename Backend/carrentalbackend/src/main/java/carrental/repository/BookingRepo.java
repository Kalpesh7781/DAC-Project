package carrental.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

import carrental.model.Booking;
import carrental.model.Car;
 
@Repository
public interface BookingRepo extends JpaRepository<Booking, Long> {
	List<Booking> findByCar(Car car);
	
	@Transactional
	@Modifying
	@Query("update Car set car_status=:status where id=:l")
	void updateStatus(long l,String status);

 
}
