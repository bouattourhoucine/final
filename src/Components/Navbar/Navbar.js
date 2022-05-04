import "./Navbar.css";
import { Link ,useNavigate } from "react-router-dom";
import Avatar from "react-avatar";
import React, { useState } from "react";
import Button from "@mui/material/Button";


function Navbar() {
  const navigate=useNavigate()
  const handleClick=()=>{
     navigate('/auth')
  }
  return (
    <div className="nav-header">
      <Button variant="contained">
        <Link to="/" style={{ textDecoration: "none", color: "white" }}>
          {" "}
          Home
        </Link>
      </Button>
      <Button variant="contained" onClick={handleClick}>Sign In</Button>
      {/*  <Link to="/profile">
        {user.image ? (
          <img src={user.image} />
        ) : (
          <Avatar name={user.name} size="40" className="avatar" />
        )}
      </Link> */}
    </div>
  );
}

export default Navbar;
