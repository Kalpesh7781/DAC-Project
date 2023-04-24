package carrental.model;
 

import java.sql.Blob;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
@Entity
public class Car { 
@Id
@GeneratedValue(strategy=GenerationType.IDENTITY)
private long id;
  
private String car_nm;
 private String car_brnd;
 private String car_no;
 private int car_model;
 private  int car_milage;
 private int car_rate;
 private String car_varient;
 private String car_capacity;
 private String car_ac;
 private String car_address;
 private String car_city;
 private String car_img;

private String car_status;

public long getId() {
	return id;
}

public void setId(long id) {
	this.id = id;
}

public String getCar_nm() {
	return car_nm;
}

public void setCar_nm(String car_nm) {
	this.car_nm = car_nm;
}

public String getCar_brnd() {
	return car_brnd;
}

public void setCar_brnd(String car_brnd) {
	this.car_brnd = car_brnd;
}

public String getCar_no() {
	return car_no;
}

public void setCar_no(String car_no) {
	this.car_no = car_no;
}

public int getCar_model() {
	return car_model;
}

public void setCar_model(int car_model) {
	this.car_model = car_model;
}

public int getCar_milage() {
	return car_milage;
}

public void setCar_milage(int car_milage) {
	this.car_milage = car_milage;
}

public int getCar_rate() {
	return car_rate;
}

public void setCar_rate(int car_rate) {
	this.car_rate = car_rate;
}

public String getCar_varient() {
	return car_varient;
}

public void setCar_varient(String car_varient) {
	this.car_varient = car_varient;
}

public String getCar_capacity() {
	return car_capacity;
}

public void setCar_capacity(String car_capacity) {
	this.car_capacity = car_capacity;
}

public String getCar_ac() {
	return car_ac;
}

public void setCar_ac(String car_ac) {
	this.car_ac = car_ac;
}

public String getCar_address() {
	return car_address;
}

public void setCar_address(String car_address) {
	this.car_address = car_address;
}

public String getCar_city() {
	return car_city;
}

public void setCar_city(String car_city) {
	this.car_city = car_city;
}

public String getCar_img() {
	return car_img;
}

public void setCar_img(String car_img) {
	this.car_img = car_img;
}

public String getCar_status() {
	return car_status;
}

public void setCar_status(String car_status) {
	this.car_status = car_status;
}

public Car() {
	super();
}

public Car(long id, String car_nm, String car_brnd, String car_no, int car_model, int car_milage, int car_rate,
		String car_varient, String car_capacity, String car_ac, String car_address, String car_city, String car_img,
		String car_status) {
	super();
	this.id = id;
	this.car_nm = car_nm;
	this.car_brnd = car_brnd;
	this.car_no = car_no;
	this.car_model = car_model;
	this.car_milage = car_milage;
	this.car_rate = car_rate;
	this.car_varient = car_varient;
	this.car_capacity = car_capacity;
	this.car_ac = car_ac;
	this.car_address = car_address;
	this.car_city = car_city;
	this.car_img = car_img;
	this.car_status = car_status;
}
 

}
