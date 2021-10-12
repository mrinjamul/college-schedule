import React from "react";

function Day(props) {
  const { Day, Class_1, Class_2, Class_3, Class_4, Class_5, Class_6, Class_7 } =
    props;
  return (
    <div>
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
            <td>{Day}</td>
            <td> {Class_1} </td>
            <td> {Class_2} </td>
            <td> {Class_3} </td>
            <td> RECESS </td>
            <td> {Class_4} </td>
            <td> {Class_5} </td>
            <td> {Class_6} </td>
            <td> {Class_7} </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
export default Day;
