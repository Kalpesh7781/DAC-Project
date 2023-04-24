package carrental.service;

 

import java.util.List;

import org.springframework.stereotype.Service;

import carrental.model.User;

 

@Service
public interface UserService {
	
	 
	List<User> findAll();
	User addUser(User user);
   User getUser(long id);

}
