package carrental.service;

import java.util.List;

import org.springframework.stereotype.Service;

 
import carrental.model.Cancel;

@Service
public interface CancelService {
	List<Cancel> allCancel();
}
