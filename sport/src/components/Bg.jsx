import "./bg.css"
import bg from "../assets/bg.jpg"

function Bg(){
    return(
        <>
            <div className="image-container">
                <img src={bg} alt="" />
                <div className="overlay">Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa quasi quidem consequuntur magnam perspiciatis nisi cumque eos voluptate, maiores repellat est saepe, unde, architecto vitae dolor consequatur hic molestiae provident.</div>
            </div>
        </>
    )
}

export default Bg