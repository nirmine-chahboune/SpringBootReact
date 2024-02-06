package com.form.models;

import com.fasterxml.jackson.annotation.JsonBackReference;


import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@NoArgsConstructor @AllArgsConstructor @Data
@Entity
public class Evaluation {

    @Id
    private Long idEvaluation;

    private int qualitePedagogique;
    private int rythme;
    private int supportCoursTP;
    private int maitriseSujet;

    // Clé étrangère vers Formateur
    @ManyToOne
    @JsonBackReference(value = "formateur")
   @JoinColumn(name="formateur_id")
    private formateur formateur;

    // Les autres champs, getters, setters, etc.
}
