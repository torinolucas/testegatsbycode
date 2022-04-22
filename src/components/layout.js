import * as React from "react"
import { useStaticQuery, graphql } from "gatsby"
import  "./layout.css"
import Header from '../components/header'
import Footer from '../components/footer'

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
      <Header/>
      <div className="container mt-3">
        <h1>{pageHeading}</h1>
        {children}
      </div>
      <Footer/>
    </main>
  )
}
export default Layout
