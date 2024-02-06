package com.form.security.services;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.form.models.individu;
import com.form.repository.individuRepositorie;



@Service
public class individuService {
	
	 @Autowired
	 individuRepositorie jr;
	   public List<individu> getAllIndividus(){
		
		   return jr.findAll();
	   }
	   
	   public individu addIndividu(individu j) {
		
		  return (individu) jr.save(j);
		
	   }
	   
	  public void deleteIndiviu(Long id) {
		 
		  jr.deleteById(id);
	  }
	  public individu updateIndividu(individu j) {
		
		  return (individu) jr.save(j);
	  }
	  public  Optional<individu> getIndividuById(Long id) {
	        return jr.findById(id);
	     }
	

	 
	  public Optional<individu> getIndividuByName(String name) {
	        return jr.findByNomIndividu(name);
	    }


}
