package com.hrms.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.hrms.model.LetterCreation;

@Repository
public interface LetterCreationRepository  extends JpaRepository <LetterCreation , Integer>{

}
