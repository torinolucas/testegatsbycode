import * as React from "react"
import { Link as ScrollerLink } from 'react-scroll'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMoon } from '@fortawesome/free-solid-svg-icons'
// import { faCoffee } from '@fortawesome/free-solid-svg-icons'
// import icon from "../images/brightness.png"
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import "./header.css"



const Header = () => {
    function myFunction() {
        const element = document.body;
        element.classList.toggle("light-mode");
        console.log('oi')
    }
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark px-4">
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
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse justify-content-end" id="navbarNavAltMarkup">
                    <ul className="navbar-nav justify-content-end">
                        <li className="nav-item">
                            <a className="nav-link navhr" aria-current="page" href="/">Home</a>
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
                             <FontAwesomeIcon onClick={() => myFunction()} icon={faMoon} size="lg" className="nav-link" alt="icone de muito brilho"/>
                        </li>
                    </ul>
                </div>
        </nav>
    )
}
export default Header
