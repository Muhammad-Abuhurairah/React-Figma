import React from "react";
import Img1 from "../assets/Images/Mask Group.png";
import Img2 from "../assets/Images/Image Base.png";
const Header = () => {
    return (
        <>
            <header id="top">
                <nav>
                    <a style={{ color: 'black', fontSize: 'large', textDecoration: 'none' }}>About</a>
                    <figure>
                        <img src={Img1} alt="FoodWagon" />
                        <b>
                            <span>food</span>waGon</b>
                    </figure>
                    <div className="bar">
                        <span><b>Deliver to:</b></span>
                        <i className="fa-solid fa-location-dot"></i>
                        Current Location
                        <b>Muhammadpur Bus Stand, Dhaka</b>
                    </div>
                    <div className="magnify">
                        <i className="fa-solid fa-magnifying-glass"></i>
                        <input type="text" placeholder="Search Food" />
                        <button><b><i className="fa-solid fa-user-large"></i>Login</b></button>
                    </div>
                </nav>
                <section className="header">
                    <div className="starving">
                        <div className="text ">
                            <h1>Are you starving?</h1>
                            Within a few clicks, find meals that are accessible near you
                        </div>
                        <div className="bike">
                            <div>
                                <button className="delivery"><i className="fa-solid fa-motorcycle"></i> Delivery</button>
                                <button className="pickup"><i className="fa-solid fa-bag-shopping"></i> Pickup</button>
                            </div>
                            <div>
                                <hr />
                                <input type="search" placeholder="Enter Your Address" />
                                <button className="find"><i className="fa-solid fa-magnifying-glass fa-sm"></i> FindFood</button>
                            </div>
                        </div>
                    </div>
                    <figure>
                        <img src={Img2} alt="egg" />
                    </figure>
                </section>
            </header>

        </>
    )
};

export default Header;