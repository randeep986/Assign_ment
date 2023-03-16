import React, { useState, useEffect } from "react";
import styles from "./Navbar.module.css";
import {Link } from 'react-router-dom'
function Navbar() {
  
  return (
    <div>
      
        <div className={"navnav"} style={{ borderBottom: "1px solid #d3d3d3" }}>
          <div className="d-flex" style={{ margin: "auto", width: "100%" }}>
            <ul className={styles.lists}>
            <li>
                <Link to="/">Homepage</Link>
              </li>
              <li>
                <Link to="/cloth"> Clothing</Link>
              </li>
              <li>
                <Link to="/shoes"> Shoes</Link>
              </li>
              
              <li>
                <Link to="furniture"> Home & Furniture</Link>
              </li>            
              <li>
                <Link to="gardens"> Garden & Outdoor</Link>
              </li>
              <li>
                <Link to="/cartPage"> Cart</Link>
              </li>
            
            </ul>
          </div>
        </div>
        <hr />
      </div>
    
  );
}

export default Navbar;
