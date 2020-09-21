import React from "react"
import { Link } from "gatsby"
import { Grid } from "@material-ui/core"
// import logo from "../assets/logo.svg"
import "./App.scss"

const IndexPage = () => (
  <div className="App">
    <header className="App-header">
      {/* <img src={logo} className="App-logo" alt="logo" />
      <p>@mui-treasury/layout starter</p> */}
      <Grid container spacing={4} justify="center">
        <Link className="App-link" to="/dashboard">
          Dashboard
          </Link>
      </Grid>
    </header>
  </div>
)

export default IndexPage
