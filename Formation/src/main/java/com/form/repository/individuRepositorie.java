package com.form.repository;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.form.models.individu;



@Repository
public interface individuRepositorie extends JpaRepository<individu, Long>{
	  Optional<individu> findByNomIndividu(String name);
}
