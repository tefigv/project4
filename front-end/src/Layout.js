import React from 'react'
import { Outlet, Link } from "react-router-dom";
import {Nav, NavBar} from "react-bootstrap";
import {LinkContainer} from "react-router-bootstrap";


const Layout = () => {
  return (
   <>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <LinkContainer className="navbar-brand" to="/"><Nav.Link><h1 className='logo'>Bite</h1></Nav.Link></LinkContainer>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                          <LinkContainer className="nav-link" to="/shop"><Nav.Link>Shop</Nav.Link></LinkContainer>
                        </li>
                        <li className="nav-item">
                          <LinkContainer className="nav-link" to="/sustainability"><Nav.Link >Sustainability</Nav.Link></LinkContainer>
                        </li>
                         <li className="nav-item">
                          <LinkContainer className="nav-link" to="/about"><Nav.Link >About</Nav.Link></LinkContainer>
                        </li>
                        <li className="nav-item">
                          <LinkContainer className="nav-link" to="/cart"><Nav.Link >Cart</Nav.Link></LinkContainer>
                        </li>
                    </ul>
                </div>    
            </nav> 

      <Outlet />
    </>
  )
};

export default Layout;