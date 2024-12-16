import { range } from "./utils";

const gridStyles = {
  width: "100px",
  height: "100px",
  border: "5px solid grey",
  borderRadius: "5px",
};

function Grid({ numRows, numCols }) {
  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: `repeat(${numCols}, 1fr)`,
        gap: "5px",
      }}
      className="grid"
    >
      {range(numRows * numCols).map(() => (
        <div key={crypto.randomUUID()} style={gridStyles}></div>
      ))}
    </div>
  );
}

export default Grid;
