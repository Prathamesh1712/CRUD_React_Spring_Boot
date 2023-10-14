import React, { Component } from 'react';

class HeaderComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
         
        }
      }
    render() {
        return (
            <div>
               <nav className='navbar navbar-expand-md navbar-info bg-info'>
             <div><a href='#' className='navbar-brand m-3 text-white fs-4'>Employee Management App</a></div>
               </nav>
            </div>
        );
    }
}

export default HeaderComponent;
