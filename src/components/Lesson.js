import React from "react"
import { Link } from "react-router-dom"
import "./Lesson.css"
class Lesson extends React.Component {
  render() {
    return (
      <Link to={this.props.path}>
        <div className="lesson-card">
          <div className="lesson-item">
            <p className="lesson-title">{this.props.name}</p>
            <img src={this.props.image} alt="_logo" />
            <p className="lesson-content">{this.props.content}</p>
          </div>
        </div>
      </Link>
    )
  }
}

export default Lesson
