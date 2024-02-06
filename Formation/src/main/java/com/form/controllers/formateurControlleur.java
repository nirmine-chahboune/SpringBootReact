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

import com.form.models.formateur;



@CrossOrigin(origins = "*")
@RestController
public class formateurControlleur {
@Autowired com.form.security.services.formateurService er ;
	
	@GetMapping("formateur")
	public List<formateur> getAllFormateurs(){
		return er.getAllFormateurs();
	}
	

	@PostMapping("formateura")
	public formateur addFormateur(@RequestBody formateur a) {
		return er.addFormateur(a);
	}
	
	
	@DeleteMapping("formateur/{id}")
	public void deleteFormateur(@PathVariable Long id) {
		er.deleteFormateur(id);
	}

}
