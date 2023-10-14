package com.prathamesh.springbootbackend.controller;

import java.util.List;

import org.apache.catalina.User;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.prathamesh.springbootbackend.exception.EmpNotFound;
import com.prathamesh.springbootbackend.model.Emp;
import com.prathamesh.springbootbackend.repository.Emprepo;

import net.bytebuddy.asm.Advice.Return;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping
public class EmpController {

	@Autowired
	private Emprepo emprepo;

	@GetMapping("/emps")
	public List<Emp> getAllEmployee() {

		return emprepo.findAll();

	}

	@PostMapping("/emp")
	public Emp createEmp(@RequestBody Emp emp) {

		return emprepo.save(emp);
	}

	@GetMapping("/emp/{id}")
	public Emp getEmpById(@PathVariable Long id) {
		return emprepo.findById(id).orElseThrow(() -> new EmpNotFound(id));
	}

	@PutMapping("/emp/{id}")
	public Emp updateEmp(@RequestBody Emp newEmp,@PathVariable Long id) {
		return emprepo.findById(id)
				.map(emp->{
					emp.setFirstname(newEmp.getFirstname());
					emp.setLastname(newEmp.getLastname());
					emp.setEmailid(newEmp.getEmailid());
					
					return emprepo.save(emp);
					
				}).orElseThrow(()->new EmpNotFound(id));
		
	
	}
	
	@DeleteMapping("/emp/{id}")
	public String DeleteEmp(@PathVariable Long id) {
		if(!emprepo.existsById(id)) {
			throw new EmpNotFound(id);
		}
		emprepo.deleteById(id);
		return "";
	}

}
