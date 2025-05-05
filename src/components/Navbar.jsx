import { useState } from "react";
import { FaHome } from "react-icons/fa";
import { FiMoon, FiSun } from "react-icons/fi";
import { NavLink } from "react-router-dom";

export const Navbar = ({ darkMode, setDarkMode}) => {

  const [isReduce, setIsReduce] = useState(true);


  const handleClick = ()=>{
    setIsReduce(!isReduce)
  }

  return (

    <div className="navbar__container">
      <nav className="navbar">
      <ul className="nav__list">
      
        <li className={`nav__item`}>
          <button 
            className="nav__btn"
            onClick={handleClick}
          ><FaHome className="nav__icon" size={23}/></button>
        
        </li>

        <li className={`nav__item ${isReduce ? 'reduce' : 'expant'}`}>
          <NavLink to="/" className={({ isActive }) => `nav__link ${isActive ? 'nav__active' : ''}`}>About me</NavLink>
        </li>

        <li className={`nav__item ${isReduce ? 'reduce' : 'expant'}`}>
          <NavLink to="projects" className={({isActive}) => `nav__link ${isActive ? 'nav__active' : ''}`}>Projects</NavLink>
        </li>

        <li className={`nav__item ${isReduce ? 'reduce' : 'expant'}`}>
          <button
            className="nav__mode"
            onClick={()=> setDarkMode(!darkMode)}
          >{darkMode ? <FiMoon size={20}/> : <FiSun size={20}/> }</button>  
        </li>
      </ul>

    </nav>
    </div> 
  )
};