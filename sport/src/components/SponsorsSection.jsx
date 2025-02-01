import React from "react";
import "./SponsorsSection.css"; // Import the CSS file
import sponsor1 from "../assets/sponsor1.jpg"
import sponsor2 from "../assets/sponsor2.jpg"
import sponsor3 from "../assets/sponsor3.jpg"
import sponsor4 from "../assets/sponsor4.jpg"
import sponsor5 from "../assets/sponsor5.jpg"
import sponsor6 from "../assets/sponsor6.jpg"

const sponsors = [
  { name: "Impossible is Nothing", image: sponsor1},
  { name: "Forever Faster", image: sponsor2},
  { name: "Gives You Wings", image: sponsor3},
  { name: "Driving Progress", image: sponsor4},
  { name: "Just Do It", image: sponsor5},
  { name: "Refreshing Moments", image: sponsor6},
];

const SponsorsSection = () => {
  return (
    <div className="sponsors-container">
      <h2 className="sponsors-title">Our Sponsors</h2>
      <div className="sponsors-scrolling-wrapper">
        <div className="sponsors-track">
          {/* Duplicate the sponsors for a seamless infinite loop */}
          {[...sponsors, ...sponsors].map((sponsor, index) => (
            <div className="sponsor-card" key={index}>
              <img src={sponsor.image} alt={sponsor.name} className="sponsor-image" />
              <p className="sponsor-name">{sponsor.name}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SponsorsSection;
