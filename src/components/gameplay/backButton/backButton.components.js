import Link from "next/link";
import "./backButton.styles.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretLeft } from "@fortawesome/free-solid-svg-icons";

const BackButton = () => {
  return (
    <>
      <div className="mx-4">
        <Link href="/home" className="backtohome">
          <h1 className="d-inline nav">
            <FontAwesomeIcon icon={faCaretLeft} /> Back to home
          </h1>
        </Link>
      </div>
    </>
  );
};

export default BackButton;
