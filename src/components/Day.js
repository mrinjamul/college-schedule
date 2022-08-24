import React from "react";
import { Table, Thead, Tbody, Tr, Th, Td } from "react-super-responsive-table";
import "react-super-responsive-table/dist/SuperResponsiveTableStyle.css";

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
      <Table>
        <Thead>
          <Tr className="selected">
            <Th>Day</Th>
            <Th>10am - 11am</Th>
            <Th>11am - 12pm</Th>
            <Th>12pm - 1pm</Th>
            <Th>1pm - 1:30pm</Th>
            <Th>1:30pm - 2:30pm</Th>
            <Th>2:30pm - 3:30pm</Th>
            <Th>3:30pm - 4:30pm</Th>
            <Th>4:30pm - 5:30pm</Th>
          </Tr>
        </Thead>
        <Tbody>
          <Tr className="select">
            <Td>{Day}</Td>
            <Td colSpan={col_one}> {Class_1} </Td>
            {Class_2 && <Td colSpan={col_two}> {Class_2} </Td>}
            {Class_3 && <Td colSpan={col_three}> {Class_3} </Td>}
            <Td> RECESS </Td>
            <Td colSpan={col_four}> {Class_4} </Td>
            {Class_5 && <Td colSpan={col_five}> {Class_5} </Td>}
            {Class_6 && <Td colSpan={col_six}> {Class_6} </Td>}
            {Class_7 && <Td colSpan={col_seven}> {Class_7} </Td>}
          </Tr>
        </Tbody>
      </Table>
    </div>
  );
}
export default Day;
