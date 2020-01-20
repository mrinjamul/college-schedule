import React from 'react';

function Wednesday() {
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
                  <td>Wednesday</td>
                  <td className="selected">&#8680;</td>
                  <td className="selected" colspan="2">MICROPROCESSOR & PROGRAMMING LAB<br/>(AI)</td>
                  <td className="selected">COMPUTER GRAPHICS<br/>(AHM)(S1)</td>
                  <td></td>
                  <td className="selected">MICROPROCESSOR & PROGRAMMING<br/>(AI)</td>
                  <td className="selected">DLS-II <br/>(ARM)(S1)</td> 
                  <td className="selected">RELATIONAL DATA BASE MANAGEMENT SYSTEMS<br/>(FBA)</td>
                </tr>
            </table>
        </div>
    );
}
export default Wednesday
