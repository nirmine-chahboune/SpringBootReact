package com.form.security.services;


import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.form.models.Evaluation;
import com.form.repository.evaluationRepositorie;



@Service
public class evaluationService {
	@Autowired
	evaluationRepositorie fr;
	   public List<Evaluation> getAllEvaluations(){
		   return fr.findAll();
	   }
	  
	   public Evaluation addEvaluation(Evaluation p) {
		  return (Evaluation) fr.save(p);
		
	   }
	   
	  public void deleteEvaluation(Long id) {
		  fr.deleteById(id);
	  }
	  public Evaluation updateEvaluation(Evaluation p) {
		  return (Evaluation) fr.save(p);
	  }
	  public Evaluation getEvaluationById(Long id) {
			// 
			return fr.getById(id);
		}
	  

}

