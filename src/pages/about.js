import React from "react"
import { Link } from "gatsby"
import Header from "../components/header"

export default () => (
  <div style={{ color: `teal` }}>
     <Link to="/">Home</Link>
     <Header headerText="About Gatsby" />
     <Header headerText="It's pretty cool huh!" /> 
    <p>Such wow. Very React. The above two headers are using the same re-useable sub-components</p>
  </div>
)