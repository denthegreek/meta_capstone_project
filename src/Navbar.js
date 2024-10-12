import React, { useState } from 'react';
import Dropdown from 'react-bootstrap/Dropdown';
import 'bootstrap/dist/css/bootstrap.min.css';

const Header = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleDropdown = () => {
        setIsOpen(!isOpen);
    };

    const [activeTab, setActiveTab] = useState("#home"); // Default active tab

    const handleSetActive = (tab) => {
        setActiveTab(tab);
    };
    return (
        <header>
        <nav>
            <div id="navBody">
            <Dropdown className='menu-btn'>
            <Dropdown.Toggle
                variant="success"
                id="dropdown-basic"
                as="div"
                style={{ cursor: 'pointer' }}
            >
                <img 
                src={`${process.env.PUBLIC_URL}/assets/hamburger_menu.svg`} 
                alt="Menu" 
                className="menu-icon"
                />
            </Dropdown.Toggle>

            <Dropdown.Menu>
                <Dropdown.Item 
                href="#home" 
                className={activeTab === "#home" ? "active" : ""} // Apply active class
                onClick={() => handleSetActive("#home")}
                >
                Home
                </Dropdown.Item>
                <Dropdown.Item 
                href="#about" 
                className={activeTab === "#about" ? "active" : ""}
                onClick={() => handleSetActive("#about")}
                >
                About
                </Dropdown.Item>
                <Dropdown.Item 
                href="#menu" 
                className={activeTab === "#menu" ? "active" : ""}
                onClick={() => handleSetActive("#menu")}
                >
                Menu
                </Dropdown.Item>
                <Dropdown.Item 
                href="#reservations" 
                className={activeTab === "#reservations" ? "active" : ""}
                onClick={() => handleSetActive("#reservations")}
                >
                Reservations
                </Dropdown.Item>
                <Dropdown.Item 
                href="#order-online" 
                className={activeTab === "#order-online" ? "active" : ""}
                onClick={() => handleSetActive("#order-online")}
                >
                Order Online
                </Dropdown.Item>
                <Dropdown.Item 
                href="#login" 
                className={activeTab === "#login" ? "active" : ""}
                onClick={() => handleSetActive("#login")}
                >
                Login
                </Dropdown.Item>
            </Dropdown.Menu>
            </Dropdown>
            <div className="logo">
        <img src={`${process.env.PUBLIC_URL}/assets/logo.png`} alt="Little Lemon Logo" />
      </div>
      <ul>
        <li>
          <a
            href="#home"
            className={activeTab === "#home" ? "active" : ""}
            onClick={() => handleSetActive("#home")}
          >
            Home
          </a>
        </li>
        <li>
          <a
            href="#about"
            className={activeTab === "#about" ? "active" : ""}
            onClick={() => handleSetActive("#about")}
          >
            About
          </a>
        </li>
        <li>
          <a
            href="#menu"
            className={activeTab === "#menu" ? "active" : ""}
            onClick={() => handleSetActive("#menu")}
          >
            Menu
          </a>
        </li>
        <li>
          <a
            href="#reservations"
            className={activeTab === "#reservations" ? "active" : ""}
            onClick={() => handleSetActive("#reservations")}
          >
            Reservations
          </a>
        </li>
        <li>
          <a
            href="#order"
            className={activeTab === "#order" ? "active" : ""}
            onClick={() => handleSetActive("#order")}
          >
            Order Online
          </a>
        </li>
        <li>
          <a
            href="#login"
            className={activeTab === "#login" ? "active" : ""}
            onClick={() => handleSetActive("#login")}
          >
            Login
          </a>
        </li>
      </ul>
        </div>
        </nav>
        </header>
    );
}

export default Header;