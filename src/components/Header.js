import React from "react"
import { Link } from "react-router-dom"

class Header extends React.Component {
  render() {
    return (
      <div className="header">
        <div className="header-logo">
          <Link to="/">
            <img className="img" src="./images/algolizer.png" alt="logo" />
          </Link>
        </div>
        <div className="header-button">
          <p className="login">About</p>
          <p className="login">Login</p>
        </div>
      </div>
    )
  }
}

export default Header
