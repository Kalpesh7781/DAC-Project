package carrental.model;

public class BookingStatus {
	private String statusMessage;
	private Car car;
	 private User user;
	private Booking booking;
	public String getStatusMessage() {
		return statusMessage;
	}
	public void setStatusMessage(String statusMessage) {
		this.statusMessage = statusMessage;
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
	public Booking getBooking() {
		return booking;
	}
	public void setBooking(Booking booking) {
		this.booking = booking;
	}
	public BookingStatus(String statusMessage, Car car, User user, Booking booking) {
		this.statusMessage = statusMessage;
		this.car = car;
		this.user = user;
		this.booking = booking;
	}
	public BookingStatus() {
		super();
	}
	public BookingStatus(String statusMessage) {
		super();
		this.statusMessage = statusMessage;
	}
	
	
}
