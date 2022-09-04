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
            <th>1pm - 2pm</th>
            <th>2pm - 3pm</th>
            <th>3pm - 4pm</th>
            <th>4pm - 5pm</th>
            <th>5pm - 6pm</th>
          </tr>
        </thead>
        <tbody>
          <tr className="select">
            <td data-labe="Day" class="day">Monday</td>
            <td data-labe="10:00 - 11:00 am"> {classes[10]} </td>
            <td data-labe="11:00 - 01:00 pm" colSpan="2"> {classes[1]} </td>
            <td data-labe="01:00 - 02:00 pm" class="break"> {"B"} </td>
            <td data-labe="02:00 - 06:00 pm" colSpan="4"> {classes[2]} </td>
          </tr>
          <tr className="selected">
            <td data-labe="Day" class="day">Tuesday</td>
            <td data-labe="10:00 - 11:00 am"> {classes[3]} </td>
            <td data-labe="11:00 - 01:00 pm" colSpan="2"> {classes[4]} </td>
            <td data-labe="01:00 - 02:00 pm" class="break"> {"R"} </td>
            <td data-labe="02:00 - 06:00 pm" colSpan="4"> {classes[5]} </td>
          </tr>
          <tr className="select">
            <td data-labe="Day" class="day">Wednesday</td>
            <td data-labe="10:00 - 11:00 am"> {classes[13]} </td>
            <td data-labe="11:00 - 01:00 pm" colSpan="2"> {classes[8]} </td>
            <td data-labe="01:00 - 02:00 pm" class="break"> {"E"} </td>
            <td data-labe="01:00 - 02:00 pm" colSpan="2"> {classes[7]} </td>
            <td data-labe="02:00 - 04:00 pm"> {classes[4]} </td>
            <td data-labe="04:00 - 06:00 pm"> {classes[10]} </td>
          </tr>
          <tr className="selected">
            <td data-labe="Day" class="day">Thursday</td>
            <td data-labe="10:00 - 11:00 am"> {classes[3]} </td>
            <td data-labe="11:00 - 12:00 am"> {classes[1]} </td>
            <td data-labe="12:00 - 01:00 pm"> {classes[4]} </td>
            <td data-labe="01:00 - 02:00 pm" class="break"> {"A"} </td>
            <td data-labe="02:00 - 03:00 pm">{classes[7]} </td>
            <td data-labe="03:00 - 05:00 pm" colSpan="2"> {classes[3]} </td>
            <td data-labe="05:00 - 06:00 pm"> {classes[10]} </td>
          </tr>
          <tr className="select">
            <td data-labe="Day" class="day">Friday</td>
            <td data-labe="10:00 - 11:00 am"> {classes[10]} </td>
            <td data-labe="11:00 - 01:00 pm" colSpan="2"> {classes[4]} </td>
            <td data-labe="01:00 - 02:00 pm" class="break"> {"K"} </td>
            <td data-labe="02:00 - 04:00 pm" colSpan="2"> {classes[13]} </td>
            <td data-labe="04:00 - 06:00 pm" colSpan="2"> {classes[10]} </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default Schedule;
