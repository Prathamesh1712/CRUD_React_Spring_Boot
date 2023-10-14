package com.prathamesh.springbootbackend.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.prathamesh.springbootbackend.model.Emp;

@Repository
public interface Emprepo extends JpaRepository<Emp, Long> {

}
