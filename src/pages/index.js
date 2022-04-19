import * as React from "react"
import Layout from "../components/layout"
import { StaticImage } from "gatsby-plugin-image" 
// import { hometext, homeimg, hometitle2 } from "../components/layout.module.css"


const Homepage = () => {
  return (
    <Layout pageTitle='Home Page' pageHeading='Home Page' >
      <p>Lorem ipsum dolor sit amet</p>
      <StaticImage src="https://images.unsplash.com/photo-1638704957265-0817f29d9b6b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80"
        // className="w-100 h-100"
        alt="pinguin"
        layout="constrained"
      />
      <div className="container">
        <div className="row">
          <div className="col-lg-6 mt-lg-4">
            <div>
              <h1> Lorem Ipsum </h1>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
              </p>
            </div>
          </div>
          <div className="col-lg-6 mt-lg-4">
            <div>
              <StaticImage src="https://images.unsplash.com/photo-1578326457399-3b34dbbf23b8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
                alt="icone"
                layout="constrained"
              />
            </div>
          </div>
        </div>
        <div className="row justify-content-around">
          <div>
            <h1>Cards</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit,
              sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
          </div>
          <div className="card bg-dark text-white mt-4 col-lg-4 col-md-12 col-sm-12">
            <div>
              <StaticImage className="card-img" src="https://images.unsplash.com/photo-1578326457399-3b34dbbf23b8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" alt="Card image"
              />
            </div>
            <div className="card-img-overlay">
              <h5 className="card-title">Card title</h5>
              <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
              <p className="card-text">Last updated 3 mins ago</p>
            </div>
          </div>
          <div className="card bg-dark text-white mt-4 col-lg-4 col-md-6 col-sm-12"> 
            <div>
              <StaticImage className="card-img" src="https://images.unsplash.com/photo-1578326457399-3b34dbbf23b8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" alt="Card image"
              />
            </div>
            <div className="card-img-overlay">
              <h5 className="card-title">Card title</h5>
              <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
              <p className="card-text">Last updated 3 mins ago</p>
            </div>
          </div>
          <div className="card bg-dark text-white mt-4 col-lg-4 col-md-6 col-sm-12"> 
            <div>
              <StaticImage className="card-img" src="https://images.unsplash.com/photo-1578326457399-3b34dbbf23b8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" alt="Card image"
              />
            </div>
            <div className="card-img-overlay">
              <h5 className="card-title">Card title</h5>
              <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
              <p className="card-text">Last updated 3 mins ago</p>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )

}

export default Homepage
