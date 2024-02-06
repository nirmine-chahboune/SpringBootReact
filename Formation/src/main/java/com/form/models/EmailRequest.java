package com.form.models;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@NoArgsConstructor @AllArgsConstructor @Data
@Entity
public class EmailRequest {
	
	@Id
	private String vers;
    private String formationName;
    private String formateurName;

}
