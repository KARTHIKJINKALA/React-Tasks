import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
    
const styles = {
    navbar: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      backgroundColor: "white",
      padding: "10px 20px",
      border:"1px solid green"
     
    },
    logo: {
      fontSize: "20px",
      fontWeight: "bold",
      color:"black"
    },
    navLinks: {
      listStyleType: "none",
      display: "flex",
      gap: "15px",
      margin: 0,
      padding: 0,
      
    },
    link: {
      
      textDecoration: "none",
      fontSize: "16px",
      transition: "color 0.3s",
      

    },
    linkHover: {
      color: "yellow",
    },
  };
  return (
    <nav style={styles.navbar}>
      <div style={styles.logo}>MyWebsite</div>
      <ul style={styles.navLinks}>
        <li><Link to={"/"}>Home</Link></li>
        <li><Link to={"/About"}>About</Link></li>
        <li><Link to={"/Contact"}>Contact</Link></li>
        <li><Link to={"/Settings"}>Settings</Link></li>

       
      </ul>
    </nav>
  );
};


export default Navbar;
