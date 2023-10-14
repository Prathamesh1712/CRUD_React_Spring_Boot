package com.prathamesh.springbootbackend.exception;

public class EmpNotFound extends RuntimeException {
	
	public EmpNotFound(Long id) {
		super("Could not found the Emp wit id "+id);
	}
	

}
