package carrental.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

 
import carrental.model.Cancel;

@Repository
public interface CancelRepo extends JpaRepository<Cancel, Long> {

}
