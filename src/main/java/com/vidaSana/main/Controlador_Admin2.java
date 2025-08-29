package com.vidaSana.main;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api")
public class Controlador_Admin2 {
    @GetMapping("/hola")
    public String hola() {
        return "Hola Mundo!";
    }
}
