import React, { useEffect, useState } from 'react'
import axios from 'axios';
import {useNavigate, useParams} from 'react-router-dom';
export default function EditUser() {

  let navigate=useNavigate();

  const {id}=useParams()

  const [user, setUser]=useState({
    firstname:"",
    lastname:"",
    emailid:""
  })

  const{firstname,lastname,emailid}=user;

  const onInputChange=(e)=>{

    setUser({...user,[e.target.name]:e.target.value})

  }
  useEffect(()=>{
    loadUser();
  },[])

  const onSubmit=async(e)=>{

    e.preventDefault();

    await axios.put(`http://localhost:8080/emp/${id}`,user);
    navigate("/");


  }

  const loadUser=async()=>{
    const result=await axios.get(`http://localhost:8080/emp/${id}`)
    setUser(result.data);
  }

  return (
    <div className='container'>
    <div className='row'>
    <div className='col-md-6 offset-md-3 border rounded p-4 mt-2 shadow'>
    
    <h2 className='text-center  m-4 text-primary'>Edit Employee</h2>
   <form onSubmit={(e)=>onSubmit(e)}>
    <div className='mb-3'>
    <label htmlFor='firstname' className='form-label'>
   First Name
    </label>
    <input 
    type={'text'}
    className='form-control'
    placeholder='Enter First Name'
    name='firstname'
    value={firstname}
    onChange={(e)=>onInputChange(e)}
    />

    </div>
    <div className='mb-3'>
    <label htmlFor='lastname' className='form-label'>
    Last Name
    </label>
    <input 
    type={'text'}
    className='form-control'
    placeholder='Enter Last Name'
    name='lastname'
    value={lastname}
    onChange={(e)=>onInputChange(e)}
    />

    </div>
    <div className='mb-3'>
    <label htmlFor='emailid' className='form-label'>
    Email ID
    </label>
    <input 
    type={'text'}
    className='form-control'
    placeholder='Enter Email-ID'
    name='emailid'
    value={emailid}
    onChange={(e)=>onInputChange(e)}
    />
    </div>
    <button type='submit' className='btn btn-outline-primary '>Save</button>
    <button type='submit' className='btn btn-outline-danger mx-2'>Cancel</button>
    </form>
    </div>
    </div> 
    </div>
  )
}
