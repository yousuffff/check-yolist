import React, { useEffect, useState } from "react";
import Logo from "../assets/logo.png";

const Header = () => {
  const [theme , setTheme] = useState(localStorage.getItem('theme') || 'light');
  useEffect(()=>{
    document.documentElement.removeAttribute('class')
    document.documentElement.classList.add(theme)

    localStorage.setItem('theme', theme)
  },[theme])
  const handleThemeChange = (event) => {
    if(event.target.className !== 'themeSelector'){
      document.querySelectorAll(".themeSelector span").forEach((span) => {
        span.classList.remove("activeTheme");
      })
      setTheme(event.target.className)
      // event.target.classList.add("activeTheme");
      console.log(event.target.className)
    }
  }
  
  return (
    <header>
      <div className="logo">
        <img src={Logo} alt="Check-yolist logo" />
        <span>Check-YoList</span>
      </div>
      <div className="themeSelector" onClick={handleThemeChange}>
        <span className={theme === 'light' ? 'light activeTheme' : 'light'}></span>
        <span className={theme === 'medium' ? 'medium activeTheme' : 'medium'}></span>
        <span className={theme === 'dark' ? 'dark activeTheme' : 'dark'}></span>
        <span className={theme === 'gOne' ? 'gOne activeTheme' : 'gOne'}></span>
        <span className={theme === 'gTwo' ? 'gTwo activeTheme' : 'gTwo'}></span>
        <span className={theme === 'gThree' ? 'gThree activeTheme' : 'gThree'}></span>
      </div>
    </header>
  );
};
export default Header;
