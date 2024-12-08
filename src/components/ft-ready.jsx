import React from "react";
import Img1 from "../assets/Images/Are you ready.png"

const Ready = () => {
    return (
        <section className="ready">
            <img src={Img1} alt=""/>
                <p>Are you ready to order with the best deals?</p>
                <button>Proceed to order &gt;</button>
        </section>
    )
};
export default Ready;