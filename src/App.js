import React from "react"
import HomePage from "./components/HomePage"
import "./App.css"
// import Algorithms from "./components/Algorithms"
import AlgorithmAnimation from "./components/AlgorithmAnimation"
import SortingAlgorithms from "./components/SortingAlgorithms"
import SearchingAlgorithms from "./components/SearchingAlgorithms"
import NotFound from "./components/NotFound"

import { Route, Routes } from "react-router-dom"

class App extends React.Component {
  render() {
    return (
      <>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/algorithms/sort" element={<SortingAlgorithms />} />
          <Route path="/algorithms/search" element={<SearchingAlgorithms />} />
          <Route path="/algorithm_animation" element={<AlgorithmAnimation />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </>
    )
  }
}

export default App
