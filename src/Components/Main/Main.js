import React, { useEffect } from "react";
import aos from "aos";
import "aos/dist/aos.css";

import "./main.css";
import img1 from "../../assets/pexels1.jpg";
import img2 from "../../assets/pexels2.jpg";
import img3 from "../../assets/pexels3.jpg";
import img4 from "../../assets/pexels4.jpg";
import img5 from "../../assets/pexels5.jpg";
import img6 from "../../assets/pexels6.jpg";
import {
  HiOutlineClipboardCheck,
  HiOutlineLocationMarker,
} from "react-icons/hi";

const Data = [
  {
    id: 1,
    imgSrc: img1,
    destTitle: "Bora Bora",
    location: "New York",
    grade: "CULTURAL RELEX",
    fees: "$700",
    description:
      "I later realize you were using live sass compiler extension to run the .scss file realtime and I never needed to import it at all.... many of us didnt know this.... once I installed it, everything is now working fine.....all the people having this .scss file issues should go back to 15:00-17:00 of the video and look at the bottom of the vs code editor you will see live sass compiler extension watching realtime that will solve all problems",
  },
  {
    id: 2,
    imgSrc: img2,
    destTitle: "Bora Bora",
    location: "New York",
    grade: "CULTURAL RELEX",
    fees: "$700",
    description:
      "I later realize you were using live sass compiler extension to run the .scss file realtime and I never needed to import it at all.... many of us didnt know this.... once I installed it, everything is now working fine.....all the people having this .scss file issues should go back to 15:00-17:00 of the video and look at the bottom of the vs code editor you will see live sass compiler extension watching realtime that will solve all problems",
  },
  {
    id: 3,
    imgSrc: img3,
    destTitle: "Bora Bora",
    location: "New York",
    grade: "CULTURAL RELEX",
    fees: "$700",
    description:
      "I later realize you were using live sass compiler extension to run the .scss file realtime and I never needed to import it at all.... many of us didnt know this.... once I installed it, everything is now working fine.....all the people having this .scss file issues should go back to 15:00-17:00 of the video and look at the bottom of the vs code editor you will see live sass compiler extension watching realtime that will solve all problems",
  },
  {
    id: 4,
    imgSrc: img4,
    destTitle: "Bora Bora",
    location: "New York",
    grade: "CULTURAL RELEX",
    fees: "$700",
    description:
      "I later realize you were using live sass compiler extension to run the .scss file realtime and I never needed to import it at all.... many of us didnt know this.... once I installed it, everything is now working fine.....all the people having this .scss file issues should go back to 15:00-17:00 of the video and look at the bottom of the vs code editor you will see live sass compiler extension watching realtime that will solve all problems",
  },
  {
    id: 5,
    imgSrc: img5,
    destTitle: "Bora Bora",
    location: "New York",
    grade: "CULTURAL RELEX",
    fees: "$700",
    description:
      "I later realize you were using live sass compiler extension to run the .scss file realtime and I never needed to import it at all.... many of us didnt know this.... once I installed it, everything is now working fine.....all the people having this .scss file issues should go back to 15:00-17:00 of the video and look at the bottom of the vs code editor you will see live sass compiler extension watching realtime that will solve all problems",
  },
  {
    id: 6,
    imgSrc: img6,
    destTitle: "Bora Bora",
    location: "New York",
    grade: "CULTURAL RELEX",
    fees: "$700",
    description:
      "I later realize you were using live sass compiler extension to run the .scss file realtime and I never needed to import it at all.... many of us didnt know this.... once I installed it, everything is now working fine.....all the people having this .scss file issues should go back to 15:00-17:00 of the video and look at the bottom of the vs code editor you will see live sass compiler extension watching realtime that will solve all problems",
  },
];

const Main = () => {

  useEffect(() => {
    aos.init({ duration: 2000 });
  }, []);

  return (
    <section className="main container section">
      <div className="secTitle">
        <h3 data-aos="fade-right" className="title">Most visited destinations</h3>
      </div>

      <div className="secContent grid">
        {Data.map(
          ({ id, imgSrc, destTitle, location, grade, fees, description }) => {
            return (
              <div key={id} data-aos="fade-up" className="singleDestination">
                <div className="imageDiv">
                  <img src={imgSrc} alt={destTitle} />
                </div>

                <div className="cardInfo">
                  <h4 className="destTitle">{destTitle}</h4>
                  <span className="continent flex">
                    <HiOutlineLocationMarker className="icon" />
                    <span className="name">{location}</span>
                  </span>

                  <div className="fees flex">
                    <div className="grade">
                      <span>
                        {grade}
                        <small>+1</small>
                      </span>
                    </div>

                    <div className="price">
                      <h5>{fees}</h5>
                    </div>
                  </div>

                  <div className="desc">
                    <p>{description}</p>
                  </div>

                  <button className="btn flex">
                    DETAILS
                    <HiOutlineClipboardCheck className="icon" />
                  </button>
                </div>
              </div>
            );
          }
        )}
      </div>
    </section>
  );
};

export default Main;
