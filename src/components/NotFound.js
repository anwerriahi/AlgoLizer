import React from "react"
import Header from "./Header"
import Footer from "./Footer"
const NotFound = () => {
  return (
    <>
      <div style={{ backgroundColor: "#cedadab3", minHeight: "945px" }}>
        <Header />
        <h1 style={{ Color: "red", fontSize: "50" }}>404</h1>
        <h1>Page Not Found !!</h1>
        <Footer />
      </div>
    </>
  )
}

export default NotFound
