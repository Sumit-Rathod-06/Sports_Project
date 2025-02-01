import "./BentoGrid.css"

const BentoGrid = () => {
  return (
    <div className="bento-container">
      <div className="bento-grid">
        <div className="bento-item large">
          <div className="content">
            <h2>Connect with Communities</h2>
            <p>Discover communities and learn together, share opinions, problems from Anywhere</p>
          </div>
          <div className="gradient-overlay"></div>
        </div>

        <div className="bento-item">
          <div className="content centered">
            <div className="icon">⚡</div>
            <h3>Learn digital skills</h3>
            <p>from anywhere</p>
          </div>
        </div>

        <div className="bento-item neon">
          <div className="content">
            <h3>Learn anything</h3>
            <p>from 1% top mentor</p>
            <div className="tech-stack">
              <span>React JS</span>
              <span>Express</span>
              <span>Vue JS</span>
              <span>Node JS</span>
              <span>TypeScript</span>
              <span>GraphQL</span>
            </div>
          </div>
        </div>

        <div className="bento-item gradient">
          <div className="content">
            <h3>Powered by</h3>
            <p>Battery™</p>
          </div>
        </div>

        <div className="bento-item members">
          <div className="content centered">
            <p>Join with</p>
            <h3>60k+ other members</h3>
            <button className="cta-button">Get Started</button>
          </div>
        </div>

        <div className="bento-item members">
          <div className="content centered">
            <p>Join with</p>
            <h3>60k+ other members</h3>
            <button className="cta-button">Get Started</button>
          </div>
        </div>

        <div className="bento-item gradient">
          <div className="content">
            <h3>Powered by</h3>
            <p>Battery™</p>
          </div>
        </div>

        <div className="bento-item wide">
          <div className="content">
            <h3>Now code, testing,</h3>
            <p>and debug directly on the platform</p>
          </div>
        </div>

        
      </div>
    </div>
  )
}

export default BentoGrid

