import React from "react";
import Name from "./String_Obj";

class Time extends React.Component {
  constructor(props) {
    super(props);
    const datetime = new Date();
    this.state = { minutes: datetime.getMinutes(), hour: datetime.getHours() };

    Object.entries(Name.name).forEach((entry) => {
      const [key, value] = entry;
      console.log(this.state.hour.toLocaleString());
      if (key === this.state.hour.toLocaleString()) {
        this.setState({
          hour: value,
        });
        console.log(value);
      } else {
        console.log(key);
      }
    });
  }

  render() {
    // Object.entries(Name.minute).forEach((entry) => {
    //   let answer;
    //   const [key, value] = entry;
    //   console.log(this.state.minutes.toLocaleString());
    //   if (key === this.state.minutes.toLocaleString()) {
    //     answer = key;
    //   } else {
    //     console.log("x");
    //   }
    //   this.setState({ minutes: answer });
    // });

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
