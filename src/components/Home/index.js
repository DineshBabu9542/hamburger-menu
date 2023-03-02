// Write your code here

import {Link} from 'react-router-dom'

import Header from '../Header'

import './index.css'

const Home = () => (
  <div>
    <Header />
    <div className="home-link-container-sm">
      <Link to="/">
        <img
          src="https://assets.ccbp.in/frontend/react-js/home-sm-img.png"
          alt="home"
          className="home-sm-img"
        />
      </Link>
    </div>
    <div className="home-link-container-lg">
      <Link to="/">
        <img
          src="https://assets.ccbp.in/frontend/react-js/home-lg-img.png"
          alt="home"
          className="home-lg-img"
        />
      </Link>
    </div>
  </div>
)

export default Home
