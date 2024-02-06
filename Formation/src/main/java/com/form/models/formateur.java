package com.form.models;

import java.util.Date;
import java.util.HashSet;
import java.util.List;
import java.util.Set;

import jakarta.persistence.CascadeType;
import jakarta.persistence.Entity;
import jakarta.persistence.FetchType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.OneToMany;


import com.fasterxml.jackson.annotation.JsonIgnore;
  
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@NoArgsConstructor @AllArgsConstructor @Data
@Entity
public class formateur {
	@Id
	Long idformateur;
	String nom;
	int numero;
	String motcle;
	String remarque;
	@JsonIgnore  
	@OneToMany(mappedBy = "formateur",cascade = CascadeType.ALL,fetch = FetchType.LAZY)
	private List<Evaluation> evaluations;
	
	// Inside the formateur class
	@OneToMany(mappedBy = "formateur")
	private Set<individu> individus = new HashSet<>();

	

}