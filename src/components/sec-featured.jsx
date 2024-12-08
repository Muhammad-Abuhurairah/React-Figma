import React from "react";
import Img1 from "../assets/Images/Foodworld.png"
import Img2 from "../assets/Images/Restaruant Logo.png"
import Img3 from "../assets/Images/Pizzahub.png"
import Img4 from "../assets/Images/222.png"
import Img5 from "../assets/Images/Donutshub.png"
import Img6 from "../assets/Images/333.png"
import Img7 from "../assets/Images/Donutshut.png"
import Img8 from "../assets/Images/444.png"
import Img9 from "../assets/Images/Ruby.png"
import Img10 from "../assets/Images/555.png"
import Img11 from "../assets/Images/Kuskata.png"
import Img12 from "../assets/Images/666.png"
import Img13 from "../assets/Images/Red Sq..png"
import Img14 from "../assets/Images/777.png"
import Img15 from "../assets/Images/Taco Bell.png"
import Img16 from "../assets/Images/888.png"

const Featured = () => {
    return (
        <section className="featured">
            <h1><b>Featured Restaurants</b></h1>
            <div className="top">
                <figure><img src={Img1} alt="" />
                    <figcaption>
                        <img src={Img2} alt="" />
                        <span>
                            <b>Foodworld</b>
                            <i className="fa-solid fa-star"> 46</i>
                        </span>
                    </figcaption>
                    <p className="toptwo">Opens Tomorrow</p>
                    <div className="off">
                        <b className="percent"><i className="fa-solid fa-tag"></i> 20% Off</b>
                        <b className="fast"><i className="fa-solid fa-clock"></i> Fast</b>
                    </div>
                </figure>
                <figure><img src={Img3} alt="" />
                    <figcaption><img src={Img4} alt="" />
                        <span>
                            <b>Pizzahub</b>
                            <i className="fa-solid fa-star"> 40</i>
                        </span>
                    </figcaption>
                    <p className="toptwo">Opens Tomorrow</p>
                    <div className="off">
                        <b className="percent"><i className="fa-solid fa-tag"></i> 15% Off</b>
                        <b className="fast"><i className="fa-solid fa-clock"></i> Fast</b>
                    </div>
                </figure>
                <figure><img src={Img5} alt="" />
                    <figcaption><img src={Img6} alt="" />
                        <span>
                            <b>Donuts hut</b>
                            <i className="fa-solid fa-star"> 20</i>
                        </span>
                    </figcaption>
                    <p>Open Now</p>
                    <div className="off">
                        <b className="percent"><i className="fa-solid fa-tag"></i> 10% Off</b>
                        <b className="fast"><i className="fa-solid fa-clock"></i> Fast</b>
                    </div>
                </figure>
                <figure><img src={Img7} alt="" />
                    <figcaption><img src={Img8} alt="" />
                        <span>
                            <b>Donuts hut</b>
                            <i className="fa-solid fa-star"> 50</i>
                        </span>
                    </figcaption>
                    <p>Open Now</p>
                    <div className="off">
                        <b className="percent"><i className="fa-solid fa-tag"></i> 15% Off</b>
                        <b className="fast"><i className="fa-solid fa-clock"></i> Fast</b>
                    </div>
                </figure>
            </div>
            <div className="bottom">
                <figure><img src={Img9} alt="" />
                    <figcaption><img src={Img10} alt="" />
                        <span>
                            <b>Ruby Teusday</b>
                            <i className="fa-solid fa-star"> 26</i>
                        </span>
                    </figcaption>
                    <p>Open Now</p>
                    <div className="off">
                        <b className="percent"><i className="fa-solid fa-tag"></i> 10% Off</b>
                        <b className="fast"><i className="fa-solid fa-clock"></i> Fast</b>
                    </div>
                </figure>
                <figure><img src={Img11} alt="" />
                    <figcaption><img src={Img12} alt="" />
                        <span>
                            <b>Kuakata Fried Chick</b>
                            <i className="fa-solid fa-star"> 53</i>
                        </span>
                    </figcaption>
                    <p>Open Now</p>
                    <div className="off">
                        <b className="percent"><i className="fa-solid fa-tag"></i> 25% Off</b>
                        <b className="fast"><i className="fa-solid fa-clock"></i> Fast</b>
                    </div>
                </figure>
                <figure><img src={Img13} alt="" />
                    <figcaption><img src={Img14} alt="" />
                        <span>
                            <b>Red Square</b>
                            <i className="fa-solid fa-star"> 45</i>
                        </span>
                    </figcaption>
                    <p>Open Now</p>
                    <div className="off">
                        <b className="percent"><i className="fa-solid fa-tag"></i> 10% Off</b>
                        <b className="fast"><i className="fa-solid fa-clock"></i> Fast</b>
                    </div>
                </figure>
                <figure><img src={Img15} alt="" />
                    <figcaption><img src={Img16} alt="" />
                        <span>
                            <b>Taco Bell</b>
                            <i className="fa-solid fa-star"> 35</i>
                        </span>
                    </figcaption>
                    <p>Open Now</p>
                    <div className="off">
                        <b className="percent"><i className="fa-solid fa-tag"></i> 10% Off</b>
                        <b className="fast"><i className="fa-solid fa-clock"></i> Fast</b>
                    </div>
                </figure>
            </div>
        </section>
    )
};
export default Featured;