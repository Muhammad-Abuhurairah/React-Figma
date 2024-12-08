import React from "react";
import Img1 from "../assets/Images/Daily DIscount.png"
import Img2 from "../assets/Images/Live Tracing.png"
import Img3 from "../assets/Images/Quick Delivery.png"

const Install = () => {
    return (
<section className="install">
            <div className="daily">
                <figure><img src={Img1} alt=""/></figure>
                <p>Daily Discounts</p>
                <hr>
                </hr>
                <figure><img src={Img2} alt=""/></figure>
                <p>Live Tracing</p>
                <hr>
                </hr>
                <figure><img src={Img3} alt=""/></figure>
                <p>Quick Delivery</p>
            </div>
        </section>
    )
};
export default Install;