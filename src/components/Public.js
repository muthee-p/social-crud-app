import React from 'react'
import { Link } from 'react-router-dom'

const Public = () => {
  return (
    <div>
      <h2>WELCOME TO SOCIAL APP</h2>
      <p>Lorem ipsum dolor sit amet. Et odit voluptate in magni molestiae et consequatur galisum et unde eius ut placeat possimus est quae natus! 
        Ea nobis ducimus et galisum excepturi sit quas architecto. 
        Eum libero repellendus id maiores laudantium aut culpa voluptatem in perferendis quis sed consectetur officiis. 
        Ut iste consequatur a minus dolore qui velit delectus ad assumenda ipsam.</p>
        <br></br>
        <p>Please<Link to='/login'> Login here</Link> to get started</p>
    </div>
  )
}

export default Public