import React from "react";
import Img1 from "../assets/Images/Map Marker.png"
import Img2 from "../assets/Images/Menu.png"
import Img3 from "../assets/Images/Invoice.png"
import Img4 from "../assets/Images/Donut.png"

const Info = () => {
    return (
<section className="info">
            <h1><b>How does it work</b></h1>
            <div className="container">
                <figure>
                    <img src={Img1} alt=""/>
                    <p><b>Select location</b><br/>Choose the location where your food will be delivered.</p>
                </figure>
                <figure>
                    <img src={Img2} alt=""/>
                    <p><b>Choose order</b><br/>Check over hundreds of menus to pick your favorite food</p>
                </figure>
                <figure>
                    <img src={Img3} alt=""/>
                    <p><b>Pay advanced</b><br/>It's quick, safe, and simple. Select several methods of payment</p>
                </figure>
                <figure>
                    <img src={Img4} alt=""/>
                    <p><b>Enjoy meals</b><br/>Food is made and delivered directly to your home.</p>
                </figure>
            </div>
        </section>
        )
        };
        export default Info;