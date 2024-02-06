package com.form.controllers;

import java.util.List;

import java.util.Optional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import com.form.models.IndividuReussi;
import com.form.models.individu;
import com.form.security.services.IndividuReussiService;
import com.form.security.services.individuService;



@CrossOrigin(origins = "*")
@RestController
public class IndividuReussiControlleur {

    @Autowired
    private IndividuReussiService ir;

    @Autowired
    private individuService individuService; 

    @GetMapping("/IndividuReussi")
    public List<IndividuReussi> getAllIndividuReussi() {
        return ir.getAllIndividuReussis();
    }

    @PostMapping("/IndividuReussia")
    public IndividuReussi addIndividuReussi(@RequestBody IndividuReussi a) {
        return ir.addIndividuReussi(a);
    }

    @DeleteMapping("/IndividuReussi/{id}")
    public void deleteIndividuReussi(@PathVariable Long id) {
        ir.deleteIndividuReussi(id);
    }

 // ...
    @PostMapping("/InsertIndividuReussi/{individualId}")
    public IndividuReussi insertIndividuReussi(@PathVariable Long individualId) {
        // Fetch the individual details from the individu table
        Optional<individu> optionalIndividual = individuService.getIndividuById(individualId);

        if (optionalIndividual.isPresent()) {
            individu individual = optionalIndividual.get();

            // Create a new IndividuReussi object and set its properties
            IndividuReussi individuReussi = new IndividuReussi();
            individuReussi.setIndividuName(individual.getNomIndividu());
            individuReussi.setIndividugmail(individual.getEmail());
            individuReussi.setFormationName(individual.getNomFormation()); // Set the actual formation name
            individuReussi.setFormateurName(""); // Set the actual formateur name

            // Save the IndividuReussi object
            return ir.addIndividuReussi(individuReussi); // Use 'ir' to call the service method
        } else {
            // Handle the case where the individual with the given ID is not found
        	System.out.printf("id not found");
             
        }
		return null;
    }
    
    @PostMapping("/InsertIndividuReussin/{individualName}")
    public  IndividuReussi insertIndividuReussin(@PathVariable String individualName) {
        // Fetch the individual details from the individu table by name
        Optional<individu> optionalIndividual = individuService.getIndividuByName(individualName);

        if (optionalIndividual.isPresent()) {
            individu individual = optionalIndividual.get();

            // Create a new IndividuReussi object and set its properties
            IndividuReussi individuReussi = new IndividuReussi();
            individuReussi.setIndividuName(individual.getNomIndividu());
            individuReussi.setIndividugmail(individual.getEmail());
            individuReussi.setFormationName(individual.getNomFormation()); // Set the actual formation name
            individuReussi.setFormateurName(""); // Set the actual formateur name

            // Save the IndividuReussi object
            IndividuReussi savedIndividuReussi = ir.addIndividuReussi(individuReussi);

            return savedIndividuReussi;
        } else {
            // Handle the case where the individual with the given name is not found
            System.out.printf("Individual with name %s not found", individualName);
                    }
		return null;
     }

    // ...

}
