import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom';

export default function Home() {

    const[users,setUsers]=useState([])
    const [currentPage, setcurrentPage]=useState(1);
    const RecordPerPage=5;
    const lastIndex=currentPage*RecordPerPage;
    const firstnameIndex=lastIndex-RecordPerPage;
    const records=users.slice(firstnameIndex,lastIndex);
    const npage=Math.ceil(users.length/RecordPerPage);
    const numbers=[...Array(npage+1).keys()].slice(1);


    const {id}=useParams();

    useEffect(()=>{

       loadUsers();

    },[]);

    const loadUsers=async()=>{

        const result=await axios.get("http://localhost:8080/emps");
        setUsers(result.data);

    }

    const deleteUser=async(id)=>{
      await axios.delete(`http://localhost:8080/emp/${id}`);
      loadUsers();
    }

  return (
    <div className='container '>

    <div className='py-5'>
    
    <table className="table border shadow text-center">
  <thead>
    <tr>
      <th scope="col">S.N</th>
      <th scope="col">First Name</th>
      <th scope="col">Last Name</th>
      <th scope="col">Email ID</th>
      <th scope="col">Action</th>
    </tr>
  </thead>
  <tbody>
  {
    records.map((user,index)=>(
        <tr>
      <th scope="row" key={index}>{index+1}</th>
      <td>{user.firstname}</td>
      <td>{user.lastname}</td>
      <td>{user.emailid}</td>
      <td>
      <Link className='btn btn-primary mx-2'
      to={`/viewemp/${user.id}`}
      
      >View</Link>
      <Link className='btn btn-warning mx-2'
      to={`/edituser/${user.id}`}
      
      
      >Edit</Link>
      <button className='btn btn-danger mx-2'
      onClick={() => deleteUser(user.id)}
      
      >Delete</button>
      </td>
    </tr>

    ))
  }
    
    
  </tbody>
</table>
    
    <nav className='pagination'> 
    <li className='page-item'>
    
    <a href='#' className='page-link' onClick={prePage}>Prev</a>
    </li>
    {
      numbers.map((n,i)=>(
        <li className={`page-item ${currentPage=== n ? 'active' :''}`} key={i}>
        <a href='#' className='page-link'
        onClick={()=>changeCPage(n)} >{n}</a>
        
        </li>
      ))
    }
    <li className='page-item'>
    
    <a href='#' className='page-link' onClick={nextPage}>Next Page</a>
    </li>
    </nav>
    
    </div>
    
    
    
    </div>
  )

  function nextPage(){

    if(currentPage !== npage)
    {
      setcurrentPage(currentPage+1)
    }

  }
  function prePage(){
    if(currentPage !== 1){
      setcurrentPage(currentPage-1)
    }

  }
  function changeCPage(id){
    setcurrentPage(id);

  }


}
