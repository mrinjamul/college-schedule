import React, { Component } from "react";
import Fschedule from "./Fschedule";
import Day from "./Day";
import Holiday from "./Holiday";
import classes from "data/classes.json";

import "styles/Main.css";
import Expired from "./Expired";

class Schedule extends Component {
  constructor() {
    super();
    this.state = {
      fullView: false,
      displayTime: "HH:MM:SS AMPM",
    };
  }

  componentDidMount() {
    setInterval(() => {
      const time = new Date();
      var hh = time.getHours();
      var mm = time.getMinutes();
      var ss = time.getSeconds();

      var ampm = hh >= 12 ? "PM" : "AM";
      hh = hh > 12 ? hh - 12 : hh;
      hh = hh < 10 ? "0" + hh : hh;
      mm = mm < 10 ? "0" + mm : mm;
      ss = ss < 10 ? "0" + ss : ss;
      hh = hh === "00" ? "12" : hh;

      this.setState({
        displayTime: hh + ":" + mm + ":" + ss + " " + ampm,
      });
    }, 1000);
  }
  componentWillUnmount() {
    console.log("Schedule Component: unmounted !");
  }

  render() {
    const date = new Date();
    const day = date.getDay();
    const hours = date.getHours();

    const now = date.getHours() * 60 + date.getMinutes();
    const ten = 10 * 60;
    const eleven = 11 * 60;
    const twelve = 12 * 60;
    const thirteen = 13 * 60;
    const thirteenHalf = 13 * 60 + 30;
    const fourteenHalf = 14 * 60 + 30;
    const fifteenHalf = 15 * 60 + 30;
    const sixteenHalf = 16 * 60 + 30;
    const seventeenHalf = 17 * 60 + 30;

    let timeOfDay;
    let DayName;
    let CurrentS;
    let Class_1;
    let Class_2;
    let Class_3;
    let Class_4;
    let Class_5;
    let Class_6;
    let Class_7;
    let availability = true;
    let expires = Date.parse(this.props.expires);
    if (date >= expires) {
      availability = false;
    }

    // const room = [' ','F1','S1','⇨',];

    const messages = ["Break Time", "No class available right now !"];

    if (5 < hours && hours < 12) {
      timeOfDay = "Morning";
    } else if (hours >= 12 && hours < 17) {
      timeOfDay = "Afternoon";
    } else if (hours > 17 && hours < 20) {
      timeOfDay = "Evening";
    } else if (hours > 0 && hours < 2) {
      timeOfDay = "Mid Night";
    } else if (hours > 4 && hours < 5) {
      timeOfDay = "Dawn";
    } else {
      timeOfDay = "Night";
    }

    if (day === 1) {
      DayName = "Monday";
      Class_1 = classes[11];
      Class_2 = classes[1];
      Class_3 = classes[1];
      Class_4 = classes[2];
      Class_5 = classes[3];
      Class_6 = classes[3];
      Class_7 = classes[11];
      if (ten <= now && now < eleven) {
        CurrentS = Class_1;
      } else if (eleven <= now && now < twelve) {
        CurrentS = Class_2;
      } else if (twelve <= now && now < thirteen) {
        CurrentS = Class_3;
      } else if (thirteen <= now && now < thirteenHalf) {
        CurrentS = messages[0];
      } else if (thirteenHalf <= now && now < fourteenHalf) {
        CurrentS = Class_4;
      } else if (fourteenHalf <= now && now < fifteenHalf) {
        CurrentS = Class_5;
      } else if (fifteenHalf <= now && now < sixteenHalf) {
        CurrentS = Class_6;
      } else if (sixteenHalf <= now && now < seventeenHalf) {
        CurrentS = Class_7;
      } else {
        CurrentS = messages[1];
      }
    } else if (day === 2) {
      DayName = "Tuesday";
      Class_1 = classes[11];
      Class_2 = classes[1];
      Class_3 = classes[4];
      Class_4 = classes[5];
      Class_5 = classes[5];
      Class_6 = classes[5];
      Class_7 = classes[5];
      if (ten <= now && now < eleven) {
        CurrentS = Class_1;
      } else if (eleven <= now && now < twelve) {
        CurrentS = Class_2;
      } else if (twelve <= now && now < thirteen) {
        CurrentS = Class_3;
      } else if (thirteen <= now && now < thirteenHalf) {
        CurrentS = messages[0];
      } else if (thirteenHalf <= now && now < fourteenHalf) {
        CurrentS = Class_4;
      } else if (fourteenHalf <= now && now < fifteenHalf) {
        CurrentS = Class_5;
      } else if (fifteenHalf <= now && now < sixteenHalf) {
        CurrentS = Class_6;
      } else if (sixteenHalf <= now && now < seventeenHalf) {
        CurrentS = Class_7;
      } else {
        CurrentS = messages[1];
      }
    } else if (day === 3) {
      DayName = "Wednesday";
      Class_1 = classes[0];
      Class_2 = classes[6];
      Class_3 = classes[6];
      Class_4 = classes[8];
      Class_5 = classes[8];
      Class_6 = classes[11];
      Class_7 = classes[11];
      if (ten <= now && now < eleven) {
        CurrentS = Class_1;
      } else if (eleven <= now && now < twelve) {
        CurrentS = Class_2;
      } else if (twelve <= now && now < thirteen) {
        CurrentS = Class_3;
      } else if (thirteen <= now && now < thirteenHalf) {
        CurrentS = messages[0];
      } else if (thirteenHalf <= now && now < fourteenHalf) {
        CurrentS = Class_4;
      } else if (fourteenHalf <= now && now < fifteenHalf) {
        CurrentS = Class_5;
      } else if (fifteenHalf <= now && now < sixteenHalf) {
        CurrentS = Class_6;
      } else if (sixteenHalf <= now && now < seventeenHalf) {
        CurrentS = Class_7;
      } else {
        CurrentS = messages[1];
      }
    } else if (day === 4) {
      DayName = "Thursday";
      Class_1 = classes[0];
      Class_2 = classes[6];
      Class_3 = classes[3];
      Class_4 = classes[9];
      Class_5 = classes[7];
      Class_6 = classes[7];
      Class_7 = classes[11];
      if (ten <= now && now < eleven) {
        CurrentS = Class_1;
      } else if (eleven <= now && now < twelve) {
        CurrentS = Class_2;
      } else if (twelve <= now && now < thirteen) {
        CurrentS = Class_3;
      } else if (thirteen <= now && now < thirteenHalf) {
        CurrentS = messages[0];
      } else if (thirteenHalf <= now && now < fourteenHalf) {
        CurrentS = Class_4;
      } else if (fourteenHalf <= now && now < fifteenHalf) {
        CurrentS = Class_5;
      } else if (fifteenHalf <= now && now < sixteenHalf) {
        CurrentS = Class_6;
      } else if (sixteenHalf <= now && now < seventeenHalf) {
        CurrentS = Class_7;
      } else {
        CurrentS = messages[1];
      }
    } else if (day === 5) {
      DayName = "Friday";
      Class_1 = classes[11];
      Class_2 = classes[4];
      Class_3 = classes[4];
      Class_4 = classes[10];
      Class_5 = classes[10];
      Class_6 = classes[10];
      Class_7 = classes[10];
      if (ten <= now && now < eleven) {
        CurrentS = Class_1;
      } else if (eleven <= now && now < twelve) {
        CurrentS = Class_2;
      } else if (twelve <= now && now < thirteen) {
        CurrentS = Class_3;
      } else if (thirteen <= now && now < thirteenHalf) {
        CurrentS = messages[0];
      } else if (thirteenHalf <= now && now < fourteenHalf) {
        CurrentS = Class_4;
      } else if (fourteenHalf <= now && now < fifteenHalf) {
        CurrentS = Class_5;
      } else if (fifteenHalf <= now && now < sixteenHalf) {
        CurrentS = Class_6;
      } else if (sixteenHalf <= now && now < seventeenHalf) {
        CurrentS = Class_7;
      } else {
        CurrentS = messages[1];
      }
    } else if (day === 6) {
      DayName = "Saturday";
      CurrentS = messages[1];
    } else {
      DayName = "Sunday";
      CurrentS = messages[1];
    }

    let sed;
    if (this.state.fullView === true) {
      sed = <Fschedule />;
    }
    let displayToday;
    if (day === 6 || day === 0) {
      displayToday = <Holiday Day={DayName} />;
    } else {
      displayToday = (
        <Day
          Day={DayName}
          Class_1={Class_1}
          Class_2={Class_2}
          Class_3={Class_3}
          Class_4={Class_4}
          Class_5={Class_5}
          Class_6={Class_6}
          Class_7={Class_7}
        />
      );
    }
    if (!availability) {
      displayToday = <Expired />;
    }
    return (
      <div className="main">
        <div className="section">
          <h1>
            <span className="rounded-corner">College Schedule</span>
          </h1>
          <h1>
            Time: {this.state.displayTime} , {timeOfDay}{" "}
          </h1>
          {availability && <h1>Now : {CurrentS}</h1>}
          {displayToday}
          <br />
          {availability && (
            <button
              onClick={() => {
                this.state.fullView === false
                  ? this.setState({ fullView: true })
                  : this.setState({ fullView: false });
              }}
            >
              <b>View Full Schedule</b>
            </button>
          )}
        </div>
        {sed}
      </div>
    );
  }
}

export default Schedule;
