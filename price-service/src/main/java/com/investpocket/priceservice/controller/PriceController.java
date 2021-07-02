package com.investpocket.priceservice.controller;

import com.investpocket.priceservice.entity.Comodity;
import com.investpocket.priceservice.service.PriceServiceImpl;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

//@CrossOrigin
@RestController
public class PriceController {

    @Autowired
    PriceServiceImpl priceService;

    @GetMapping("/price/{name}")
    public List<Comodity> helloGet(@PathVariable(name = "name") String name) {
//        priceService.insertToDb();
        return priceService.getAllByName(name);
    }

}
