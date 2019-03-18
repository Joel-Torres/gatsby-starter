import React from "react"
import Header from "../components/header"
import { Link } from "gatsby"

export default () => (
<div style={{ color: `purple`}}>
<Link to="/contact/">contact</Link>
<Link to="/about/">about us</Link>
<Header headerText= "Hello Gatsby!!!"/>
<Header headerText="It's pretty cool a bunch of headers!" />
<p>What a world! I'musing re-useable sub-components like the two above.</p>
<img src="https://source.unsplash.com/random/400x200" alt=""/>
</div>
)
