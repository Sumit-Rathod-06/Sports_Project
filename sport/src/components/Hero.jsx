import "./hero.css"
import Spline from '@splinetool/react-spline';

function Hero() {

  return (
    <>
      <div className="meetContainer">
          <div className="leftPanel">
              <div>
              <h3>
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quo nulla, sed dolor reiciendis nobis, labore culpa vel provident vitae quisquam eligendi quod placeat numquam rerum facere ducimus id voluptas distinctio?
                  </h3>
                  <div style={{ display: 'flex', gap: "2rem" }}>
                    <h3>Left</h3>
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
