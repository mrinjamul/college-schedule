import React, {Component} from 'react';
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

        }
    }
    

    render() {
        const date = new Date("September 08, 2019 12:00:00")
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




        return (

            <div className="section">
                <h1><span>My College Schedule</span></h1>
                <h1>Time: {hours}:{minute} {am_pm} ,  {timeOfDay} </h1>
                <h1>Now : {sclass}</h1>
                {sday}
                
            </div>

        );
    }
}

export default Schedule ;
