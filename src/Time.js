import React from "react";
import Name from "./String_Obj";

class Time extends React.Component {
  constructor(props) {
    super(props);
    this.state = { minutes: "minute", hour: "hour" };
  }
  componentDidMount() {
    const datetime = new Date();
    const hourString = datetime.getHours().toLocaleString();
    const minuteString = datetime.getMinutes().toLocaleString();

    Object.entries(Name.minute).forEach((entry) => {
      const [key, value] = entry;
      if (key === minuteString) {
        this.setState({
          minutes: value,
        });
      }
    });

    Object.entries(Name.name).forEach((entry) => {
      const [key, value] = entry;
      if (key === hourString) {
        this.setState({
          hour: value,
        });
      }
    });
    console.log("tick");
  }

  render() {
    return (
      <div>
        <p>{this.state.hour}</p>
        <p>{this.state.minutes}</p>
        {/* <p>{name[1]}</p> */}
      </div>
    );
  }
}

setInterval(function callback() {});

export default Time;
