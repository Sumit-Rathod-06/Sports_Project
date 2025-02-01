import "./hero.css"
import Spline from '@splinetool/react-spline';

function Hero() {

  return (
    <>
      <div className="meetContainer">
          <div className="leftPanel">
              <div>
              <h1 style={{color: "#ffff", fontSize: "60px"}}>Experience the Game Like Never Before!</h1>
              <hr/>
             <h5 style={{fontSize : "x-large"}}>Stay updated with the latest scores, stats, and exclusive insights on your favorite players.</h5>
                  
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
