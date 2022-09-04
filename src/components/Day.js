import React from "react";

function Day(props) {
  let { Day, Class_1, Class_2, Class_3, Class_4, Class_5, Class_6, Class_7 } =
    props;

  let col_one = "1";
  let col_two = "1";
  let col_three = "1";
  let col_four = "1";
  let col_five = "1";
  let col_six = "1";
  let col_seven = "1";

  if (Class_1 === Class_2) {
    if (Class_1 === Class_3) {
      Class_2 = undefined;
      Class_3 = undefined;
      col_one = "3";
    } else {
      Class_2 = undefined;
      col_one = "2";
    }
  }

  if (Class_2 === Class_3) {
    Class_3 = undefined;
    col_two = "2";
  }

  // After break;
  if (Class_4 === Class_5) {
    if (Class_4 === Class_6) {
      if (Class_4 === Class_7) {
        Class_5 = undefined;
        Class_6 = undefined;
        Class_7 = undefined;
        col_four = "4";
      } else {
        Class_5 = undefined;
        Class_6 = undefined;
        col_four = "3";
      }
    } else {
      Class_5 = undefined;
      col_four = "2";
    }
  }

  if (Class_5 === Class_6) {
    if (Class_5 === Class_7) {
      Class_6 = undefined;
      Class_7 = undefined;
      col_five = "3";
    } else {
      Class_6 = undefined;
      col_five = "2";
    }
  }

  if (Class_6 === Class_7) {
    Class_7 = undefined;
    col_six = "2";
  }

  return (
    <div>
      <table className="content-table">
        <thead>
          <tr className="selected">
            <th>Day</th>
            <th>10 am - 11 am</th>
            <th>11 am - 12 pm</th>
            <th>12 pm - 1 pm</th>
            <th>1 pm - 2 pm</th>
            <th>2 pm - 3 pm</th>
            <th>3 pm - 4 pm</th>
            <th>4 pm - 5 pm</th>
            <th>5 pm - 6 pm</th>
          </tr>
        </thead>
        <tbody>
          <tr className="select, active-row">
            <td data-labe="Day" className="day">
              {Day}
            </td>
            <td colSpan={col_one}> {Class_1} </td>
            {Class_2 && <td colSpan={col_two}> {Class_2} </td>}
            {Class_3 && <td colSpan={col_three}> {Class_3} </td>}
            <td> BREAK </td>
            <td colSpan={col_four}> {Class_4} </td>
            {Class_5 && <td colSpan={col_five}> {Class_5} </td>}
            {Class_6 && <td colSpan={col_six}> {Class_6} </td>}
            {Class_7 && <td colSpan={col_seven}> {Class_7} </td>}
          </tr>
        </tbody>
      </table>
    </div>
  );
}
export default Day;
