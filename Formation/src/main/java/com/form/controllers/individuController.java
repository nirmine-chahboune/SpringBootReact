package com.form.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.form.models.individu;






@CrossOrigin(origins = "*")
@RestController
public class individuController {
	
@Autowired com.form.security.services.individuService ir ;
	
@GetMapping("individu")
public List<individu> getAllIndividus(){
	return ir.getAllIndividus();
}

@PostMapping("individua")
public individu addIndividu(@RequestBody individu a) {
	return ir.addIndividu(a);
}

 

}
