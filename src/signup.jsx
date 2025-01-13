import React from 'react';
import { useState } from "react";
import "./signup.css"

function signup() {
  return (
    <div className="container">
      <form>
        <h1>Signup Form</h1>
        <div className="ui divider"></div>
        <div className="ui form">
          <div className="field">
            <label>Username</label>
            <input type="text" name="username" placeholder="Username" />
          </div>
          <div className="field">
            <label>Email</label>
            <input type="text" name="email" placeholder = "Email" />
          </div>
          <div className="field">
            <label>Password</label>
            <input type="password" name="password" placeholder="Password" />
          </div>
          <div className="field">
            <label>Condition</label>
            <input type="text" name="condition" placeholder="Condition" />
          </div>
          <div className="field">
            <label>reason</label>
            <input type="text" name="reason" placeholder="What do you wish to get out of this app" />
          </div>
          <div className="field">
            <label>interests</label> 
            <input type="text" name="interests" placeholder="List some of your interests"/>
          </div>
          <button className="signup button">Submit</button>
        </div>
      </form>
    </div>
  )
}


export default signup;