package com.investpocket.priceservice.service;

import com.investpocket.priceservice.entity.Comodity;
import com.investpocket.priceservice.repository.PriceRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.time.LocalDate;
import java.time.ZoneOffset;
import java.util.ArrayList;
import java.util.Date;
import java.util.List;

@Service
public class PriceServiceImpl {

    @Autowired
    PriceRepository priceRepository;

    public List<Comodity> getAllByName(String name) {
        return priceRepository.findByName(name);
    }

    public void insertToDb() {

        String[] product = {"silver", "gold", "platinum"};

           for (Integer j = 0; j < 3; j++) {
               for (Integer i = 0; i <= 30; i++) {

                   LocalDate date = LocalDate.now().minusDays(30-i);
                   Date date1 = Date.from(date.atStartOfDay(ZoneOffset.systemDefault()).toInstant());

                   int random2 = (int )(Math.random() * 50000 + 100000);
                   int random3 = (int )(Math.random() * 50000 + 100000);
                   Comodity comodity = new Comodity();
                   comodity.setName(product[j]);
                   comodity.setPriceBuy(((400000 * (j+1)) + random2));
                   comodity.setPriceSell(comodity.getPriceBuy() - random3);
                   comodity.setDate(date1);
                   System.out.println(comodity);
                   priceRepository.save(comodity);
               }
   }

    }

}
