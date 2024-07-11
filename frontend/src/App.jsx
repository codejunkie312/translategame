import Game from './components/Game'
import Result from './components/Result'
import Score from './components/Score'
import { getWords } from './components/API';
import { useState, useEffect } from 'react'
import './App.css'

function App() {

  // States
  const [words, setWords] = useState({ words_en: [], translated_words: [] });
  const [score, setScore] = useState(5);
  const [nbrCorrect, setNbrCorrect] = useState(0);

  // Helper functions
  const handleClickLang = () => {
    const dropdown = document.querySelector('.lang-picker-dropdown');
    const dropdownHead = document.querySelector('.dropdown-head');
    const overlay = document.querySelector('.lang-picker-overlay');
    dropdown.classList.toggle('hidden');
    dropdownHead.classList.toggle('hidden');
    overlay.classList.toggle('hidden');
  }

  const fetchWords = async (lang) => {
    try {
      const wordsData = await getWords(lang);
      setWords(wordsData);
    } catch (error) {
      console.error(error);
    }
  };

  const getSavedLang = () => {
    return localStorage.getItem('lang') || 'ar';
  };

  const [lang, setLang] = useState(getSavedLang());

  useEffect(() => {
    fetchWords(lang);
  }, [lang]);

  return (
    <>
      <div className="loading-screen hidden">
        <div className="spinner"></div>
      </div>
      <Score handleClickLang={handleClickLang} lang={lang} setLang={setLang} score={score}/>
      <Game words={words} setScore={setScore} nbrCorrect={nbrCorrect} setNbrCorrect={setNbrCorrect} score={score}/>
      <Result nbrCorrect={nbrCorrect} score={score}/>
      <div className='lang-picker-overlay hidden' onClick={handleClickLang}></div>
    </>
  )
}

export default App
