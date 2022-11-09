package com.hrms;

import javax.mail.MessagingException;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.context.event.ApplicationReadyEvent;
import org.springframework.context.event.EventListener;

@SpringBootApplication
public class HrAppApplication {
	
	@Autowired
	private EmailSenderService emailSenderService;

	public static void main(String[] args) {
		SpringApplication.run(HrAppApplication.class, args);
	}

	@EventListener(ApplicationReadyEvent.class)
	public void triggerEmail() throws MessagingException {
		emailSenderService.sendMailWithAttachment("letteremailsending@gmail.com", "Nexturn provides branding, advertising, animation, UX design, social media management, web development, and digital marketing ... Brandstory Solutions Logo.", 
				"Nexturn Email Attachment", "D:\\downloads\\deepu.jpg");
	}
}
