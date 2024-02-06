package com.form.models;

import java.util.Date;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@NoArgsConstructor @AllArgsConstructor @Data
@Entity
public class IndividuReussi {

	@Id
    @GeneratedValue(strategy = GenerationType.IDENTITY) // Use the appropriate strategy
 
	Long id;
	String individuName;
	String individugmail;
	String FormateurName;
	String FormationName;
	
}
