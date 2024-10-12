import React, { useState } from 'react';
import Dropdown from 'react-bootstrap/Dropdown';
import 'bootstrap/dist/css/bootstrap.min.css';

const Header = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleDropdown = () => {
        setIsOpen(!isOpen);
    };
    return (
        <header>
        <nav>
            <div id="navBody">
            <Dropdown className='menu-btn' show={isOpen} onToggle={toggleDropdown}>
                <Dropdown.Toggle variant="success" id="dropdown-basic" onClick={toggleDropdown}>
                    <img 
                    src={`${process.env.PUBLIC_URL}/assets/hamburger_menu.svg`} 
                    alt="Menu" 
                    style={{ width: '24px', height: '24px' }} // Adjust size as needed
                    />
                </Dropdown.Toggle>

                <Dropdown.Menu>
                    <Dropdown.Item href="#home">Home</Dropdown.Item>
                    <Dropdown.Item href="#about">About</Dropdown.Item>
                    <Dropdown.Item href="#menu">Menu</Dropdown.Item>
                    <Dropdown.Item href="#reservations">Reservations</Dropdown.Item>
                    <Dropdown.Item href="#order-online">Order Online</Dropdown.Item>
                    <Dropdown.Item href="#login">Login</Dropdown.Item>
                </Dropdown.Menu>
            </Dropdown>
            <div className="logo">
                    <img src="./assets/logo.png" alt="Little Lemon Logo" />
                </div>
                <ul>
                    <li><a href="#home">Home</a></li>
                    <li><a href="#about">About</a></li>
                    <li><a href="#menu">Menu</a></li>
                    <li><a href="#reservations">Reservations</a></li>
                    <li><a href="#order">Order Online</a></li>
                    <li><a href="#login">Login</a></li>
                </ul>
            </div>
        </nav>
        </header>
    );
}

export default Header;