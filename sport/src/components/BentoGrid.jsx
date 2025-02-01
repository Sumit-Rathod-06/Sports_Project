import "./BentoGrid.css";

const GradientBackground = ({ link, children }) => {
  return (
    <div
      style={{
        backgroundImage: `url(${link})`,
        width: "100%",
        height: "100%",
        borderRadius: "1rem",
        padding: "1.5rem",
        position: "relative",
        fontFamily: "Poppins, sans-serif",
        fontSize: "1.2rem",
        opacity: 0.5, // initial low opacity
        transition: "opacity 0.3s ease-in-out", // smooth transition for opacity change
        backgroundSize:"cover"
      }}
      onMouseEnter={(e) => e.currentTarget.style.opacity = 1} // on hover, opacity increases
      onMouseLeave={(e) => e.currentTarget.style.opacity = 0.5} // on mouse leave, opacity returns to initial value
    >
      {children}
    </div>
  );
};


const BentoGrid = () => {
  return (
    <div className="bento-container">
      <div className="bento-grid">
        
        {/* Community Section */}
        <div className="bento-item large">
          <GradientBackground link = "https://cdn.bleacherreport.net/images_root/slides/photos/000/373/647/SUPER-BOWL-XLIV_original.jpg?1283400380">
            <h2>Join the Sports Community</h2>
            <p>Connect with athletes, coaches, and enthusiasts. Share experiences and discuss the latest in sports.</p>
          </GradientBackground>
        </div>

        {/* Tutorials & Training */}
        <div className="bento-item">
          <GradientBackground link = "https://mbigelowphotographer.com/wp-content/uploads/2014/02/IMG_9922.jpg?x34040">
            <h3>Sports Training</h3>
            <p>Improve your skills with expert-led tutorials and drills.</p>
          </GradientBackground>
        </div>

        {/* Live News Updates */}
        <div className="bento-item neon">
          <GradientBackground link="https://www.pngkey.com/png/full/15-154356_engineering-sport-sports-events.png">
            <h3>Live Sports News</h3>
            <p>Stay updated with the latest scores, highlights, and trends.</p>
          </GradientBackground>
        </div>

        {/* Upcoming Events */}
        <div className="bento-item gradient">
          <GradientBackground link="https://www.pngkey.com/png/full/15-154356_engineering-sport-sports-events.png">
            <h3>Upcoming Events</h3>
            <p>Never miss a game or competition. Check out the sports calendar.</p>
          </GradientBackground>
        </div>

        {/* Join Members */}
        <div className="bento-item members">
          <GradientBackground>
            <p>Join</p>
            <h3>100k+ Sports Fans</h3>
            <button className="cta-button">Sign Up</button>
          </GradientBackground>
        </div>

        {/* Fitness & Nutrition */}
        <div className="bento-item">
          <GradientBackground>
            <h3 style={{color:"#ffff"}}>Fitness & Nutrition</h3>
            <p style={{color:"#ffff"}}>Optimize your performance with expert fitness and diet plans.</p>
          </GradientBackground>
        </div>

        {/* Coaching & Mentorship */}
        <div className="bento-item wide">
          <GradientBackground>
            <h3>Learn from the Best</h3>
            <p>Get coaching from professional athletes and sports mentors.</p>
          </GradientBackground>
        </div>

        {/* Extra Box at Bottom Right */}
        <div className="bento-item">
          <GradientBackground>
            <h3>Exclusive Insights</h3>
            <p>Get expert analysis and behind-the-scenes coverage.</p>
          </GradientBackground>
        </div>
      </div>
    </div>
  );
};

export default BentoGrid;
