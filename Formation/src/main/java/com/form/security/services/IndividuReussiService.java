package com.form.security.services;

import java.util.List;
import java.util.Optional;

 

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.form.models.IndividuReussi;
import com.form.repository.IndividuReussiRepositorie;



@Service
public class IndividuReussiService {

    @Autowired
    private IndividuReussiRepositorie ir;

    public List<IndividuReussi> getAllIndividuReussis() {
        return ir.findAll();
    }

    public IndividuReussi addIndividuReussi(IndividuReussi p) {
        return ir.save(p);
    }

    public void deleteIndividuReussi(Long id) {
        ir.deleteById(id);
    }

    public IndividuReussi updateIndividuReussi(IndividuReussi p) {
        return ir.save(p);
    }

    public Optional<IndividuReussi> getIndividuReussiById(Long id) {
        return ir.findById(id);
     }
}

