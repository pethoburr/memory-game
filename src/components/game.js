import React, { useEffect, useState } from 'react';
import Scoreboard from './scoreboard';
import '../stylesheets/game.css';

const Game = () => {
    const [highScore, setHighScore] = useState(0);
    let [score, setScore] = useState(0);
    const [hits, setHit] = useState([]);

    const checkHits = (num) => {
        console.log(num);
        setScore((prevScore) => {
            return prevScore + 1;
        })
        
    }

    const checker = (num) => {
        setHit(prevHit => {
            return [...prevHit, num];
        })
    }

    useEffect(() => {
        console.log(`hits: ${hits}`);
        const hasDuplicates = hits.some((item, index) => hits.indexOf(item, index + 1) !== -1)
        if (hasDuplicates) {
            if (highScore < score) {
                setHighScore(score - 1)
            }
            setScore(0);
            setHit([]);
        }
    }, [hits, highScore, score]);

    const shuffle = (array, num, arr) => {
        checker(num, arr);
        checkHits(num, arr);
        const newArr = [...array];
        for (let i = newArr.length - 1; i > 0; i--) {
            let j = Math.floor(Math.random() * (i + 1));
            let temp = newArr[i];
            newArr[i] = newArr[j];
            newArr[j] = temp;
        }
        setArr(newArr);
    }
    const bindy = () => {return (<div className='picContainer' onClick={(e) => {return shuffle(arr, 1)}}>
    <img src={require("../assets/bindy.jpg")} value="bindy" alt='bindy johal'></img>
    <p className='name'>Bindy Johal</p>
    </div>)}
    const tony = () => {return (<div className='picContainer' onClick={() => {return shuffle(arr, 2)}}>
    <img src={require("../assets/scarface.jpg")} alt='bindy johal'></img>
    <p className='name'>Tony Montana</p>
    </div>)};
    const pablo = () => {return (<div className='picContainer' onClick={() => {return shuffle(arr, 3)}}>
    <img src={require("../assets/pablo.jpg")} alt='bindy johal'></img>
    <p className='name'>Pablo escobar</p>
    </div>)};
    const chapo = () => {return (<div className='picContainer' onClick={() => {return shuffle(arr, 4)}}>
    <img src={require("../assets/elChapo.webp")} alt='bindy johal'></img>
    <p className='name'>El Chapo</p>
    </div>)};
    const sosa = () => {return (<div className='picContainer' onClick={() => {return shuffle(arr, 5)}}>
    <img src={require("../assets/sosa.jpg")} alt='bindy johal'></img>
    <p className='name'>Sosa</p>
    </div>)};
    const capone = () => <div className='picContainer' onClick={() => {return shuffle(arr, 6)}}>
    <img src={require("../assets/al_capone.webp")} alt='bindy johal'></img>
    <p className='name'>Al Capone</p>
    </div>;
    const nino = () => {return (<div className='picContainer' onClick={() => {return shuffle(arr, 7)}}>
    <img src={require("../assets/ninobrown.webp")} alt='bindy johal'></img>
    <p className='name'>Nino Brown</p>
    </div>)};
    const griselda = () => {return (<div className='picContainer' onClick={() => {return shuffle(arr, 8)}}>
    <img src={require("../assets/griselda.jpg")} alt='bindy johal'></img>
    <p className='name'>Griselda blanco</p>
    </div>)};
    const meech = () => {return (<div className='picContainer' onClick={() => {return shuffle(arr, 9)}}>
    <img src={require("../assets/bigmeech.jpg")} alt='bindy johal'></img>
    <p className='name'>Big Meech</p>
    </div>)};
    const hoover = () => {return (<div className='picContainer' onClick={() => {return shuffle(arr, 10)}}>
    <img src={require("../assets/larryhoover.webp")} alt='bindy johal'></img>
    <p className='name'>Larry Hoover</p>
    </div>)};
    const gambino = () => {return (<div className='picContainer' onClick={() => {return shuffle(arr, 11)}}>
    <img src={require("../assets/gambino.jpg")} alt='bindy johal'></img>
    <p className='name'>Gambino</p>
    </div>)};
    const bumpy = () => {return (<div className='picContainer' onClick={() => {return shuffle(arr, 12)}}>
    <img src={require("../assets/bumpyjohnson.jpg")} alt='bindy johal'></img>
    <p className='name'>Bumpy Johnson</p>
    </div>)};

    const [arr, setArr] = useState([{key: 1, func: bindy}, {key: 2, func: tony}, {key: 3, func: pablo}, {key: 4, func: chapo}, {key: 5, func:  sosa}, {key: 6, func: capone}, {key: 7, func: nino}, {key: 8, func: griselda}, {key: 9, func: meech}, {key: 10, func: hoover}, {key: 11, func: gambino}, {key: 12, func: bumpy}]);

    return (
        <div className='gameContainer'>
            <Scoreboard props={score} hs={highScore} />
            <div className='cardsContainer'>
            {arr.map((item) => { return item.func() })}   
            </div>
        </div>
    )
}

export default Game;