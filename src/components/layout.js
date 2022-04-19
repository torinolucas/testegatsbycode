import * as React from "react"
import { useStaticQuery, graphql } from "gatsby"

// import {
//   container,
//   heading,
//   navLinks,
//   navLinkItem,
//   navLinkText,
//   barracima,
//   rodape,
//   sitetitle
// }
//   from "./layout.module.css"

const Layout = ({ pageTitle, pageHeading, children }) => {
  const data = useStaticQuery(graphql`
    query MyQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
      `)
  return (
    <main>
      <title>{pageTitle} - {data.site.siteMetadata.title} </title>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container-fluid">
          <a className="navbar-brand" href="/">Lucas Torino</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse justify-content-end" id="navbarNavAltMarkup">
            <div className="navbar-nav">
              <a className="nav-link " aria-current="page" href="/">Home</a>
              <a className="nav-link" href="about">About</a>
              <a className="nav-link" href="contact">Contact</a>
              <a className="nav-link " href="blog" tabindex="-1" aria-disabled="true">Blog</a>
            </div>
          </div>
        </div>
      </nav>
      <div className="container mt-3">
        <h1>{pageHeading}</h1>
        {children}
      </div>
      <footer className="mt-4 text-center bg-dark text-white container-fluid">
        <div className="p-5">
          © 2020 Lucas Torino
        </div>
      </footer>
    </main>
  )
}
export default Layout