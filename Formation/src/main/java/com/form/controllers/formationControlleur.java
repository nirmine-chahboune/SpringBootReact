package com.form.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.form.models.formation;




@CrossOrigin(origins = "*", maxAge = 3600)
@RestController
public class formationControlleur {
	
@Autowired com.form.security.services.formationService er ;
	
	@GetMapping("formation")
	public List<formation> getAllFormations(){
		return er.getAllFormations();
	}
	
	@PostMapping("formationra")
	public formation addFormation(@RequestBody formation a) {
		return er.addFormation(a);
	}
	
	
 	@DeleteMapping("formation/{id}")
	public void deleteFormation(@PathVariable Long id) {
		er.deleteFormation(id);
	}

}

