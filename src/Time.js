import React from "react";

const name = {
  1: "One",
  2: "two",
  3: "Three",
  4: "Four",
  5: "Five",
  6: "Six",
  7: "Seven",
  8: "Eight",
  9: "Nine",
  10: "Ten",
  11: "Eleven",
  12: "Twelve",
};

class Time extends React.Component {
  constructor(props) {
    super(props);
    const datetime = new Date();
    this.state = { minutes: datetime.getMinutes(), hour: datetime.getHours() };
  }

  render() {
    Object.entries(name).forEach((entry) => {
      const [key, value] = entry;
      if (key === this.state.hour.toLocaleString()) {
        this.setState({
          hour: value,
        });
      } else {
        console.log("needs to be standard time");
      }
    });
    return (
      <div>
        <p>{this.state.hour.toLocaleString()}</p>
        <p>{this.state.minutes.toLocaleString()}</p>
        {/* <p>{name[1]}</p> */}
      </div>
    );
  }
}

setInterval(function callback() {});

export default Time;
