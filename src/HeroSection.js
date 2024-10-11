const HeroSection = () => {
    return (
        <section className="hero">
        <div id="herocontainer">
            <div className="hero-text">
                <h1>Little Lemon</h1>
                <p>Chicago</p>
                <p>We are a family-owned Mediterranean restaurant, focused on traditional recipes served with a modern twist.</p>
                <button>Reserve a Table</button>
            </div>
            <div className="hero-image">
                <img src="./assets/restauranfood.jpg" alt="Restaurant Food" />
            </div>
        </div>
        </section>
    );
}

export default HeroSection;