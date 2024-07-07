import Game from './components/Game'
import Result from './components/Result'
import Score from './components/Score'
// import { useState } from 'react'
import './App.css'

function App() {

  const handleClickLang = () => {
    const dropdown = document.querySelector('.lang-picker-dropdown');
    const dropdownHead = document.querySelector('.dropdown-head');
    const overlay = document.querySelector('.lang-picker-overlay');
    dropdown.classList.toggle('hidden');
    dropdownHead.classList.toggle('hidden');
    overlay.classList.toggle('hidden');
  }

  return (
    <>
      <div className="loading-screen hidden">
        <div className="spinner"></div>
      </div>
      <Score handleClickLang={handleClickLang}/>
      <Game />
      <Result />
      <div className='lang-picker-overlay hidden' onClick={handleClickLang}></div>
    </>
  )
}

export default App
