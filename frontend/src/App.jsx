import Game from './components/Game'
import Result from './components/Result'
import Score from './components/Score'
// import { useState } from 'react'
import './App.css'

function App() {

  return (
    <>
      <div className="loading-screen hidden">
        <div className="spinner"></div>
      </div>
      <Score />
      <Game />
      <Result />
    </>
  )
}

export default App
