package com.form.security.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Service;

import com.form.models.formateur;
import com.form.repository.formateurRepositorie;


@Service
public class  formateurService  {
	 @Autowired
	formateurRepositorie fr;
	   public List<formateur> getAllFormateurs(){
		   return fr.findAll();
	   }
	  
	   public formateur addFormateur(formateur p) {
		  return (formateur) fr.save(p);
		
	   }
	   
	  public void deleteFormateur(Long id) {
		  fr.deleteById(id);
	  }
	  public formateur updateFormateur(formateur p) {
		  return (formateur) fr.save(p);
	  }
	  public formateur getFormateurById(Long id) {
			// 
			return fr.getById(id);
		}
	  


}
