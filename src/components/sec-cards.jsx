import React from "react";
import Img1 from "../assets/Images/Crispy Sandwich.png"
import Img2 from "../assets/Images/Fried chicken.png"
import Img3 from "../assets/Images/Pizza large.png"

const Cards = () => {
    return (
<section className="cards">
            <figure><img src={Img1} alt=""/>
                <figcaption>
                    <h3>Best Deals <b>Crispy Sandwiches</b></h3>
                    <p>Enjoy the large size of sandwiches. Complete
                        perfect slice of sandwiches.</p>
                    <button>Proceed to order &gt;</button>
                </figcaption>
            </figure>
            <figure className="celebrate">
                <figcaption>
                    <h3>Celebrate parties
                        with <b>Fried Chicken</b></h3>
                    <p>Get the best fried chicken smeared with a lip smacking lemon chili flavor.
                        Check out best deals for fried chicken.</p>
                    <button>Proceed to order &gt;</button>
                </figcaption>
                <img src={Img2} alt=""/>
            </figure>
            <figure><img src={Img3} alt=""/>
                <figcaption>
                    <h3>Wanna eat hot
                        & spicy <b>Pizza?</b></h3>
                    <p>
                        Pair up with a friend and enjoy the
                        hot and crispy pizza pops. Try it
                        with the best deals.</p>
                    <button>Proceed to order &gt;</button>
                </figcaption>
            </figure>
        </section>
    )
};
export default Cards;