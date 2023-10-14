import React from 'react'
import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <div>
    
    <nav className="navbar navbar-expand-lg  navbar-info bg-info">
  <div className="container-fluid">
    <Link className="navbar-brand text-white" to='/'>Employee Management App</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        
        
        
      </ul>
      
    </div>
    <Link to='/adduser'  className='btn btn-outline-light'>Add User</Link>
  </div>
</nav>
    
    
    
    
    
    
    
    </div>
  )
}
