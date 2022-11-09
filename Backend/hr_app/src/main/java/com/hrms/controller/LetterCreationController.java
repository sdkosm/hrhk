package com.hrms.controller;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.hrms.exception.ResourceNotFoundException;
import com.hrms.model.LetterCreation;
import com.hrms.repository.LetterCreationRepository;

@RestController
@RequestMapping("/api/v1")
public class LetterCreationController {

		@Autowired
		private LetterCreationRepository letterCreationRepository;
		
		//get all samples 
		@GetMapping("/letter_creation")
		public List<LetterCreation> getAllLetters(){
			return 	letterCreationRepository.findAll();
		}
		
		//create new sample
		@PostMapping("/letter_creation")
		public LetterCreation createLetter(@RequestBody LetterCreation letter) {
			return letterCreationRepository.save( letter);
		}
		
		//get sample by id
		@GetMapping("/letter_creation/{role_id}")
		public ResponseEntity<LetterCreation> getLetterById(@PathVariable Integer role_id) {
			LetterCreation  letter = letterCreationRepository.findById(role_id).orElseThrow(() -> new ResourceNotFoundException("Employee not  exist with id:" + role_id));
			return ResponseEntity.ok( letter);
		}
		
		//update sample rest api
		@PutMapping("/letter_creation/{role_id}")
		public ResponseEntity<LetterCreation> updateLetter(@PathVariable Integer role_id,@RequestBody  LetterCreation letterDetails){
			LetterCreation  letter = letterCreationRepository.findById(role_id).orElseThrow(() -> new ResourceNotFoundException("Employee not  exist with id:" + role_id));
			
			 letter.setName(letterDetails.getName());
			 letter.setEmail_id(letterDetails.getEmail_id());
			 letter.setMobile_no(letterDetails.getMobile_no());
			 letter.setIssued_date(letterDetails.getIssued_date());
			 letter.setCtc(letterDetails.getCtc());
			 letter.setVariable_percentage(letterDetails.getVariable_percentage());
			 letter.setCreated_by(letterDetails.getCreated_by());
			 letter.setCreated_date(letterDetails.getCreated_date());
			 letter.setDesignation_id(letterDetails.getDesignation_id());
			 
			LetterCreation updateLetter = letterCreationRepository.save(letter);
			return ResponseEntity.ok(updateLetter);
		}
		
		//delete sample rest api
		@DeleteMapping("/letter_creation/{role_id}")
		public ResponseEntity<Map<String,Boolean>> deleteLetter(@PathVariable Integer role_id){
			LetterCreation letter = letterCreationRepository.findById(role_id).orElseThrow(() -> new ResourceNotFoundException("Employee not  exist with id:" + role_id));
			
			letterCreationRepository.delete(letter);
			Map<String , Boolean> response = new HashMap<>();
			response.put("deleted", Boolean.TRUE);
			return ResponseEntity.ok(response);
		}
	}
