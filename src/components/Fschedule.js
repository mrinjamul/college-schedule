import React from "react";
import classes from "data/classes.json";

function Schedule() {
  // const room = [" ", "F1", "S1", "⇨"];

  // let r1 = room[1];
  // let r2 = room[2];
  // let r3 = room[3];

  return (
    <div className="section">
      <h1 style={{ color: "#3a476d" }}>Weekly Schedule</h1>
      <table className="content-table">
        <thead>
          <tr className="selected">
            <th>Day</th>
            <th>10am - 11am</th>
            <th>11am - 12pm</th>
            <th>12pm - 1pm</th>
            <th>1pm - 1:30pm</th>
            <th>1:30pm - 2:30pm</th>
            <th>2:30pm - 3:30pm</th>
            <th>3:30pm - 4:30pm</th>
            <th>4:30pm - 5:30pm</th>
          </tr>
        </thead>
        <tbody>
          <tr className="select">
            <td data-labe="Day" className="day">
              Monday
            </td>
            <td data-labe="10:00 - 11:00 am"> {classes[9]} </td>
            <td data-labe="11:00 - 01:00 pm" colSpan="2">
              {" "}
              {classes[1]}{" "}
            </td>
            <td data-labe="01:00 - 1:30 pm" className="break">
              {" "}
              {"B"}{" "}
            </td>
            <td data-labe="01:30 - 05:30 pm" colSpan="4">
              {" "}
              {classes[7]}{" "}
            </td>
          </tr>
          <tr className="selected">
            <td data-labe="Day" className="day">
              Tuesday
            </td>
            <td data-labe="10:00 - 11:00 am"> {classes[9]} </td>
            <td data-labe="11:00 - 12:00 pm" colSpan="1">
              {" "}
              {classes[2]}{" "}
            </td>
            <td data-labe="12:00 - 01:00 pm" colSpan="1">
              {" "}
              {classes[3]}{" "}
            </td>
            <td data-labe="01:00 - 01:30 pm" className="break">
              {" "}
              {"R"}{" "}
            </td>
            <td data-labe="01:30 - 03:30 pm" colSpan="2">
              {" "}
              {classes[4]}{" "}
            </td>
            <td data-labe="03:30 - 05:30 pm" colSpan="2">
              {" "}
              {classes[8]}{" "}
            </td>
          </tr>
          <tr className="select">
            <td data-labe="Day" className="day">
              Wednesday
            </td>
            <td data-labe="10:00 - 11:00 am"> {classes[10]} </td>
            <td data-labe="11:00 - 12:00 pm"> {classes[10]} </td>
            <td data-labe="11:00 - 01:00 pm" colSpan="1">
              {" "}
              {classes[5]}{" "}
            </td>
            <td data-labe="01:00 - 01:30 pm" className="break">
              {" "}
              {"E"}{" "}
            </td>
            <td data-labe="01:30 - 02:30 pm" colSpan="2">
              {" "}
              {classes[4]}{" "}
            </td>
            <td data-labe="02:30 - 04:30 pm"> {classes[3]} </td>
            <td data-labe="04:30 - 05:30 pm"> {classes[9]} </td>
          </tr>
          <tr className="selected">
            <td data-labe="Day" className="day">
              Thursday
            </td>
            <td data-labe="10:00 - 11:00 am"> {classes[9]} </td>
            <td data-labe="11:00 - 12:00 am"> {classes[9]} </td>
            <td data-labe="12:00 - 01:00 pm"> {classes[1]} </td>
            <td data-labe="01:00 - 01:30 pm" className="break">
              {" "}
              {"A"}{" "}
            </td>
            <td data-labe="01:30 - 05:30 pm" colSpan="4">
              {classes[6]}{" "}
            </td>
          </tr>
          <tr className="select">
            <td data-labe="Day" className="day">
              Friday
            </td>
            <td data-labe="10:00 - 11:00 am"> {classes[10]} </td>
            <td data-labe="11:00 - 01:00 pm" colSpan="2">
              {" "}
              {classes[2]}{" "}
            </td>
            <td data-labe="01:00 - 01:30 pm" className="break">
              {" "}
              {"K"}{" "}
            </td>
            <td data-labe="01:30 - 03:30 pm" colSpan="2">
              {classes[5]}{" "}
            </td>
            <td data-labe="03:30 - 04:30 pm" colSpan="1">
              {" "}
              {classes[8]}{" "}
            </td>
            <td data-labe="04:30 - 05:30 pm"> {classes[9]} </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default Schedule;
