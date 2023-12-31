package com.shreyash.backend.mail;

import com.shreyash.backend.product.Product;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class MailController {
    private MailService mailService;

    @Autowired
    public MailController(MailService mailService) {
        this.mailService = mailService;
    }

    @PostMapping("/mail/send/")
    public String sendMail(@RequestBody Product product){
        mailService.sendMail(new MailStructure(product));
        return "Successful";
    }
}
