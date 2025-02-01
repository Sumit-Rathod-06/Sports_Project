import "./navbar.css"
import logo from "../assets/logo.svg"

function Navbar(){
    return(
        <>
                <ul className="navbar">
                    <li id="logo"><img className="logo" src={logo} alt="" /><span>SportSphere</span></li>
                    <a href=""><li>Home</li></a>
                    <a href=""><li>Shopping</li></a>
                    <a href=""><li>Resources</li></a>
                    <a href=""><li>Community</li></a>
                    <a href=""><li>News</li></a>
                </ul>
        </>
    )
}

export default Navbar