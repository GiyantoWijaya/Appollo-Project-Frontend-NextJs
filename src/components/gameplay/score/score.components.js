const Score = ({ score }) => {
  return (
    <div className="text-center score">
      <h1 className="scorepoint">
        SCORE POINT <br />
      </h1>
      <h2 className="point">
        <span className="playerpoint">PLAYER : {score.playerScore} </span>
        <hr />
        <span className="computerpoint">COMPUTER : {score.computerScore}</span>
      </h2>
    </div>
  );
};

export default Score;
