package carrental.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

 
import carrental.model.User;
import carrental.repository.UserRepository;

@Service
public class UserServiceImplementation implements UserService {
	
	@Autowired
	private UserRepository userRepository;

	 

	@Override
	public List<User> findAll() {
		// TODO Auto-generated method stub
		return userRepository.findAll() ;
	}

	@Override
	public User addUser(User user) {
		// TODO Auto-generated method stub
		 userRepository.save(user);
		return user ;
	}

	@Override
	public User getUser(long id) {
		// TODO Auto-generated method stub
		return userRepository.getOne(id);
	}
 

 
  
 
 
	 

	 

}
