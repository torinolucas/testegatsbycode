import * as React from "react"
import { Link } from "gatsby"
import { container, heading, navLinks, navLinkItem, navLinkText, barracima, rodape} from "./layout.module.css"
console.log('container' + container)

const Layout = ({pageTitle, pageHeading, children}) =>{
    return(
        <main className = {container}>
             <title>{pageTitle}</title>  
                <nav className = {barracima}> 
                <div>
                    
                </div>
                  <ul className = {navLinks}>
                     <li className = {navLinkItem}><Link to = "/" className = {navLinkText}>Home</Link></li>
                     <li className = {navLinkItem}><Link to = "/about" className = {navLinkText}>About</Link></li>              
                     <li className = {navLinkItem}><Link to = "/contact" className = {navLinkText}>Contact</Link></li>
                 </ul>
             </nav>
             <h1 className = {heading}>{pageHeading}</h1>
             {children}
                
             <footer className = {rodape}> 
             <p>© Lucas</p> 
             </footer>
        </main>
    )
}
export default Layout