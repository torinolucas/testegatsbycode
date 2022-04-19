import * as React from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/layout'


const Blog = ({data}) => {
    console.log(data)
    return (
        <div>
            <Layout pageTitle = 'Blog' pageHeading = 'Blog'>
                 <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
          sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                 </p>
                 <ul>
                    { data.allFile.nodes.map(node => {return <li key={node.name}>{node.name}</li>})}
                 </ul>
            </Layout>
        </div>
    )
}

export const query = graphql`
query {
    allFile(filter: {sourceInstanceName: {eq: "blog"}}) {
      nodes {
        name
      }
    }
  }
`
export default Blog

