import React from "react";
import Name from "./String_Obj";
import "./Time.css";

class Time extends React.Component {
  constructor(props) {
    super(props);
    const datetime = new Date();
    this.state = {
      minutes: datetime.getMinutes().toLocaleString(),
      hour: datetime.getHours().toLocaleString(),
    };
  }

  componentDidMount() {
    let hourOutput = "";
    let minuteOutput = "";

    this.interval = setInterval(() => {
      checkHour(this.state.hour);
      checkMinute(this.state.minutes);
      this.setState({ hour: hourOutput, minutes: minuteOutput });
    }, 5000);

    function checkMinute(state) {
      console.log("minute function ran");
      Object.entries(Name.minute).forEach((entry) => {
        const [key, value] = entry;
        if (key === state) {
          hourOutput = value;
        }
      });
    }

    function checkHour(state) {
      Object.entries(Name.hour).forEach((entry) => {
        const [key, value] = entry;
        if (key === state) {
          minuteOutput = value;
        }
      });
    }
  }
  componentWillUnmount() {
    clearInterval(this.interval);
  }

  render() {
    return (
      <div className="clock">
        {/* <button className="btn">Dark Mode</button> */}
        <p id="hour">{this.state.hour}</p>
        <p id="minutes">{this.state.minutes}</p>
      </div>
    );
  }
}

// setInterval(function callback() {});

// const darkMode = document.querySelector(".btn");
// const clock = document.querySelector(".clock");
// darkMode.addEventListener("click", () => {
//   clock.classList.add(".darkModeOn");
// });

export default Time;
