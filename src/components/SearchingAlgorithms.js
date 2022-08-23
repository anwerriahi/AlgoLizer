import React from "react"
import Footer from "./Footer"
import Header from "./Header"
import Lesson from "./Lesson"

class SearchingAlgorithms extends React.Component {
  render() {
    const lessonList = [
      {
        name: "Linear Search",
        image: "../images/linear.ico",
        content:
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry." +
          "Lorem Ipsum has been the industry's standard dummy text ever",
        animationComponentPath: "/algorithms/search/linear",
      },
      {
        name: "Binary Search",
        image: "../images/binary.webp",
        content:
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry." +
          "Lorem Ipsum has been the industry's standard dummy text ever",
        animationComponentPath: "/algorithms/search/binary",
      },
    ]
    return (
      <div style={{ backgroundColor: "#cedadab3" }}>
        <Header />
        <h1 style={{ textAlign: "center" }}>Searching Algorithms</h1>
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

export default SearchingAlgorithms
