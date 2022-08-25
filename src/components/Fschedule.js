import React from "react";
import { Table, Thead, Tbody, Tr, Th, Td } from "react-super-responsive-table";
import "react-super-responsive-table/dist/SuperResponsiveTableStyle.css";
import classes from "data/classes.json";

function Schedule() {
  // const room = [" ", "F1", "S1", "⇨"];

  // let r1 = room[1];
  // let r2 = room[2];
  // let r3 = room[3];

  return (
    <div className="section">
      <h1 style={{ color: "#3a476d" }}>Weekly Schedule</h1>
      <Table className="content-table">
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
            <Td>Monday</Td>
            <Td> {classes[11]} </Td>
            <Td colSpan="2"> {classes[1]} </Td>
            <Td> {"R"} </Td>
            <Td> {classes[2]} </Td>
            <Td colSpan="2"> {classes[3]} </Td>
            <Td> {classes[11]} </Td>
          </Tr>
          <Tr className="selected">
            <Td>Tuesday</Td>
            <Td> {classes[11]} </Td>
            <Td> {classes[1]} </Td>
            <Td> {classes[4]} </Td>
            <Td> {"E"} </Td>
            <Td colSpan="4"> {classes[5]} </Td>
          </Tr>
          <Tr className="select">
            <Td>Wednesday</Td>
            <Td> {classes[0]} </Td>
            <Td colSpan="2"> {classes[6]} </Td>
            <Td> {"C"} </Td>
            <Td colSpan="2"> {classes[8]} </Td>
            <Td colSpan="2"> {classes[11]} </Td>
          </Tr>
          <Tr className="selected">
            <Td>Thursday</Td>
            <Td> {classes[0]} </Td>
            <Td> {classes[6]} </Td>
            <Td> {classes[3]} </Td>
            <Td> {"E"} </Td>
            <Td> {classes[9]} </Td>
            <Td colSpan="2"> {classes[7]} </Td>
            <Td> {classes[11]} </Td>
          </Tr>
          <Tr className="select">
            <Td>Friday</Td>
            <Td> {classes[11]} </Td>
            <Td colSpan="2"> {classes[4]} </Td>
            <Td> {"SS"} </Td>
            <Td colSpan="4"> {classes[10]} </Td>
          </Tr>
        </Tbody>
      </Table>
    </div>
  );
}

export default Schedule;
