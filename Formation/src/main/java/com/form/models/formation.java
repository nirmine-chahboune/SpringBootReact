package com.form.models;

import java.util.HashSet;
import java.util.Set;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.OneToMany;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@NoArgsConstructor @AllArgsConstructor @Data
@Entity
public class formation {

	@Id
	
	Long id;
	String nom;
	int nbrH;
	Double cout;
	String objectif;
	String programme;
	// Inside the formation class
	@OneToMany(mappedBy = "formation")
	private Set<individu> individus = new HashSet<>();

}
