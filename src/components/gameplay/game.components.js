'use client';

import { useState, useEffect } from 'react';
import BackButton from './backButton/backButton.components';
import Player from './player/player.components';
import Computer from './computer/computer.components';
import Reset from './resetButton/reset.components';
import Result from './result/result.components';
import Score from './score/score.components';
import axios from 'axios';

const Game = ({ idgame, userId }) => {
  // const userId = Cookies.get("userId");
  // console.log(userId);
  const [playerChoose, setPlayerChoose] = useState(null);
  const [compChoose, setCompChoose] = useState(null);
  const [result, setResult] = useState(null);
  const [score, setScore] = useState({ playerScore: 0, computerScore: 0 });

  useEffect(() => {
    function handleResult() {
      if (playerChoose === compChoose) {
        return 'Draw!!';
      } else if (
        (playerChoose === 'batu' && compChoose === 'kertas') ||
        (playerChoose === 'kertas' && compChoose === 'gunting') ||
        (playerChoose === 'gunting' && compChoose === 'batu')
      ) {
        setScore((prevScore) => ({
          ...prevScore,
          computerScore: prevScore.computerScore + 1,
        }));
        return 'Computer Win';
      } else {
        setScore((prevScore) => ({
          ...prevScore,
          playerScore: prevScore.playerScore + 1,
        }));
        return 'Player Win';
      }
    }

    if (playerChoose !== null && compChoose !== null) {
      setResult(handleResult());
    }
  }, [playerChoose, compChoose]);

  useEffect(() => {
    async function sentScore() {
      try {
        const currentTime = new Date();
        const secondsWithinMinute = `${currentTime.getMinutes()} minutes ${currentTime.getSeconds()} seconds`;
        // const response = await fetch(
        //   `http://localhost:5001/api/gamePlay/${idgame}/${userId}`,
        //   {
        //     method: "POST",
        //     mode: "cors",
        //     headers: {
        //       "Content-Type": "application/json",
        //     },
        //     body: JSON.stringify({
        //       score: score.playerScore,
        //       time: secondsWithinMinute,
        //     }),
        //     cache: "no-store",
        //   }
        // );
        // const response = await fetch(`https://api-apollo.niceblue.my.id/api/gamePlay/${idgame}/${userId}`, {
        //   method: 'POST',
        //   mode: 'cors',
        //   headers: {
        //     'Content-Type': 'application/json',
        //   },
        //   body: JSON.stringify({
        //     score: score.playerScore,
        //     time: secondsWithinMinute,
        //   }),
        //   cache: 'no-store',
        // });
        const response = await axios.post(`https://api-apollo.niceblue.my.id/api/gamePlay/${idgame}/${userId}`, {
          score: score.playerScore,
          time: secondsWithinMinute,
        });
        return response;
      } catch (Error) {
        console.log(Error.message);
      }
    }
    sentScore();
  }, [score.playerScore, idgame, userId]);

  function handlePlayerChoose(choice) {
    if (playerChoose !== null) {
      alert('Game Over Please Click Restart Button');
      return;
    }
    setPlayerChoose(choice);
    setCompChoose(getComputerChoose());
  }

  function getComputerChoose() {
    const computerChoices = ['batu', 'kertas', 'gunting'];
    return computerChoices[Math.floor(Math.random() * computerChoices.length)];
  }

  function handleReset() {
    setPlayerChoose(null);
    setCompChoose(null);
    setResult(null);
  }
  return (
    <>
      <div className="gameplay">
        <BackButton />
        <Score score={score} />
        <div className="container gamecontent">
          <div className="row justify-content-center">
            <div className="col-xxl-2 col-xl-2 col-lg-2 col-md-3 col-sm-4 col-xs-12 mx-auto my-auto">
              <Player handlePlayerChoose={handlePlayerChoose} playerChoose={playerChoose} />
            </div>
            <div className="col-xxl-3 col-xl-3 col-lg-3 col-md-4 col-sm-4 col-xs-12 mx-auto my-auto text-center">
              <Result result={result} />
            </div>
            <div className="col-xxl-2 col-xl-2 col-lg-2 col-md-3 col-sm-4 col-xs-12 mx-auto my-auto">
              <Computer compChoose={compChoose} />
            </div>
          </div>
          <div className="row justify-content-center">
            <div className="col-lg-1">
              <Reset handleReset={handleReset} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Game;
