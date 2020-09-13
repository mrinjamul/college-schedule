import React from "react";

function Day(props) {
  const { Day, Class_1, Class_2 } = props;
  return (
    <div>
      <table>
        <thead>
          <tr className="selected">
            <th>Day</th>
            <th>11am - 12pm</th>
            <th>2pm - 3pm</th>
          </tr>
        </thead>
        <tbody>
          <tr className="select">
            <td>{Day}</td>
            <td> {Class_1} </td>
            <td> {Class_2} </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
export default Day;
