package com.form.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.mail.SimpleMailMessage;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.form.models.EmailRequest;



@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/api/email")
public class EmailController {

    private final JavaMailSender emailSender;

    @Autowired
    public EmailController(JavaMailSender emailSender) {
        this.emailSender = emailSender;
    }

    @PostMapping("/send")
    public void sendEmail(@RequestBody EmailRequest emailRequest) {
    	try {
            System.out.printf("Recipient Email Address: %n%s", emailRequest.getVers());

        SimpleMailMessage message = new SimpleMailMessage();
        if (emailRequest.getVers() != null && !emailRequest.getVers().isEmpty()) {
        message.setTo(emailRequest.getVers());
        message.setSubject("Bienvenu a la  Formation");
        message.setText("bonsoir, merci pour votre interet a nos formations "
        		+ "vous avez recu ce message pour vous informer que nous vous affectons le formateur   " +
                emailRequest.getFormateurName() +
                " pour Votre formation " +
                emailRequest.getFormationName() +"priere d insister a l heure");

        emailSender.send(message);
        } else {  System.out.printf("empty name");}
    	 } catch (Exception e) {
    		 System.out.printf("Error sending email", e);
    	    }
    }
    
    @PostMapping("/sendNotif")
    public void sendEmailNotif(@RequestBody EmailRequest emailRequest) {
    	try {
            System.out.printf("Recipient Email Address: %n%s", emailRequest.getVers());

        SimpleMailMessage message = new SimpleMailMessage();
        if (emailRequest.getVers() != null && !emailRequest.getVers().isEmpty()) {
        message.setTo(emailRequest.getVers());
        message.setSubject("Evaluation message");
        String evaluationLink = "https://forms.gle/F2c2u4fbUe3xiGqb6"; // Replace with your actual evaluation link
        String emailText = "bonsoir, merci pour votre intérêt à nos formations. Veuillez évaluer votre formateur en cliquant sur ce lien: "
                + "<a href=\"" + evaluationLink + "\">Évaluation</a>";
        message.setText(emailText);
         

        emailSender.send(message);
        } else {  System.out.printf("empty name");}
    	 } catch (Exception e) {
    		 System.out.printf("Error sending email", e);
    	    }
    }
}

