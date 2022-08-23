import React from "react"
import Lesson from "./Lesson"
import ContactForm from "./ContactForm"
import ContactFormAlt from "./ContactFormAlt"

class Main extends React.Component {
  render() {
    const lessonList = [
      {
        name: "Sorting Algorithms",
        image: "./images/sortinglogo.png",
        introduction:
          "How a website looks is created using languages such as HTML and CSS." +
          " Let's study these languages while actually creating a website!",
        content:
          "Used for reorganizing a large number of items into a specific order, such" +
          " as alphabetical, highest-to-lowest value or shortest-to-longest distance.",
        algorithmsPath: "/algorithms/sort",
      },
      {
        name: "Searching Algorithms",
        image: "./images/searching.png",
        introduction:
          "Sass is a language for making CSS more convenient and efficient.",
        content:
          "Used to retrieve information stored within particular data structure. " +
          "Those values can be either discrete or continuous.",
        algorithmsPath: "/algorithms/search",
      },
    ]

    return (
      <div className="main-wrapper">
        <div className="main">
          <div className="copy-container">
            <h1>Hello, World.</h1>
            <h2>Welcome to the world of Algorithms!</h2>
            <p>
              Algorithm Visualization is an online interactive platform that
              displays algorithms from code. Learning the algorithm is much
              easier by visualizing it. Algorithm Visualizer is a web
              application written in React. It contains UI elements and
              translates commands into visualizations.
            </p>
          </div>
          <h3 className="lessonTitle">Algorithms</h3>
          <div className="lesson-container">
            {lessonList.map((lessonItem) => {
              return (
                <Lesson
                  name={lessonItem.name}
                  image={lessonItem.image}
                  content={lessonItem.content}
                  path={lessonItem.algorithmsPath}
                />
              )
            })}
          </div>
          <div className="contact-container">
            <h3>Contact Us</h3>
            <ContactForm />
            {/** My suggestion */}
            <ContactFormAlt />
          </div>
        </div>
      </div>
    )
  }
}

export default Main
