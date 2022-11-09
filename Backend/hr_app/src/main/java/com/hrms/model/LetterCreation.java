package com.hrms.model;


import java.sql.Timestamp;
import java.util.Date;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name="offer_letter_issues_info")
public class LetterCreation {
	
	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private Integer role_id;
	private String name ; 
	private String email_id;
	private String mobile_no;
	private Date issued_date;
	private double ctc;
	private Integer variable_percentage;
	private String created_by;
	private Timestamp  created_date;
	private Integer designation_id;
	
	
	public Integer getRole_id() {
		return role_id;
	}
	public void setRole_id(Integer role_id) {
		this.role_id = role_id;
	}
	public String getName() {
		return name;
	}
	public void setName(String name) {
		this.name = name;
	}
	public String getEmail_id() {
		return email_id;
	}
	public void setEmail_id(String email_id) {
		this.email_id = email_id;
	}
	public String getMobile_no() {
		return mobile_no;
	}
	public void setMobile_no(String mobile_no) {
		this.mobile_no = mobile_no;
	}
	public Date getIssued_date() {
		return issued_date;
	}
	public void setIssued_date(Date issued_date) {
		this.issued_date = issued_date;
	}
	public double getCtc() {
		return ctc;
	}
	public void setCtc(double ctc) {
		this.ctc = ctc;
	}
	public Integer getVariable_percentage() {
		return variable_percentage;
	}
	public void setVariable_percentage(Integer variable_percentage) {
		this.variable_percentage = variable_percentage;
	}
	public String getCreated_by() {
		return created_by;
	}
	public void setCreated_by(String created_by) {
		this.created_by = created_by;
	}
	public Timestamp getCreated_date() {
		return created_date;
	}
	public void setCreated_date(Timestamp created_date) {
		this.created_date = created_date;
	}
	public Integer getDesignation_id() {
		return designation_id;
	}
	public void setDesignation_id(Integer designation_id) {
		this.designation_id = designation_id;
	}
	
	public LetterCreation() {
		super();
		
	}
	public LetterCreation(String name, String email_id, String mobile_no, Date issued_date, double ctc,
			Integer variable_percentage, String created_by, Timestamp created_date, Integer designation_id) {
		super();
		this.name = name;
		this.email_id = email_id;
		this.mobile_no = mobile_no;
		this.issued_date = issued_date;
		this.ctc = ctc;
		this.variable_percentage = variable_percentage;
		this.created_by = created_by;
		this.created_date = created_date;
		this.designation_id = designation_id;
	}
	@Override
	public String toString() {
		return "LetterCreation [role_id=" + role_id + ", name=" + name + ", email_id=" + email_id + ", mobile_no="
				+ mobile_no + ", issued_date=" + issued_date + ", ctc=" + ctc + ", variable_percentage="
				+ variable_percentage + ", created_by=" + created_by + ", created_date=" + created_date
				+ ", designation_id=" + designation_id + "]";
	}
}