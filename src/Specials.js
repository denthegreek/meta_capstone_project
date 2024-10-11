const Specials = () => {
    return (
        <section className="specials">
        <div id="speciacontainer">
            <div id="speciaTitle">
                <h2>This Week's Specials!</h2>
                <button className="online-menu">Online Menu</button>
            </div>
            <div className="specials-grid">
            <div className="special-item">
                <img src="./assets/greek salad.jpg" alt="Special 2" />
                <h3>Greek Salad <span>$12.99</span></h3>
                <p>Our Greek salad is made with tomatoes, cucumbers, red onions, Kalamata olives, and feta, dressed with olive oil, oregano, and vinegar. It’s light, fresh, and flavorful.</p>
                <button>Order a delivery</button>
                </div>
                <div className="special-item">
                <img src="./assets/bruchetta.jpg" alt="Special 1" />
                <h3>Bruschetta <span>$5.99</span></h3>
                <p>Our Bruchetta is made from grilled bread that has been smeared with garlic ande seasoned with salt and olive oil. </p>
                <button>Order a delivery</button>
                </div>
                <div className="special-item">
                <img src="./assets/lemon-dessert.jpg" alt="Special 2" />
                <h3>Lemon Dessert <span>$5.99</span></h3>
                <p>Our lemon dessert, just like a lemon tart, is made with a zesty lemon filling in a buttery crust, offering a perfect balance of sweet and tangy flavors.</p>
                <button>Order a delivery</button>
                </div>
                {/* Add more specials as needed */}
            </div>
        </div>
        </section>
    );
}
export default Specials; 