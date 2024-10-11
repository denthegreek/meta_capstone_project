const Testimonials = () => {
    return (
        <section className="testimonials">
            <h2>Our Guests' Opinion Matters</h2>
            <div className="subcontainer">
                <div className="card-item">
                    <h3>Rating: 10/10★</h3>
                    <div className="nameAndImg">
                        <img src="./assets/Dimostenis.png" alt="User_Pic_1" />
                        <h4>Dimostenis</h4>
                    </div>
                    <p>"As someone who's always been a fan of good food, this Italian restaurant was a standout experience! The flavors were absolutely incredible, from the fresh pasta to the rich sauces. The service was friendly and made me feel at home, and the atmosphere had a great balance of warmth and authenticity. Every dish I tried was perfect, and the desserts were out of this world. I couldn't have asked for more"</p>
                </div>
                <div className="card-item">
                    <h3>Rating: 6/10★</h3>
                    <div className="nameAndImg">
                        <img src="./assets/Miranda.jpg" alt="User_Pic_2" />
                        <h4>Miranda</h4>
                    </div>
                    <p>"Overall, I had a decent experience at this Italian restaurant, but it didn't quite live up to my expectations. The pasta was fresh, and the ambiance was charming, but I felt the service was a bit rushed, which took away from the meal. While I enjoyed some of the dishes, they lacked the rich flavors that I was hoping for. It was a solid outing, but I'm giving it a 6/10. I might consider returning for another try!"</p>
                </div>
                <div className="card-item">
                    <h3>Rating: 9/10★</h3>
                    <div className="nameAndImg">
                        <img src="./assets/Pepino.jpg" alt="User_Pic_3" />
                        <h4>Pepino</h4>
                    </div>
                    <p>"As an Italian New Yorker, I have to say this restaurant brings back wonderful memories of home! The pasta was cooked to perfection, and the flavors were rich and authentic. The staff was friendly and attentive, making the dining experience even more enjoyable. The ambiance was warm and inviting, perfect for a cozy meal. I highly recommend the tiramisu for dessert—it’s a must-try!"</p>
                </div>
            </div>
        </section>
    );
}

export default Testimonials;