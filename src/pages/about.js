import * as React from 'react'
import Layout from '../components/layout'
import { StaticImage } from "gatsby-plugin-image"

export const about = () => {
    return(  
        <Layout pageTitle = 'About' pageHeading = 'About' >
            <p>Lorem ipsum dolor sit amet</p>
            <StaticImage src = "https://images.unsplash.com/photo-1444464666168-49d633b86797?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1469&q=80" 
            alt="icone" />
        </Layout>           
    )
}
export default about