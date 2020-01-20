import React from 'react';

function Monday() {
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
                  <td>Monday</td>
                  <td className="selected">F1</td>
                  <td className="selected">MICROPROCESSOR & PROGRAMMING<br/>(AI)</td>
                  <td className="selected" colspan="2">COMPUTER NETWORK LAB<br/>(MR)</td>
                  <td></td>
                  <td className="selected">OBJECT ORIENTED PROGRAMMING<br/>(S.DAS)</td>
                  <td className="selected">COMPUTER NETWORK<br/>(MR)</td>
                  <td className="selected">DLS-II<br/>(ARM)(S1)</td>
                </tr>
            </table>
        </div>
    );
}
export default Monday
