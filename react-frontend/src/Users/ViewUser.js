import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom';
import axios from 'axios';
export default function ViewUser() {


    const [user,setUser]=useState({
        firstname:"",
        lastname:"",
        emailid:""
    })

    const {id}=useParams();

    useEffect(()=>{
        loadEmp();

    },[])

    const loadEmp=async()=>{
        const result=await axios.get(`http://localhost:8080/emp/${id}`);
        setUser(result.data);

    }

  return (
    <div className='container'>
    <div className='row'>
    <div className='col-md-6 offset-md-3 border rounded p-4 mt-2 shadow'>
    
    <h2 className='text-center  m-4 text-primary'>Employee Details</h2>
 <div className='card'>
 <div className='card-header'>
 Details of Employee Id: {user.id}
 <ul className='list-group list-group-flush'>
 <li className='list-group-item'>
 <b>First Name: </b>
 {user.firstname}
 </li>
 <li className='list-group-item'>
 <b>Last Name: </b>
 {user.lastname}
 </li>
 <li className='list-group-item'>
 <b>Email Id: </b>
 {user.emailid}
 </li>
 </ul>
 
 </div>
 
 </div>
 <Link className='btn btn-primary my-2' to={"/"}>Back To Home</Link>
    </div>
  </div>
  </div>
  )
}
