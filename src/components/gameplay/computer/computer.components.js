import Image from "next/image";

import "./computer.styles.css";

const Computer = ({ compChoose }) => {
  return (
    <>
      <div id="computer">
        <h1 className="mb-5 title">COMPUTER</h1>
        <Image
          src="/img/batu.png"
          data-type="batu"
          className={compChoose === "batu" ? "active" : ""}
          alt="batu"
          width={500}
          height={500}
        />
        <Image
          src="/img/kertas.png"
          data-type="kertas"
          className={compChoose === "kertas" ? "active" : ""}
          alt="kertas"
          width={500}
          height={500}
        />
        <Image
          src="/img/gunting.png"
          data-type="gunting"
          className={compChoose === "gunting" ? "active" : ""}
          alt="gunting"
          width={500}
          height={500}
        />
      </div>
    </>
  );
};

export default Computer;
