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
                  <td className="selected">G4</td>
                  <td className="selected">COMPUTER ORG. & ARCHITECTURE<br/>(MGR)</td>
                  <td className="selected">DATA STRUCTURE<br/>(AHM)</td>
                  <td className="selected">C PROGRAMMING<br/>(S.DAS)</td>
                  <td></td>
                  <td className="selected" colspan="3">C PROGRAMMING LAB<br/>(S.DAS)</td>
                </tr>
            </table>
        </div>
    );
}
export default Monday
