package carrental.repository;

 

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import carrental.model.User;

@Repository
public interface UserRepository extends JpaRepository<User, Long> {
	
	
  
}
