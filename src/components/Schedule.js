import React, {Component} from 'react';
import Fschedule from './Fschedule';
import Sunday from './Sunday';
import Monday from './Monday';
import Tuesday from './Tuesday';
import Wednesday from './Wednesday';
import Thursday from './Thursday';
import Friday from './Friday';
import Saturday from './Saturday';

import './Schedule.css';

class Schedule extends Component {

    constructor() {
        super()
        this.state = {
            fullView: false
        }

    }
        handleClick = () => {
        this.setState(prevState => {
            return {
                fullView: !prevState.fullView
            }
        })
    }


    render() {
        const date = new Date()
        const day = date.getDay()
        const hours = date.getHours()
        const minute = date.getMinutes()


        const now = date.getHours() * 60 + date.getMinutes();
        const ten_half = 10 * 60 + 30;
        const eleven_half =  11 * 60 + 30;
        const twelve_half = 12 * 60 + 30;
        const thirteen_half = 13 * 60 + 30;
        const fourteen = 14 * 60 ;
        const fifteen = 15 * 60 ;
        const sixteen = 16 * 60 ;
        const seventeen = 17 * 60 ;

        let timeOfDay
        let am_pm
        let sday
        let sclass
        
        if (hours < 12) {
          timeOfDay = "Morning"
        } else if (hours >= 12 && hours < 17) {
          timeOfDay = "Afternoon"
        } else {
          timeOfDay = "Night"
        }

        
        if (hours >= 0 && hours < 12 ) {
            am_pm = "AM"
        }
        else {
            am_pm = "PM"
        }

        let hr 
        if (hours === 0) {
            hr = "12"
        }
        else if (hours === 13 || hours === 1 ) {
            hr = "01"
        }
        else if (hours === 14 || hours === 2 ) {
            hr = "02"
        }
        else if (hours === 15 || hours === 3 ) {
            hr = "03"
        }
        else if (hours === 16 || hours === 4 ) {
            hr = "04"
        }
        else if (hours === 17 || hours === 5 ) {
            hr = "05"
        }
        else if (hours === 18 || hours === 6 ) {
            hr = "06"
        }
        else if (hours === 19 || hours === 7 ) {
            hr = "07"
        }
        else if (hours === 20 || hours === 8 ) {
            hr = "08"
        }
        else if (hours === 21 || hours === 9 ) {
            hr = "09"
        }
        else if (hours === 22 ) {
            hr = "10"
        }
        else if (hours === 23 ) {
            hr = "11"
        }
        else {
            hr = hours
        }

        let min 
        if (minute === 0) {
            min = "00"
        }
        else {
            min = minute
        }

        if (day === 0) {
            sday = <Sunday />
            if ( ten_half <= now && now < eleven_half ) {
                sclass = "Discrete Maths (Satyen Mondal)"
            }
            else if (eleven_half <= now && now < twelve_half) {
                sclass = "Electronics Device and Circuits (SK)"
            }
            else if (twelve_half <= now && now < thirteen_half) {
                sclass = "C Programming (S Das)"
            }
            else if (thirteen_half <= now && now < fourteen) {
                sclass = "Break Time"
            }
            else if (fourteen <= now && now <= seventeen) {
                sclass = "Data Structure Lab (AHM,S Pandey)"
            }
            else {
                sclass = "No class available right now !"
            }
        }
        else if (day === 1) {
            sday = <Monday />
            if ( ten_half <= now && now < eleven_half ) {
                sclass = "Computer Organization and Architechture (MGR)"
            }
            else if (eleven_half <= now && now < twelve_half) {
                sclass = "Data Structure (AHM)"
            }
            else if (twelve_half <= now && now < thirteen_half) {
                sclass = "C Programming (S Das)"
            }
            else if (thirteen_half <= now && now < fourteen) {
                sclass = "Break Time"
            }
            else if (fourteen <= now && now <= seventeen) {
                sclass = "C Programming Lab (S Das)"
            }
            else {
                sclass = "No class available right now !"
            }
        }
        else if (day === 2) {
            sday = <Tuesday />
            if ( ten_half <= now && now < eleven_half ) {
                sclass = "C Programming (S Das)"
            }
            else if (eleven_half <= now && now < twelve_half) {
                sclass = "Digital Logic Design"
            }
            else if (twelve_half <= now && now < thirteen_half) {
                sclass = "Discrete Maths (Satyen Mondal)"
            }
            else if (thirteen_half <= now && now < fourteen) {
                sclass = "Break Time"
            }
            else if (fourteen <= now && now < fifteen) {
                sclass = "Electronics Device and Circuits (SK)"
            }
            else if (fourteen <= now && now <= seventeen) {
                sclass = "Electronics Device and Circuits Lab (SK)"
            }
            else {
                sclass = "No class available right now !"
            }
        }
        else if (day === 3) {
            sday = <Wednesday />
            if ( ten_half <= now && now < eleven_half ) {
                sclass = "Data Structure (AHM)"
            }
            else if (eleven_half <= now && now < thirteen_half) {
                sclass = "Professional Practise I (S Pandey)"
            }
            else if (thirteen_half <= now && now <= fourteen) {
                sclass = "Break Time"
            }
            else if (fourteen <= now && now < fifteen) {
                sclass = "Computer Organization and Architechture (MGR)"
            }
            else if (fifteen <= now && now < sixteen) {
                sclass = "Digital Logic Design (S Das)"
            }
            else if (sixteen <= now && now <= seventeen) {
                sclass = "Electronics Device and Circuits (SK)"
            }
            else {
                sclass = "No class available right now !"
            }
        }
        else if (day === 4) {
            sday = <Thursday />
            if ( ten_half <= now && now < eleven_half ) {
                sclass = "Data Structure (AHM)"
            }
            else if (eleven_half <= now && now < twelve_half) {
                sclass = "Digital Logic Design "
            }
            else if (twelve_half <= now && now < thirteen_half) {
                sclass = "Discrete Math (S Mondal)"
            }
            else if (thirteen_half <= now && now < fourteen) {
                sclass = "Break Time"
            }
            else if (fourteen <= now && now < fifteen) {
                sclass = "Computer Organization and Architechture (MGR)"
            }
            else if (fifteen <= now && now <= seventeen) {
                sclass = "Digital Logic Design Lab (S Das)"
            }
            else {
                sclass = "No class available right now !"
            }
        }
        else if (day === 5) {
            sday = <Friday />
            sclass = "No class available right now !"
        }
        else {
            sday = <Saturday />
            sclass = "No class available right now !"
        }

        let value = this.state.fullView
        let sed 
        if (value === true) {
            sed = <Fschedule />
        }


        return (

            <div className="section">
                <h1><span>My College Schedule</span></h1>
                <h1>Time: {hr}:{min} {am_pm} ,  {timeOfDay} </h1>
                <h1>Now : {sclass}</h1>
                {sday} <br/>
                <button onClick={this.handleClick}>View Full Schedule</button>
                {sed}
                
            </div>

        );
    }
=======
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
                  <td>DISCRETE MATH<br/>(S.MONDAL)</td>
                  <td></td> 
                  <td>ELECTRONICS DEVICE & CKT (SK)</td> 
                  <td colspan="2">ELECTRONICS DEVICE & CKT LAB (SK)</td>
              </tr>
              <tr>
                  <td>Wednesday</td>
                  <td className="selected">G4</td>
                  <td className="selected">DATA STRUCTURE<br/>(AHM)</td>
                  <td className="selected" colspan="2">PROFESSIONAL PRACTICE-I<br/>(S.PANDEY)</td>
                  <td></td>
                  <td className="selected">COMPUTER ORG. & ARCHITECTURE<br/>(MGR)</td>
                  <td className="selected">DIGITAL LOGIC DESIGN (S DAS)</td> 
                  <td className="selected">ELECTRONICS DEVICE & CKT (SK)</td>
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

  );

}

export default Schedule ;
