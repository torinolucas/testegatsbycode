import * as React from "react"
import { Link, useStaticQuery, graphql } from "gatsby"

import { container,
         heading,
         navLinks,
         navLinkItem,
         navLinkText,
         barracima,
         rodape,
         sitetitle} 
         from "./layout.module.css"

const Layout = ({pageTitle, pageHeading, children}) =>{
    const data = useStaticQuery(graphql `
    query MyQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
      `)
    //   console.log(data)
    return(
        <main className = {container}>
             <title>{pageTitle} - {data.site.siteMetadata.title} </title>  
             
             <nav className = {barracima}> 
                <div>    
                </div>
                  <ul className = {navLinks}>
                     <li className = {navLinkItem}><Link to = "/" className = {navLinkText}>Home</Link></li>
                     <li className = {navLinkItem}><Link to = "/about" className = {navLinkText}>About</Link></li>              
                     <li className = {navLinkItem}><Link to = "/contact" className = {navLinkText}>Contact</Link></li>
                     <li className = {navLinkItem}><Link to = "/blog" className = {navLinkText}>Blog</Link></li>
                 </ul>
                 
             </nav>
             <p className={sitetitle}>{data.site.siteMetadata.title}</p>
             <h1 className = {heading}>{pageHeading}</h1>
             {children}
                
             <footer className = {rodape}> 
             <p>© Lucas</p> 
             </footer>
        </main>
    )
}
export default Layout