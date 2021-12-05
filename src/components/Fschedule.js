import React from "react";
import { classes } from "./classes";

function Schedule() {
  // const room = [" ", "F1", "S1", "⇨"];

  // let r1 = room[1];
  // let r2 = room[2];
  // let r3 = room[3];

  return (
    <div className="section">
      <h1 style={{ color: "#3a476d" }}>Weekly Schedule</h1>
      <table>
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
            <td>Monday</td>
            <td> {classes[10]} </td>
            <td colSpan="2"> {classes[1]} </td>
            <td> {"R"} </td>
            <td> {classes[2]} </td>
            <td> {classes[6]} </td>
            <td colSpan="2"> {classes[10]} </td>
          </tr>
          <tr className="selected">
            <td>Tuesday</td>
            <td> {classes[10]} </td>
            <td> {classes[4]} </td>
            <td> {classes[2]} </td>
            <td> {"E"} </td>
            <td colSpan="4"> {classes[5]} </td>
          </tr>
          <tr className="select">
            <td>Wednesday</td>
            <td colSpan="2"> {classes[4]} </td>
            <td> {classes[2]} </td>
            <td> {"C"} </td>
            <td colSpan="4"> {classes[3]} </td>
          </tr>
          <tr className="selected">
            <td>Thursday</td>
            <td colSpan="2"> {classes[1]} </td>
            <td> {classes[7]} </td>
            <td> {"E"} </td>
            <td colSpan="4"> {classes[3]} </td>
          </tr>
          <tr className="select">
            <td>Friday</td>
            <td> {classes[10]} </td>
            <td> {classes[7]} </td>
            <td> {classes[1]} </td>
            <td> {"SS"} </td>
            <td colSpan="4"> {classes[9]} </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default Schedule;
