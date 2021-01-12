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
      this.setState(checkMinute(this.state.minutes));
      this.setState(checkHour(this.state.hour));
    }, 5000);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  render() {
    return (
      <div className="clock">
        {/* <button className="btn">Dark Mode</button> */}
        <p id="minutes">{this.state.minutes}</p>
        <p id="past">Past</p>
        <p id="hour">{this.state.hour}</p>
      </div>
    );
  }
}

export default Time;
