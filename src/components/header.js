import * as React from "react"
import { Link as ScrollerLink } from 'react-scroll'
import icon from "../images/brightness.png"
import "./header.css"


const Header = () => {
    function myFunction() {
        const element = document.body;
        element.classList.toggle("light-mode");
        console.log('oi')
    }
    return (
        <nav className="navbar navbar-expand-sm navbar-dark bg-dark p-2">
                <a className="navbar-brand p-lg-3" href="/">
                    Lucas Torino
                </a>
                <button 
                className="navbar-toggler" 
                type="button" 
                data-bs-toggle="collapse" 
                data-bs-target="#navbarNavAltMarkup" 
                aria-controls="navbarNavAltMarkup" 
                aria-expanded="false" 
                aria-label="Toggle navigation"
                >
                    <span className="navbar-toggler-icon">fd</span>
                </button>
                <div className="collapse navbar-collapse justify-content-end" id="navbarNavAltMarkup">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <a className="nav-link active" aria-current="page" href="/">Home</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="about">About</a>                            
                        </li>
                        <li className="nav-item">
                             <a className="nav-link" href="contact">Contact</a>                         
                        </li>
                        <li className="nav-item">
                             <a className="nav-link " href="blog" tabindex="-1" aria-disabled="true">Blog</a>
                        </li>
                        <li className="nav-item">
                            <ScrollerLink to="sectioncontato"
                                offset={-90}
                                duration={1000}
                                className=" pl-5 pr-5 nav-link">Entre em Contato
                            </ScrollerLink>
                        </li>
                        <li className="nav-item">
                             <button className="bg-transparent" onClick={() => myFunction()}><img src={icon} className="iconsize" alt="icone de muito brilho" /> </button>
                        </li>
                    </ul>
                </div>
        </nav>
    )
}
export default Header
