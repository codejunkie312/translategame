import { useState, useEffect } from "react";

function Game({ words, setScore, nbrCorrect, setNbrCorrect, score }) {
    
    const [selected, setSelected] = useState({ left: null, right: null });
    const [leftCards, setLeftCards] = useState([]);
    const [rightCards, setRightCards] = useState([]);

    const shuffleArray = arr => {
        return arr.sort(() => Math.random() - 0.5);
    };

    const handleCardClick = e => {
        const card = e.target;
        const isLeft = card.parentElement.classList.contains("left");

        if (isLeft) {
            let selectedCard = document.querySelector(".left .card.selected");
            if (selectedCard && selectedCard !== card) {
                selectedCard.classList.remove("selected");
            }
            setSelected(prev => ({ ...prev, left: card.textContent }));
        } else {
            let selectedCard = document.querySelector(".right .card.selected");
            if (selectedCard && selectedCard !== card) {
                selectedCard.classList.remove("selected");
            }
            setSelected(prev => ({ ...prev, right: card.textContent }));
        }

        card.classList.toggle("selected");
    };

    useEffect(() => {
        if (selected.left && selected.right) {
            const leftCard = document.querySelector(`.left .card.selected`);
            const rightCard = document.querySelector(`.right .card.selected`);
            const leftIndex = words.words_en.indexOf(selected.left);
            const rightIndex = words.translated_words.indexOf(selected.right);

            if (leftIndex === rightIndex) {
                leftCard.classList.add("correct");
                rightCard.classList.add("correct");
                setNbrCorrect(prev => prev + 1);

                setTimeout(() => {
                    leftCard.classList.remove("correct");
                    rightCard.classList.remove("correct");
                    leftCard.classList.add("disabled");
                    rightCard.classList.add("disabled");
                    leftCard.classList.remove("selected");
                    rightCard.classList.remove("selected");
                }, 1000);
            } else {
                leftCard.classList.add("wrong");
                rightCard.classList.add("wrong");
                setScore(prev => prev - 1);

                setTimeout(() => {
                    leftCard.classList.remove("wrong");
                    rightCard.classList.remove("wrong");
                    leftCard.classList.remove("selected");
                    rightCard.classList.remove("selected");
                }, 1000);
            }

            setSelected({ left: null, right: null });
        }
    }, [selected]);

    useEffect(() => {
        let words_en = [...words.words_en];
        let translated_words = [...words.translated_words];
        const words_left = shuffleArray(words_en);
        const words_right = shuffleArray(translated_words);
    
        const left = words_left.map((word, i) => (
            <div className="card" key={`left-${i}`} onClick={handleCardClick}>{word}</div>
        ));
        const right = words_right.map((word, i) => (
            <div className="card" key={`right-${i}`} onClick={handleCardClick}>{word}</div>
        ));

        setLeftCards(left);
        setRightCards(right);
    }, [words])

    useEffect(() => {
        console.log(selected);
    }, [selected]);

    useEffect(() => {
        const progress = document.querySelector(".progress-bar");
        progress.style = `--width-after: ${nbrCorrect * 20}%; --width-before: calc(${nbrCorrect * 20}% - 10%);`;
    }, [nbrCorrect]);

    useEffect(() => {
        if (score === 0) {
            document.querySelectorAll(".card").forEach(card => {
                card.classList.add("disabled");
            });
        }
    }, [score]);

    return (
        <section className="game">
            <h1 className="title">Tap the pairs</h1>
            <div className="cards">
                <div className="left">{leftCards}</div>
                <div className="right">{rightCards}</div>
            </div>
        </section>
    );
}

export default Game;