import React from "react";
import Img1 from "../assets/Images/Pizza.png"
import Img2 from "../assets/Images/Burger.png"
import Img3 from "../assets/Images/Noodles.png"
import Img4 from "../assets/Images/Sub-sandwich.png"
import Img5 from "../assets/Images/CHowmein.png"
import Img6 from "../assets/Images/Steak.png"

const Searchfood = () => {
    return (
<section className="searchfood">
            <div className="pizza">
                <figure><img src={Img1} alt=""/>
                    <figcaption>Pizza</figcaption>
                </figure>
                <figure><img src={Img2} alt=""/>
                    <figcaption>Burger</figcaption>
                </figure>
                <figure><img src={Img3} alt=""/>
                    <figcaption>Noodles</figcaption>
                </figure>
                <figure><img src={Img4} alt=""/>
                    <figcaption>Sub-sandwich</figcaption>
                </figure>
                <figure><img src={Img5} alt=""/>
                    <figcaption>Chowmein</figcaption>
                </figure>
                <figure><img src={Img6} alt=""/>
                    <figcaption>Steak</figcaption>
                </figure>
            </div>
            <div className="searchtext">
                <h1><b>Search by Food</b></h1>
                <div>
                    <p>View All&nbsp;&nbsp;&gt;</p>
                    <button> &lt; </button>
                    <button>&gt;</button>
                </div>
            </div>
        </section>
    )
};
export default Searchfood;