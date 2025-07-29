package com.groovo.controller;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class DeploymentController {

    @GetMapping("/")
    public String home() {
        return "Groovo server is running on port 3000!";
    }
}
