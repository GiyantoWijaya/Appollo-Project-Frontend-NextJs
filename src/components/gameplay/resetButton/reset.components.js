import Image from "next/image";
import "./reset.styles.css";

const Reset = ({ handleReset }) => {
  return (
    <div className="refresh">
      <Image
        src="/img/refresh.png"
        alt="reset"
        className="reset"
        onClick={() => handleReset()}
        width={72}
        height={72}
      />
    </div>
  );
};

export default Reset;
