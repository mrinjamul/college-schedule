import React from 'react';

function Tuesday() {
    return(
        <div>
            <table>
                <tr>
                    <th>Day</th>
                    <th>Room No</th>
                    <th>10:30am - 11:30am</th>
                    <th>11:30am - 12:30pm</th>
                    <th>12:30pm - 1:30pm</th>
                    <th>BREAK<br/>1:30pm - 2:00pm</th>
                    <th>2:00pm - 3:00pm</th>
                    <th>3:00pm - 4:00pm</th>
                    <th>4:00pm - 5:00pm</th>
                </tr>
                <tr>
                  <td>Tuesday</td>
                  <td>F1</td>
                  <td>OBJECT ORIENTED PROGRAMMING<br/>(S.DAS)</td>
                  <td>COMPUTER NETWORK<br/>(MR)</td>
                  <td>RELATIONAL DATA BASE MANAGEMENT SYSTEMS<br/>(FBA)</td>
                  <td></td> 
                  <td>COMPUTER GRAPHICS<br/>(AHM)</td> 
                  <td colspan="2">PROFESSIONAL PRACTICE - II<br/>(SP)</td>
                </tr>
            </table>
        </div>
    );
}
export default Tuesday
