import React from "react";
import Img1 from "../assets/Images/img1.png"
import Img2 from "../assets/Images/img2.png"
import Img3 from "../assets/Images/img3.png"
import Img4 from "../assets/Images/img4.png"
const Greys = () => {
    return (
        <section className="greys">
            <div id="con">
                <figure>
                    <img src={Img1} alt="img1" style={{borderRadius: '10px'}}/>
                    <figcaption className="percentage"><span style={{paddingTop: '15px'}}>15</span><span style={{display: 'inline-flex', flexDirection: 'column', margin: '0',
                    padding: '0'}}><span style={{fontSize: '30px', fontWeight: '500', position: 'relative'}}>%</span>
                    <span style={{fontSize: '15px',
                    fontWeight: '400', padding: 0, margin: 0, position: 'relative'}}>Off</span></span>
                    </figcaption>
                    <br/><br/><br/>
                    <figcaption>
                        <b>Greys Vage
                            <p>6 Days Remaining</p>
                        </b>
                    </figcaption>
                </figure>
                <figure>
                    <img src={Img2} alt="img2"/>
                    <figcaption className="percentage">10%</figcaption>
                    <br/><br/><br/>
                    <figcaption>
                        <b>Greys Vage
                            <p>6 Days Remaining</p>
                        </b>
                    </figcaption>
                </figure>
                <figure>
                    <img src={Img3} alt="img3"/>
                    <figcaption className="percentage">25%</figcaption>
                    <br/><br/><br/>
                    <figcaption>
                        <b>Greys Vage
                            <p>7 Days Remaining</p>
                        </b>
                    </figcaption>
                </figure>
                <figure>
                    <img src={Img4} alt="img4"/>
                    <figcaption className="percentage">20%</figcaption>
                    <br/><br/><br/>
                    <figcaption>
                        <b>Greys Vage
                            <p>8 Days Remaining</p>
                        </b>
                    </figcaption>
                </figure>
            </div>
        </section> 
    )
};
export default Greys; 