package com.form.models;

import java.util.Date;
import java.util.HashSet;
import java.util.Set;

import jakarta.persistence.CascadeType;
import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
 
import jakarta.persistence.ManyToOne;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import jakarta.persistence.JoinColumn;

@NoArgsConstructor @AllArgsConstructor @Data
@Entity(name = "individu")
public class individu {
	@Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
	

Long idEIndividu;
String nomIndividu;
String prenom;
Date datenaiss;
String ville;
String email;
String phone;
String nomFormation;
String nomFormateur;
Boolean done=false;

@ManyToOne(cascade = CascadeType.PERSIST)
@JoinColumn(name = "formation_id")
private formation formation;

@ManyToOne
@JoinColumn(name = "formateur_id")
private formateur formateur;

}
