function Result ({ nbrCorrect, score }) {
    const handleClick = () => {
      window.location.reload();
    };
    if (nbrCorrect === 5) {
      return (
        <section className="result win" style={{ opacity: 1 }}>
            <h1 className="win-title">Nicely done!</h1>
            <button className="play-again" onClick={handleClick}>Play again</button>
        </section>
      );
    }
    if (score === 0) {
      return (
        <section className="result lost" style={{ opacity: 1 }}>
            <h1 className="win-title">Game over</h1>
            <button className="play-again" onClick={handleClick}>Play again</button>
        </section>
      );
    }
  }
  
  export default Result;
