import React from "react"
import { Link } from "react-router-dom"
import "../style/NotFound.css"
import notFoundImage from "../assets/404-error-g3d1d4edf3_1280.png"

const NotFound = () => {
  return (
    <div className="container">
      <div className="content">
        <img src={notFoundImage} alt="404 Error" />
        <h1>Oops! Page not found</h1>
        <p>
          The page you are looking for might have been removed, had its name
          changed or is temporarily unavailable.
        </p>
        <Link to="/" className="btn">
          Back to homepage
        </Link>
      </div>
    </div>
  )
}

export default NotFound
