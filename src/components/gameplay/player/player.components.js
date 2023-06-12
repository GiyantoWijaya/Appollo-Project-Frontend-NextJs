import Image from "next/image";

import "./player.styles.css";

const Player = ({ handlePlayerChoose, playerChoose }) => {
  return (
    <>
      <div id="player">
        <h1 className="mb-5 title">PLAYER</h1>
        <Image
          src="/img/batu.png"
          data-type="batu"
          className={playerChoose === "batu" ? "active" : ""}
          alt="batu"
          onClick={() => handlePlayerChoose("batu")}
          width={500}
          height={500}
        />
        <Image
          src="/img/kertas.png"
          data-type="kertas"
          className={playerChoose === "kertas" ? "active" : ""}
          alt="kertas"
          onClick={() => handlePlayerChoose("kertas")}
          width={500}
          height={500}
        />
        <Image
          src="/img/gunting.png"
          data-type="gunting"
          className={playerChoose === "gunting" ? "active" : ""}
          alt="gunting"
          onClick={() => handlePlayerChoose("gunting")}
          width={500}
          height={500}
        />
      </div>
    </>
  );
};

export default Player;
