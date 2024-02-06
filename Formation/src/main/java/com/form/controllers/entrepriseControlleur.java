package com.form.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.form.models.entreprise;



@RestController
public class entrepriseControlleur {
	

@Autowired com.form.security.services.entrepriseService er ;

	@GetMapping("entreprise")
	public List<entreprise> getAllEntreprises(){
		return er.getAllEntreprises();
	}
	
	
	@PostMapping("entreprisea")
	public entreprise addFormation(@RequestBody entreprise a) {
		return er.addEntreprise(a);
	}
	
	@DeleteMapping("entreprise/{id}")
	public void deleteFormation(@PathVariable Long id) {
		er.deleteEntreprise(id);
	}
}
