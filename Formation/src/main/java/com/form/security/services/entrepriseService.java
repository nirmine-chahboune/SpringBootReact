package com.form.security.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.form.models.entreprise;
import com.form.repository.entrepriseRepositorie;




@Service
public class entrepriseService {
	
	@Autowired
	entrepriseRepositorie er;
	   public List<entreprise> getAllEntreprises(){
		   return er.findAll();
	   }
	  
	   public entreprise addEntreprise(entreprise p) {
		  return (entreprise) er.save(p);
		
	   }
	   
	  public void deleteEntreprise(Long id) {
		  er.deleteById(id);
	  }
	  public entreprise updateEntreprise(entreprise p) {
		  return (entreprise) er.save(p);
	  }
	  public entreprise getEntrepriseById(Long id) {
			// 
			return er.getById(id);
		}

}
