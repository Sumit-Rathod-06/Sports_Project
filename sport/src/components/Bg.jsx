import "./bg.css"
import bg from "../assets/bg.jpg"

function Bg(){
    return(
        <>
            <div className="image-container">
                <img src={bg} alt="" />
                <div className="overlay">
                    <h4>Transforming Sports Through Data & Communication</h4>
                    <p>Unleashing the power of insights, analysis, and strategy to elevate sports communication and research.</p>
                </div>
            </div>
        </>
    )
}

export default Bg