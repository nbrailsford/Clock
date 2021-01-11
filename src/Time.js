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
    let checkMinute = () => {
      let time = new Date().getMinutes().toLocaleString();
      Object.entries(Name.minute).forEach((entry) => {
        const [key, value] = entry;
        if (key === time) {
          this.setState({
            minutes: value,
          });
        }
      });
    };

    let checkHour = () => {
      let time = new Date().getHours().toLocaleString();
      Object.entries(Name.hour).forEach((entry) => {
        const [key, value] = entry;
        if (key === time) {
          this.setState({
            hour: value,
          });
        }
      });
    };
    this.interval = setInterval(() => {
      checkPositioning();
      changeHour();
      this.setState(checkMinute(this.state.minutes));
      this.setState(checkHour(this.state.hour));
    }, 5000);

    // hour and minute positioning
    let changeHour = () => {
      let time = new Date().getHours().toLocaleString();
      Object.entries(Name.hour).forEach((entry) => {
        const [key, value] = entry;
        if (time === (30 || 45 || 50 || 55)) {
          console.log(key - 1);
          this.setState({
            hour: value,
          });
        }
      });
    };

    let checkPositioning = () => {
      let checkTime = this.state.minutes;
      if (checkTime === 30 || (checkTime > 9 && checkTime < 20)) {
        document.querySelector("#minutes").classList.add("top");
        document.querySelector("#hour").classList.add("bottom");
      } else if (checkTime === 45 || checkTime === 50 || checkTime === 55) {
        document.querySelector("#minutes").classList.add("top");
        document.querySelector("#hour").classList.add("bottom");
      } else {
        document.querySelector("#minutes").classList.add("bottom");
        document.querySelector("#hour").classList.add("top");
      }
    };
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
