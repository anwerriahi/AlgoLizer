import React from "react"
import { Link } from "react-router-dom"

class Footer extends React.Component {
  render() {
    return (
      <div className="footer">
        <div className="footer-inner">
          <div className="footer-logo">
            <Link to="/">
              <img src="./images/algofooter.png" alt="logo" />
            </Link>
            <p>Learn to code, learn to creative.</p>
          </div>
          <ul className="footer-list">
            <li>About Us</li>
            <li>Recruit</li>
            <li>Contact Us</li>
          </ul>
        </div>
      </div>
    )
  }
}

export default Footer
