import React, { useEffect, useState } from 'react'
import {useHistory } from "react-router-dom";
import './Nav.css';

function Nav() {

    const [show,handleshow] = useState(false);
    const history = useHistory();

    const transitionNavBar = () => {
        if(window.scrollY > 100)
        {
            handleshow(true);
        }
        else{
            handleshow(false);
        }
    }
    useEffect(() =>{
        window.addEventListener("scroll",transitionNavBar);
        return () => window.removeEventListener('scroll',transitionNavBar);
    }, [])

  return (
    <div className={`nav ${show && "nav__black"}`}>
        <div className='nav__contents'>
        <img 
        onClick={() => history.push("/")}
        className='nav__logo' 
        src="https://1000logos.net/wp-content/uploads/2017/05/Netflix-Logo-2006.png" 
        alt="" /> 

        <img 
        onClick={() => history.push("/profile")}
        className='nav__avatar' 
        src="http://static.everypixel.com/ep-pixabay/0329/8099/0858/84037/3298099085884037069-head.png"
        alt="" 
        />
        </div>
    </div>
  )
}

export default Nav