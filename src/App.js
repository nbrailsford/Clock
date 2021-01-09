import "./App.css";
import Time from "./Time";

function App() {
  return (
    <div className="App">
      <Time />
    </div>
  );
}

let date = new Date();
let hour = date.getHours();
let minute = date.getMinutes();

console.log(hour);
console.log(minute);

export default App;
