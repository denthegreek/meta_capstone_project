import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <footer>
            <div className="subcontainer">
                <img src="./assets/vertLogo.png" alt="logo" />
                <div>
                    <h4>Doormat Navigation</h4>
                    <ul>
                        <li>
                            <Link to="/">Home</Link>
                        </li>
                        <li>
                            <Link to="/about">About</Link>
                        </li>
                        <li>
                            <Link to="/menu">Menu</Link>
                        </li>
                        <li>
                            <Link to="/reservations">Reservations</Link>
                        </li>
                        <li>
                            <Link to="/order">Order Online</Link>
                        </li>
                        <li>
                            <Link to="/login">Login</Link>
                        </li>
                    </ul>
                </div>
                <div>
                    <h4>Contact</h4>
                    <ul>
                        <li><Link to="/contact/address">Address</Link></li>
                        <li><Link to="/contact/phone">Phone#</Link></li>
                        <li><Link to="/contact/email">Email</Link></li>
                    </ul>
                </div>
                <div>
                    <h4>Social Media Links</h4>
                    <ul>
                        <li><Link to="/social/facebook">Facebook</Link></li>
                        <li><Link to="/social/twitter">Twitter</Link></li>
                        <li><Link to="/social/instagram">Instagram</Link></li>
                    </ul>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
