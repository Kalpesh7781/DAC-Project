package carrental.model;
import java.sql.Date;

import javax.persistence.Entity;
import javax.persistence.Id;
 
 
@Entity
public class User {
	  private String user_nm;
	  @Id
	  private long user_no;
	  private String user_email;
	  private Date user_dob;
	  private String user_gender;
	  private String user_address;
	  private String user_city;
	  private String user_state;
	  private int user_zip;
	  private long user_adhar;
	  private String user_password;
	public User() {
		super();
	}
	public String getUser_nm() {
	    return user_nm;
	}
	public void setUser_nm(String user_nm) {
	    this.user_nm = user_nm;
	}
	public long getUser_no() {
	    return user_no;
	}
	public void setUser_no(long user_no) {
	    this.user_no = user_no;
	}
	public String getUser_email() {
	    return user_email;
	}
	public void setUser_email(String user_email) {
	    this.user_email = user_email;
	}
	public Date getUser_dob() {
	    return user_dob;
	}
	public void setUser_dob(Date user_dob) {
	    this.user_dob = user_dob;
	}
	public String getUser_gender() {
	    return user_gender;
	}
	public void setUser_gender(String user_gender) {
	    this.user_gender = user_gender;
	}
	public String getUser_address() {
	    return user_address;
	}
	public void setUser_address(String user_address) {
	    this.user_address = user_address;
	}
	public String getUser_city() {
	    return user_city;
	}
	public void setUser_city(String user_city) {
	    this.user_city = user_city;
	}
	public String getUser_state() {
	    return user_state;
	}
	public void setUser_state(String user_state) {
	    this.user_state = user_state;
	}
	public int getUser_zip() {
	    return user_zip;
	}
	public void setUser_zip(int user_zip) {
	    this.user_zip = user_zip;
	}
	public long getUser_adhar() {
	    return user_adhar;
	}
	public void setUser_adhar(long user_adhar) {
	    this.user_adhar = user_adhar;
	}
	public String getUser_password() {
	    return user_password;
	}
	public void setUser_password(String user_password) {
	    this.user_password = user_password;
	}
	public User(String user_nm, long user_no, String user_email, Date user_dob, String user_gender, String user_address,
	        String user_city, String user_state, int user_zip, long user_adhar, String user_password) {
	    this.user_nm = user_nm;
	    this.user_no = user_no;
	    this.user_email = user_email;
	    this.user_dob = user_dob;
	    this.user_gender = user_gender;
	    this.user_address = user_address;
	    this.user_city = user_city;
	    this.user_state = user_state;
	    this.user_zip = user_zip;
	    this.user_adhar = user_adhar;
	    this.user_password = user_password;
	}
	@Override
	public String toString() {
	    return "User [user_nm=" + user_nm + ", user_no=" + user_no + ", user_email=" + user_email + ", user_dob=" + user_dob
	            + ", user_gender=" + user_gender + ", user_address=" + user_address + ", user_city=" + user_city
	            + ", user_state=" + user_state + ", user_zip=" + user_zip + ", user_adhar=" + user_adhar
	            + ", user_password=" + user_password + "]";
	}


	}