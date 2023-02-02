import React, { Component } from "react";
import { Link } from "react-router-dom";

import './mystyle.css';
export default class Navbar extends Component{
  
render(){


return(

<>
<nav className="navbar navbar-expand-lg bg-primary back2 fixed-top text-center">
  <div className="container-fluid my-2">
    
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0 mx-1">
        <li className="nav-item">
          <Link  className="nav-link active text-white" aria-current="page" to="/">Home</Link>
        </li>
        <li className="nav-item px-5">
          <Link className="nav-link text-white" to="/Sports">Sports</Link>
        </li>
        
        <li className="nav-item px-5">
          <Link  className="nav-link enabled text-white" to="/Medical">Medical</Link>
        </li>
        <li className="nav-item px-5">
          <Link  className="nav-link enabled text-white" to="/Technology">Technology</Link>
        </li>
        <li className="nav-item px-5">
          <Link  className="nav-link enabled text-white" to="/Business">Business</Link>
        </li>
        <li className="nav-item px-5">
          <Link className="nav-link enabled text-white" to="/Entertainment">Entertainment</Link>
        </li>
        <li className="nav-item px-5">
          <Link  className="nav-link enabled text-white" to="/Bitcoin">Bitcoin</Link>
        </li>
        <li className="nav-item px-1">
          <Link  className="nav-link enabled text-white" to="/Education">Education</Link>
        </li>
        <li className="nav-item px-5">
          <Link  className="nav-link enabled text-white" to="/Jokes">Jokes</Link>
        </li>
        <li className="nav-item px-1">
          <Link  className="nav-link enabled text-white" to="/Games">Games</Link>
        </li>
      </ul>
     
    </div>
  </div>
</nav>



</>



)
}}