package carrental.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
 
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;
 
import carrental.model.User;
 
import carrental.service.UserService;

@RestController
@CrossOrigin("*")
public class UserController {
	

	@Autowired
	private UserService userService;

  

	@GetMapping("/allusers")
	public List<User> findAll() {
		return userService.findAll();
	}

	@PostMapping("/adduser")
	public User addUser(@RequestBody User user) {
		return userService.addUser(user);
	}
	 
	@GetMapping("/getuser/{id}")
	public String getpassword(@PathVariable long id) {
		User u= userService.getUser(id);
		String password=u.getUser_password();
		return password;
	}
 
}
