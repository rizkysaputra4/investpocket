package com.investpocket.priceservice.repository;

import com.investpocket.priceservice.entity.Comodity;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface PriceRepository extends JpaRepository<Comodity, String> {

    public List<Comodity> findByName(String name);

}
