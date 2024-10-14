import React, { useEffect, useState } from 'react';
import Dropdown from 'react-bootstrap/Dropdown';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';
import { useLocation } from 'react-router-dom';

const Header = () => {
    const location = useLocation();

    const [activeTab, setActiveTab] = useState('/'); // Default active tab

    const handleSetActive = (tab) => {
        setActiveTab(tab);
    };

    useEffect(() => {
        setActiveTab(location.pathname);
    }, [location.pathname]);

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
                                as={Link} 
                                to="/" 
                                className={(activeTab === "/" || activeTab === '') ? "active" : ""} 
                                onClick={() => handleSetActive("/")}
                            >
                                Home
                            </Dropdown.Item>
                            <Dropdown.Item 
                                as={Link} 
                                to="/about" 
                                className={activeTab === "/about" ? "active" : ""} 
                                onClick={() => handleSetActive("/about")}
                            >
                                About
                            </Dropdown.Item>
                            <Dropdown.Item 
                                as={Link} 
                                to="/menu" 
                                className={activeTab === "/menu" ? "active" : ""} 
                                onClick={() => handleSetActive("/menu")}
                            >
                                Menu
                            </Dropdown.Item>
                            <Dropdown.Item 
                                as={Link} 
                                to="/reservations" 
                                className={activeTab === "/reservations" ? "active" : ""} 
                                onClick={() => handleSetActive("/reservations")}
                            >
                                Reservations
                            </Dropdown.Item>
                            <Dropdown.Item 
                                as={Link} 
                                to="/order" 
                                className={activeTab === "/order" ? "active" : ""} 
                                onClick={() => handleSetActive("/order")}
                            >
                                Order Online
                            </Dropdown.Item>
                            <Dropdown.Item 
                                as={Link} 
                                to="/login" 
                                className={activeTab === "/login" ? "active" : ""} 
                                onClick={() => handleSetActive("/login")}
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
                            <Link 
                                to="/" 
                                className={(activeTab === "/" || activeTab === '') ? "active" : ""}
                                onClick={() => handleSetActive("/home")}
                            >
                                Home
                            </Link>
                        </li>
                        <li>
                            <Link 
                                to="/about" 
                                className={activeTab === "/about" ? "active" : ""}
                                onClick={() => handleSetActive("/about")}
                            >
                                About
                            </Link>
                        </li>
                        <li>
                            <Link 
                                to="/menu" 
                                className={activeTab === "/menu" ? "active" : ""}
                                onClick={() => handleSetActive("/menu")}
                            >
                                Menu
                            </Link>
                        </li>
                        <li>
                            <Link 
                                to="/reservations" 
                                className={activeTab === "/reservations" ? "active" : ""}
                                onClick={() => handleSetActive("/reservations")}
                            >
                                Reservations
                            </Link>
                        </li>
                        <li>
                            <Link 
                                to="/order" 
                                className={activeTab === "/order" ? "active" : ""}
                                onClick={() => handleSetActive("/order")}
                            >
                                Order Online
                            </Link>
                        </li>
                        <li>
                            <Link 
                                to="/login" 
                                className={activeTab === "#login" ? "active" : ""}
                                onClick={() => handleSetActive("#login")}
                            >
                                Login
                            </Link>
                        </li>
                    </ul>
                </div>
            </nav>
        </header>
    );
};

export default Header;
