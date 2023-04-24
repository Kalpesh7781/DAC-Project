package carrental.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import carrental.model.Cancel;
import carrental.repository.BookingRepo;
import carrental.repository.CancelRepo;
@Service
public class CancelServiceImpl implements CancelService{


	@Autowired
	private CancelRepo cancelRepo;
	@Override
	public List<Cancel> allCancel() {
		// TODO Auto-generated method stub
		return cancelRepo.findAll();
	}

}
