import React from "react";
import Img1 from "../assets/Images/Frame 40.png"
import Img2 from "../assets/Images/Rectangle 336 (1).png"
import Img3 from "../assets/Images/Rectangle 336 (2).png"
import Img4 from "../assets/Images/Rectangle 336 (3).png"
import Img5 from "../assets/Images/Rectangle 336 (4).png"

const Popular = () => {
    return (
<section className="popular">
            <h1><b>Popular items</b></h1>
            <div className="button">
                <button>&lt;</button>
                <button className="abcd">&gt;</button>
            </div>
            <div className="rectangle">
                <figure><img src={Img1} alt=""/>
                    <figcaption>
                        <p>Cheese Burger</p>
                        <p className="orange"><i className="fa-solid fa-location-dot"></i> Burger Arena</p>
                        <p>$3.88</p>
                        <button>Order Now</button>
                    </figcaption>
                </figure>
                <figure><img src={Img2} alt=""/>
                    <figcaption>
                        <p>Toffe's Cake</p>
                        <p className="orange"><i className="fa-solid fa-location-dot"></i> Top Sticks</p>
                        <p>$4.00</p>
                        <button>Order Now</button>
                    </figcaption>
                </figure>
                <figure><img src={Img3} alt=""/>
                    <figcaption>
                        <p>Dan Cake</p>
                        <p className="orange"><i className="fa-solid fa-location-dot"></i> Cake World</p>
                        <p>$1.99</p>
                        <button>Order Now</button>
                    </figcaption>
                </figure>
                <figure><img src={Img4} alt=""/>
                    <figcaption>
                        <p>Crispy Sandwich</p>
                        <p className="orange"><i className="fa-solid fa-location-dot"></i> Fastfood Dine</p>
                        <p>$3.00</p>
                        <button>Order Now</button>
                    </figcaption>
                </figure>
                <figure><img src={Img5} alt=""/>
                    <figcaption>
                        <p>Thai Soup</p>
                        <p className="orange"><i className="fa-solid fa-location-dot"></i> Foody Man</p>
                        <p>$2.79</p>
                        <button>Order Now</button>
                    </figcaption>
                </figure>
            </div>
        </section>
        )
        };
        export default Popular;