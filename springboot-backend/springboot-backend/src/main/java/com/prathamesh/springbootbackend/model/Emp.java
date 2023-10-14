package com.prathamesh.springbootbackend.model;

import javax.persistence.*;

@Entity
@Table(name = "emp")
public class Emp {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private long id;
	@Column(name = "fname")
	private String firstname;
	@Column(name = "lname")
	private String lastname;
	@Column(name = "email")
	private String emailid;

	public long getId() {
		return id;
	}

	public void setId(long id) {
		this.id = id;
	}

	public String getFirstname() {
		return firstname;
	}

	public void setFirstname(String firstname) {
		this.firstname = firstname;
	}

	public String getLastname() {
		return lastname;
	}

	public void setLastname(String lastname) {
		this.lastname = lastname;
	}

	public String getEmailid() {
		return emailid;
	}

	public void setEmailid(String emailid) {
		this.emailid = emailid;
	}

	public Emp() {

	}

	public Emp(String firstname, String lastname, String emailid) {
		super();
		this.firstname = firstname;
		this.lastname = lastname;
		this.emailid = emailid;
	}

	@Override
	public String toString() {
		return "Emp [id=" + id + ", firstname=" + firstname + ", lastname=" + lastname + ", emailid=" + emailid + "]";
	}

}
