



import React from 'react'
import {Link} from 'react-router-dom'
function PageNotFound() {
  return (
    <div className='forSuccessPage'>
          <h1>Ooops..... Page Not Found !!</h1>
          <Link className='thankYouAnch' href='/signup'>Click To SignUp</Link>
    </div>
  )
}

export default PageNotFound