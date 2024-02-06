package com.form.security.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.form.models.formation;
import com.form.repository.formationRepositorie;

@Service
public class formationService {
	
	 @Autowired
		formationRepositorie fr;
		   public List<formation> getAllFormations(){
			   return fr.findAll();
		   }
		  
		   public formation addFormation(formation p) {
			  return (formation) fr.save(p);
			
		   }
		   
		  public void deleteFormation(Long id) {
			  fr.deleteById(id);
		  }
		  public formation updateFormation(formation p) {
			  return (formation ) fr.save(p);
		  }
		  public formation getFormationById(Long id) {
				// 
				return fr.getById(id);
			}
		  

}
