import React, { Component } from 'react';
import { Link } from 'react-router-dom';
// import '../css/bootstrap.css';
import '../Style/bootstrap.min.css';
import '../Style/style.css';
import logo from '../logo.svg';

class Navbar extends Component {
    render() {
      return (        
      <div className="App">
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
            <div class="col-md-2">
                <img src={logo} class="logo-footer" style={{ width: '20%', height: '20%'}}/>
                <a class="navbar-brand" href="#">MOVIES</a>
            </div>

            {/* <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button> */}


            <div class="col-md-3 collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav mr-auto">
                <li class="nav-item">
                    <Link to='/' class="nav-link">Home</Link>
                </li>
                <li class="nav-item">
                    <Link to='/Profile' class="nav-link">Profile</Link>   
                </li>
                <li class="nav-item">
                    <Link to='/' class="nav-link " onClick={() => this.props.postSignout()}>Logout</Link>   
                </li>
                </ul>
            </div>
        </nav>
      </div>

);
}
}


export default Navbar;