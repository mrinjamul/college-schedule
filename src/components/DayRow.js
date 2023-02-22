import React from "react";

const DayRow = (props) => {
  let { Day, Class_1, Class_2, Class_3, Class_4, Class_5, Class_6, Class_7 } =
    props;
  let id = props.id;
  let isSelect = id % 2 === 0 ? "selected" : "select";

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

  // data-labe is used for the tooltip
  let data_labe_one = "10 am - 11 am";
  let data_labe_two = "11 am - 12 pm";
  let data_labe_three = "12 pm - 1 pm";
  let data_labe_four = "1:30 pm - 2:30 pm";
  let data_labe_five = "2:30 pm - 3:30 pm";
  let data_labe_six = "3:30 pm - 4:30 pm";
  let data_labe_seven = "4:30 pm - 5:30 pm";

  if (col_one === "3") {
    data_labe_one = "10 am - 12 pm";
  } else if (col_one === "2") {
    data_labe_one = "10 am - 11 am";
    data_labe_two = "11 am - 12 pm";
  }
  if (col_two === "2") {
    data_labe_two = "11 am - 1 pm";
  }
  if (col_four === "4") {
    data_labe_four = "1:30 pm - 5:30 pm";
  } else if (col_four === "3") {
    data_labe_four = "1:30 pm - 4:30 pm";
    data_labe_five = "2:30 pm - 5:30 pm";
  } else if (col_four === "2") {
    data_labe_four = "1:30 pm - 2:30 pm";
    data_labe_five = "2:30 pm - 3:30 pm";
  }
  if (col_five === "3") {
    data_labe_five = "2:30 pm - 5:30 pm";
  } else if (col_five === "2") {
    data_labe_five = "2:30 pm - 4:30 pm";
    data_labe_six = "3:30 pm - 5:30 pm";
  }
  if (col_six === "2") {
    data_labe_six = "3:30 pm - 5:30 pm";
  }

  return (
    <tr className={`${isSelect} active-row`}>
      <td data-labe="Day" className="day">
        {Day}
      </td>
      <td data-labe={data_labe_one} colSpan={col_one}>
        {" "}
        {Class_1}{" "}
      </td>
      {Class_2 && (
        <td data-labe={data_labe_two} colSpan={col_two}>
          {" "}
          {Class_2}{" "}
        </td>
      )}
      {Class_3 && (
        <td data-labe={data_labe_three} colSpan={col_three}>
          {" "}
          {Class_3}{" "}
        </td>
      )}
      <td data-labe="1 pm - 1:30 pm"> BREAK </td>
      <td data-labe={data_labe_four} colSpan={col_four}>
        {" "}
        {Class_4}{" "}
      </td>
      {Class_5 && (
        <td data-labe={data_labe_five} colSpan={col_five}>
          {" "}
          {Class_5}{" "}
        </td>
      )}
      {Class_6 && (
        <td data-labe={data_labe_six} colSpan={col_six}>
          {" "}
          {Class_6}{" "}
        </td>
      )}
      {Class_7 && (
        <td data-labe={data_labe_seven} colSpan={col_seven}>
          {" "}
          {Class_7}{" "}
        </td>
      )}
    </tr>
  );
};

export default DayRow;
