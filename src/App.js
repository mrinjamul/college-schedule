import React from 'react';

import './App.css';


function App() {
  return (
    <div className="App">
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
                    <td>G4</td>
                    <td>DISCRETE MATH<br/>(S.MONDAL)</td>
                    <td>ELECTRONICS DEVICE & CKT</td>
                    <td>C PROGRAMMING<br/>(S.DAS)</td>
                    <td></td>
                    <td colspan="3">DATA STRUCTURE LAB<br/>(AHM,S.PANDEY)</td>
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
                <tr>
                    <td>Tuesday</td>
                    <td>G4</td>
                    <td>C PROGRAMMING<br/>(S.DAS)</td>
                    <td>DIGITAL LOGIC DESIGN</td>
                    <td>ELECTRONICS DEVICE & CKT</td>
                    <td></td>
                    <td>DISCRETE MATH<br/>(S.MONDAL)</td>
                    <td colspan="2">ELECTRONICS DEVICE & CKT LAB</td>
                </tr>
                <tr>
                    <td>Wednesday</td>
                    <td className="selected">G4</td>
                    <td className="selected">DATA STRUCTURE<br/>(AHM)</td>
                    <td className="selected" colspan="2">PROFESSIONAL PRACTICE-I<br/>(S.PANDEY)</td>
                    <td></td>
                    <td className="selected">COMPUTER ORG. & ARCHITECTURE<br/>(MGR)</td>
                    <td className="selected">ELECTRONICS DEVICE & CKT</td>
                    <td className="selected">DIGITAL LOGIC DESIGN</td>
                </tr>
                <tr>
                    <td>Thursday</td>
                    <td>G4</td>
                    <td>DATA STRUCTURE<br/>(AHM)</td>
                    <td>DIGITAL LOGIC DESIGN</td>
                    <td>DISCRETE MATH<br/>(S.MONDAL)</td>
                    <td></td>
                    <td>COMPUTER ORG. & ARCHITECTURE<br/>(MGR)</td>
                    <td colspan="2">DIGITAL LOGIC DESIGN LAB</td>
                </tr>
            </table>
        </div>

    </div>
  );
}

export default App;
