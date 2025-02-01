import "./hero.css"
import Spline from '@splinetool/react-spline';

function Hero() {

  return (
    <>
      <div className="meetContainer">
          <div className="leftPanel">
              <div>
              <h3>
              Are you passionate about sports? Whether you’re a player, a coach, a researcher, or just a die-hard fan, our Sports Community is the perfect place for you!
 Connect with fellow sports enthusiasts worldwide. Share your experiences, insights, and strategies. Discuss match analyses, player stats, and sports science. Compete in challenges and showcase your skills.

Join us in building a vibrant hub for sports lovers. Let’s grow, learn, and celebrate sports together! 

What sports are you passionate about? Let’s get the conversation started!
                  </h3>
                  <div style={{ display: 'flex', gap: "2rem" }}>
                    <h3></h3>
                  </div>
              </div>
          </div>
          <div className='rightPanel'>
          <Spline scene="https://prod.spline.design/aiQLcXDl5FyboX4L/scene.splinecode" />
          </div>
      </div>
    </>
  );
}

export default Hero
