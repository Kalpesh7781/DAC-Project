package carrental.model;

import java.time.LocalDate;

import javax.persistence.CascadeType;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.ManyToOne;

import org.springframework.format.annotation.DateTimeFormat;
import org.springframework.lang.NonNull;

@Entity
public class Booking {
	@Id
	@GeneratedValue(strategy=GenerationType.IDENTITY)
	private long booking_id;
	 

	@NonNull
	@DateTimeFormat(pattern = "yyyy-MM-dd")
	private LocalDate rentalDate;
	
	@NonNull
	@DateTimeFormat(pattern = "yyyy-MM-dd")
	private LocalDate returndate;
	
	@ManyToOne 
	private Car car;

	@ManyToOne 
	private User user;
	
	int ammt;

	public Booking() {
		super();
	}

	public long getBooking_id() {
		return booking_id;
	}

	public void setBooking_id(long booking_id) {
		this.booking_id = booking_id;
	}

	public LocalDate getRentalDate() {
		return rentalDate;
	}

	public void setRentalDate(LocalDate rentalDate) {
		this.rentalDate = rentalDate;
	}

	public LocalDate getReturndate() {
		return returndate;
	}

	public void setReturndate(LocalDate returndate) {
		this.returndate = returndate;
	}

	public Car getCar() {
		return car;
	}

	public void setCar(Car car) {
		this.car = car;
	}

	public User getUser() {
		return user;
	}

	public void setUser(User user) {
		this.user = user;
	}

	public int getAmmt() {
		return ammt;
	}

	public void setAmmt(int ammt) {
		this.ammt = ammt;
	}

	public Booking(long booking_id, LocalDate rentalDate, LocalDate returndate, Car car, User user, int ammt) {
		super();
		this.booking_id = booking_id;
		this.rentalDate = rentalDate;
		this.returndate = returndate;
		this.car = car;
		this.user = user;
		this.ammt = ammt;
	}

	@Override
	public String toString() {
		return "Booking [booking_id=" + booking_id + ", rentalDate=" + rentalDate + ", returndate=" + returndate
				+ ", car=" + car + ", user=" + user + ", ammt=" + ammt + "]";
	}

	
}
