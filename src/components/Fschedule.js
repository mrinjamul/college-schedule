import React from "react";
import {classes} from "./classes"

function Schedule() {
  // const room = [" ", "F1", "S1", "⇨"];

  // let r1 = room[1];
  // let r2 = room[2];
  // let r3 = room[3];

  return (
    <div className="section">
      <h1 style={{ color: "#3a476d" }}>
        You are currently viewing full schedule
      </h1>
      <table>
        <thead>
          <tr className="selected">
            <th>Day</th>
            <th>11am - 1:30pm</th>
            <th>2pm - 4:30pm</th>
          </tr>
        </thead>
        <tbody>
          <tr className="select">
            <td>Sunday</td>
            <td> {classes[2]} </td>
            <td> {classes[5]} </td>
          </tr>
          <tr className="selected">
            <td>Monday</td>
            <td> {classes[3]} </td>
            <td> {classes[4]} </td>
          </tr>
          <tr className="select">
            <td>Tuesday</td>
            <td> {classes[1]} </td>
            <td> {classes[3]} </td>
          </tr>
          <tr className="selected">
            <td>Wednesday</td>
            <td> {classes[1]} </td>
            <td> {classes[2]} </td>
          </tr>
          <tr className="select">
            <td>Thursday</td>
            <td> {classes[6]} </td>
            <td> {classes[5]} </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default Schedule;
