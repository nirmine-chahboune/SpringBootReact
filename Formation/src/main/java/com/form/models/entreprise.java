package com.form.models;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@NoArgsConstructor @AllArgsConstructor @Data
@Entity
public class entreprise {
	@Id
	Long id;
	String adresse;
	String tlf;
	String url;
	String email;

}
