import "./result.styles.css";
const Result = ({ result }) => {
  return (
    <>
      <div>
        <h1 className={result ? "win vs" : "vs"} id="hasil">
          {result ? result : "VS"}
        </h1>
      </div>
    </>
  );
};

export default Result;
