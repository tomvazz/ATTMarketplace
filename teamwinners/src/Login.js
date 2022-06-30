import React, { Component } from 'react';
import { AwesomeButton } from "react-awesome-button";
import "react-awesome-button/dist/styles.css";
export default class Login extends Component {
 divStyle = {
    position: 'relative',
    left: '40%',
    marginTop:'5%',
    fontSize:'30px',
  };
  divStyle2 = {
    position: 'relative',
    left: '43.5%',
    marginTop:'2%',
    fontSize:'30px',
  };
  mainStyle = {
    display: 'grid',
  };
  buttonStyle={
    width: '10%',
    borderRadius: '50px',
    position: 'relative',
    left: '45%',
    marginTop: '5%',
  };
loginClick(){


  window.location.href = "/login"
  };
signUpClick() {

  window.location.href = "/signUp";
  };
  render() {
    return (
      <div style={this.mainStyle}>
      <div style={this.divStyle}>
        Welcome To AT&T
      </div>
      <div style={this.divStyle2}>
       MarketPlace
      </div>
      <div onClick={this.loginClick}>
      <AwesomeButton style = {this.buttonStyle}>Login</AwesomeButton>
      </div>
      <div onClick={this.signUpClick}>
      <AwesomeButton onClick={this.signUpClick} style = {this.buttonStyle}>Sign Up</AwesomeButton>
      </div>
      </div>
    )
  }
}
