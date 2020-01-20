import React from 'react';

import './Schedule.css';

function Schedule() {
  return (
    <div className="section">
          <h1><span>My College Schedule</span></h1>
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
                  <td>Sunday</td>
                  <td>F1</td>
                  <td>OBJECT ORIENTED PROGRAMMING<br/>(S.DAS)</td>
                  <td>COMPUTER NETWORK<br/>(MR)</td>
                  <td>RELATIONAL DATA BASE MANAGEMENT SYSTEMS<br/>(FBA)</td>
                  <td></td>
                  <td>COMPUTER GRAPHICS<br/>(AHM)</td>
                  <td colspan="2">OBJECT ORIENTED PROGRAMMING LAB<br/>(S.DAS)</td>
              </tr>
              <tr>
                  <td>Monday</td>
                  <td className="selected">F1</td>
                  <td className="selected">MICROPROCESSOR & PROGRAMMING<br/>(AI)</td>
                  <td className="selected" colspan="2">COMPUTER NETWORK LAB<br/>(MR)</td>
                  <td></td>
                  <td className="selected">COMPUTER ORIENTED PROGRAMMING<br/>(S.DAS)</td>
                  <td className="selected">COMPUTER NETWORK<br/>(MR)</td>
                  <td className="selected">DLS-II<br/>(ARM)(S1)</td>
              </tr>
              <tr>
                  <td>Tuesday</td>
                  <td>F1</td>
                  <td>COMPUTER ORIENTED PROGRAMMING<br/>(S.DAS)</td>
                  <td>COMPUTER NETWORK<br/>(MR)</td>
                  <td>RELATIONAL DATA BASE MANAGEMENT SYSTEMS<br/>(FBA)</td>
                  <td></td> 
                  <td>COMPUTER GRAPHICS<br/>(AHM)</td> 
                  <td colspan="2">PROFESSIONAL PRACTICE<br/>(SP)</td>
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

export default Schedule ;
