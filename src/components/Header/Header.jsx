import React, { useState } from 'react';
import './Header.css';

const Header = () => {
    const [clicked, setClicked] = useState(false);

    const handleClick = () => {
        setClicked(!clicked);
    }

    return (
        <div>
            <nav className="navbar">
                <div className='container'>
                    <div className="navbar-brand">
                        <a href="#home" className='text-danger'>WebSkillsway</a>
                    </div>
                    <ul id='navbar' className={clicked ? "navbar active" : "navbar"}>
                        <li><a className='active' href="">What is WebSkillsway?</a> </li>
                        <li><a href="">Home</a> </li>
                        <li><a href="">Project</a> </li>
                        <li><a href="">Contact</a> </li>
                    </ul>
                    <div id='btn-container' className={clicked ? "btn-container active" : "btn-container"}>
                        <button className='button'>Sign In</button>
                        <button className='button'>Sign Up</button>
                    </div>
                </div>
                <div id='mobile' onClick={handleClick}>
                    <i id='bar' className={clicked ? 'fas fa-times' : 'fas fa-bars'}></i>
                </div>
            </nav>
            <div className="content">
                <h1 className='heading'>A WebSkillsway Community Found A </h1>
                <p className='description'>WebSkillsway is your go-to hub for mastering website design, offering tutorials, resources, and a vibrant community for aspiring and experienced designers alike.</p>
                <button className='btn'>Join Us</button>
            </div>
        </div>
    );
}

export default Header;
