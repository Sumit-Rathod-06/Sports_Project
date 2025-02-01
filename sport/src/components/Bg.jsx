import "./bg.css"
import bg from "../assets/bg.jpg"
import {motion} from "framer-motion"
import { span } from "framer-motion/client"

const words ="Unite. Play. Thrive."
const values = {
    hidden: {
        opacity: 0,
        y: 10
    },
    visible: {
        opacity: 1,
        y: 0,
    }
}

function Bg(){
    return(
        <>
            <div className="image-container">
                <img src={bg} alt="" />
                <div className="overlay">
                <motion.h2
                initial="hidden"
                animate="visible"
                transition={{staggerChildren: 0.1, delay: 0.5}}
            >
                    {words.split(" ").map((word) => (
                    <motion.span style={{display: "inline-block"}}>
                        {word.split("").map((char) => (
                            <motion.span style={{display: "inline-block"}} variants={values}>{char}</motion.span>
                        ))}
                    <span style={{display: "inline-block"}}>&nbsp;</span>
                    </motion.span>
                    )) }
            </motion.h2>                    
            <p>Join our vibrant sports community where athletes, coaches, and fans connect, learn, and grow. Explore expert resources, training guides, and exclusive insights to level up your game.</p>
                </div>
            </div>
        </>
    )
}

export default Bg