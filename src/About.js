const About= () => {
    return(
        <section className="about">
            <div className="subcontainer">
                <div className="about-text">
                    <h2>Little Lemon</h2>
                    <p className="chicago">Chicago</p>
                    <p>Little Lemon is a family-owned Mediterranean restaurant in Chicago, blending traditional recipes with a modern twist. We use fresh, quality ingredients to create flavorful dishes, offering a welcoming atmosphere where guests can enjoy a contemporary take on Mediterranean cuisine.</p>
                </div>
                <div className="imgContainer">
                    <img src="./assets/imgBack.jpg" alt="imgBack" className="imgBack" />
                    <img src="./assets/imgfront.jpg" alt="imgFront" className="imgFront" />
                </div>
            </div>
        </section>
    );
}

export default About;