// Write your code here
import {Link, withRouter} from 'react-router-dom'
import Popup from 'reactjs-popup'

import {GiHamburgerMenu} from 'react-icons/gi'
import {IoMdClose} from 'react-icons/io'
import {AiFillHome} from 'react-icons/ai'
import {BsInfoCircleFill} from 'react-icons/bs'

import './index.css'

const Header = () => (
  <div className="header-container">
    <div className="nav-container">
      <Link to="/">
        <img
          src="https://assets.ccbp.in/frontend/react-js/hamburger-menu-website-logo.png"
          alt="website logo"
          className="website-logo-img"
        />
      </Link>
      <Popup
        modal
        trigger={
          <button
            className="hamburger-button"
            type="button"
            data-testid="hamburgerIconButton"
          >
            <GiHamburgerMenu size="30" />
          </button>
        }
        className="popup-content"
      >
        {close => (
          <div className="close-all-container">
            <div className="io-md-close-container">
              <button
                data-testid="closeButton"
                type="button"
                className="io-md-close-btn"
                onClick={() => close()}
              >
                <IoMdClose className="io-md-close-name" />
              </button>
            </div>
            <ul className="un-order-list-container">
              <li className="list-link-items">
                <Link to="/" className="link-item" onClick={() => close()}>
                  <AiFillHome className="symbol-img" />
                  <p className="nav-link-home">Home</p>
                </Link>
              </li>
              <li className="list-link-items">
                <Link className="link-item" to="/about" onClick={() => close()}>
                  <BsInfoCircleFill className="symbol-img" />
                  <p className="nav-link-about">About</p>
                </Link>
              </li>
            </ul>
          </div>
        )}
      </Popup>
    </div>
  </div>
)

export default withRouter(Header)
