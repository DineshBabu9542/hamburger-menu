// Write your code here

import {Link} from 'react-router-dom'

import Header from '../Header'

import './index.css'

const About = () => (
  <div>
    <Header />
    <div className="about-link-container-sm">
      <Link to="/">
        <img
          src="https://assets.ccbp.in/frontend/react-js/about-sm-img.png"
          alt="about"
          className="about-sm-img"
        />
      </Link>
    </div>
    <div className="about-link-container-lg">
      <Link to="/">
        <img
          src="https://assets.ccbp.in/frontend/react-js/about-lg-img.png"
          alt="about"
          className="about-lg-img"
        />
      </Link>
    </div>
  </div>
)

export default About
