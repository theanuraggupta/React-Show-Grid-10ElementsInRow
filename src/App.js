import "./styles.css";

export default function App() {
  // show a Grid which contains 10elements in each row,
  // and show numbers from 0 to 9, 10 to 19, 20 to 29 in each row
  // Bonus If they are square
  let data = Array(30).fill(undefined);
  return data.map((dat, i) => {
    let elem = document.getElementById("li-" + i);
    let offsetWidth = 0;
    if (elem) offsetWidth = elem.offsetWidth;
    return (
      <div
        key={i}
        id={"li-" + i}
        style={{
          background: "green",
          display: "inline-flex",
          width: "10%",
          height: offsetWidth + "px",
          margin: "0px auto"
        }}
      >
        <label
          style={{
            background: "green",
            border: "1px solid",
            width: "100%",
            height: offsetWidth + "px",
            verticalAlign: "middle",
            textAlign: "center"
          }}
        >
          {i * i}
        </label>
      </div>
    );
  });
}
