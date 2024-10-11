const Header = () => {
    return (
        <header>
        <nav>
            <div id="navBody">
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