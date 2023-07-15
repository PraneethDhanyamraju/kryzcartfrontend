import React from "react";
import 'react-awesome-slider/dist/styles.css';
import img1 from "./images/Slide1.JPG";
import img2 from "./images/Slide2.JPG";
import img3 from "./images/Slide3.JPG";
import img4 from "./images/Slide4.JPG";
import img5 from "./images/Slide5.JPG";
import img6 from "./images/Slide6.JPG";

import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';

export default function  ImageCarousel() {
return(
<>

<Carousel  autoPlay={true} infiniteLoop={true} showArrows={false}  showThumbs={false} width="100%" >
                <div>
                    <img src={img1} height="500"/>
              
                </div>
                <div>
                    <img src={img2} height="500"/>
              
                </div>
                <div>
                    <img src={img3} height="500"/>
              
                </div>
                <div>
                    <img src={img4} height="500"/>
              
                </div>
                <div>
                    <img src={img5} height="500"/>
              
                </div>
                <div>
                    <img src={img6} height="500"/>
              
                </div>
                
     </Carousel>
     

             

</>
);

}