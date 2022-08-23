import React from "react"
import Footer from "./Footer"
import Header from "./Header"
import Lesson from "./Lesson"

class SortingAlgorithms extends React.Component {
  render() {
    const lessonList = [
      {
        name: "Bubble Sort",
        image: "../images/bubble.svg",
        content:
          "Have you ever heard that bubbles made their way to computer science." +
          " Actually, they have an algorithm named after them.",
        animationComponentPath: "/algorithms/sort/bubble",
      },
      {
        name: "Selection Sort",
        image: "../images/selection.svg",
        content:
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry." +
          "Lorem Ipsum has been the industry's standard dummy text ever",
        animationComponentPath: "/algorithms/sort/selection",
      },
      {
        name: "Insertion Sort",
        image: "../images/insertion.svg",
        content:
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry." +
          "Lorem Ipsum has been the industry's standard dummy text ever",
        animationComponentPath: "/algorithms/sort/insertion",
      },
    ]
    return (
      <div style={{ backgroundColor: "#cedadab3" }}>
        <Header />
        <h1 style={{ textAlign: "center" }}>Sorting Algorithms</h1>
        {lessonList.map((lessonDescr) => {
          return (
            <Lesson
              name={lessonDescr.name}
              image={lessonDescr.image}
              content={lessonDescr.content}
              path={lessonDescr.animationComponentPath}
            />
          )
        })}
        <Footer />
      </div>
    )
  }
}

export default SortingAlgorithms
