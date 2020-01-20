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
        
        if (5 < hours && hours < 12) {
          timeOfDay = "Morning"
        } 
        else if (hours >= 12 && hours < 17) {
          timeOfDay = "Afternoon"
        } 
        else if (hours > 17 && hours < 20) {
            timeOfDay = "Evening"
        }
        else if (hours > 0 && hours < 2) {
            timeOfDay = "Mid Night"
        }
        else if (hours > 4 && hours < 5) {
            timeOfDay = "Dawn"
        }
        else {
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
        else if (minute === 1) {
            min = "01"
        }
        else if (minute === 2) {
            min = "02"
        }
        else if (minute === 3) {
            min = "03"
        }
        else if (minute === 4) {
            min = "04"
        }
        else if (minute === 5) {
            min = "05"
        }
        else if (minute === 6) {
            min = "06"
        }
        else if (minute === 7) {
            min = "07"
        }
        else if (minute === 8) {
            min = "08"
        }
        else if (minute === 9) {
            min = "09"
        }
        else {
            min = minute
        }

        if (day === 0) {
            sday = <Sunday />
            if ( ten_half <= now && now < eleven_half ) {
                sclass = "Object Oriented Programming (S Das)"
            }
            else if (eleven_half <= now && now < twelve_half) {
                sclass = "Computer Network (MR)"
            }
            else if (twelve_half <= now && now < thirteen_half) {
                sclass = "Relational Data Base Management Systems (FBA)"
            }
            else if (thirteen_half <= now && now < fourteen) {
                sclass = "Break Time"
            }
            else if (fourteen <= now && now < fifteen) {
                sclass = "Computer Graphics (AHM)"
            }
            else if (fifteen <= now && now <= seventeen) {
                sclass = "Object Oriented Programming Lab (S Das)"
            }
            else {
                sclass = "No class available right now !"
            }
        }
        else if (day === 1) {
            sday = <Monday />
            if ( ten_half <= now && now < eleven_half ) {
                sclass = "Microprocessor & Programing (AI)"
            }
            else if (eleven_half <= now && now < thirteen_half) {
                sclass = "Computer Network Lab (MR)"
            }
            else if (thirteen_half <= now && now < fourteen) {
                sclass = "Break Time"
            }
            else if (fourteen <= now && now <= fifteen) {
                sclass = "Object Oriented Programming (S Das)"
            }
            else if (fifteen <= now && now <= sixteen) {
                sclass = "Computer Network (MR)"
            }
            else if (sixteen <= now && now <= seventeen) {
                sclass = "DLS-II (ARM)(S1)"
            }
            else {
                sclass = "No class available right now !"
            }
        }
        else if (day === 2) {
            sday = <Tuesday />
            if ( ten_half <= now && now < eleven_half ) {
                sclass = "Object Oriented Programming (S Das)"
            }
            else if (eleven_half <= now && now < twelve_half) {
                sclass = "Computer Network (MR)"
            }
            else if (twelve_half <= now && now < thirteen_half) {
                sclass = "Relational Data Base Management Systems (FBA)"
            }
            else if (thirteen_half <= now && now < fourteen) {
                sclass = "Break Time"
            }
            else if (fourteen <= now && now < fifteen) {
                sclass = "Computer Graphics (AHM)"
            }
            else if (fifteen <= now && now <= seventeen) {
                sclass = "Proffessional Practice-II (SP)"
            }
            else {
                sclass = "No class available right now !"
            }
        }
        else if (day === 3) {
            sday = <Wednesday />
            if ( ten_half <= now && now < twelve_half ) {
                sclass = "Microprocessor & Programming Lab (AI)"
            }
            else if (twelve_half <= now && now < thirteen_half) {
                sclass = "Computer Graphics (AHM)(S1)"
            }
            else if (thirteen_half <= now && now <= fourteen) {
                sclass = "Break Time"
            }
            else if (fourteen <= now && now < fifteen) {
                sclass = "Microprocessor & Programming (AI)"
            }
            else if (fifteen <= now && now < sixteen) {
                sclass = "DLS-II (ARM)(S1)"
            }
            else if (sixteen <= now && now <= seventeen) {
                sclass = "Relational Data Base Management Systems (FBA)"
            }
            else {
                sclass = "No class available right now !"
            }
        }
        else if (day === 4) {
            sday = <Thursday />
            if ( ten_half <= now && now < eleven_half ) {
                sclass = "Microprocessor & Programming (AI)"
            }
            else if (eleven_half <= now && now < thirteen_half) {
                sclass = "Computer Graphics Lab (AHM)"
            }
            else if (thirteen_half <= now && now < fourteen) {
                sclass = "Break Time"
            }
            else if (fourteen <= now && now < seventeen) {
                sclass = "Relational Data Base Management Systems Lab (FBA)"
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
    }

export default Schedule ;
