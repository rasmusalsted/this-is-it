import React from 'react'
import { Link } from "react-router-dom";

const NoMatch = () => {
  
  
  return (

    <div className="">
      <h2>Sorry </h2>
      <p>That page cannot be found</p>
      <Link to="/">Back to the homepage...</Link>
    </div>
    
  )

}

export default NoMatch