import React from 'react';

function Thursday() {
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
                  <td>Thursday</td>
                  <td></td>
                  <td>MICROPROCESSOR & PROGRAMMING<br/>(AI)</td>
                  <td colspan="2">COMPUTER GRAPHICS LAB<br/>(AHM)</td>
                  <td></td>
                  <td colspan="3">RELATIONAL DATA BASE MANAGEMENT SYSTEMS LAB<br/>(FBA)</td>
                </tr>
            </table>
        </div>
    );
}
export default Thursday
