import React from 'react'
import '../styles/calendar.css'
import nightimage from '../images/3037561.png'
import night from '../images/night.png'
import noon from '../images/noon.png'
import sunrise from '../images/sunrise.png'
import sunset from '../images/sunset.png'
import wheneveryouwant from '../images/wheneveryouwant.png'
import { useState } from 'react'

var input1 = "";
let input4 = "";
let days = [];
let v = "";
let times = [];
let k = "";



function send(){

    input1 = document.getElementById('medication').value;
    input4 = document.getElementById('dosage').value;

    for(let i = 1; i<=5; i++) {
        if(times[i] === true) {
            if(i===1) {
                k='Morning'
            }
            if(i===2) {
                k='Noon'
            }
            if(i===3) {
                k='Evening'
            }
            if(i===4) {
                k='Night'
            }
            if(i===5) {
                k='Whenever'
            }
        }
    }
    
    for(let i = 1; i<=7; i++){
        
        if(days[i] === true) {
                if(i===1) {
                    v='Monday';
                }
                if(i===2) {
                    v='Tuesday';
                }
                if(i===3) {
                    v='Wednesday';
                }
                if(i===4) {
                    v='Thursday';
                }
                if(i===5) {
                    v='Friday';
                }
                if(i===6) {
                    v='Saturday';
                }
                if(i===7) {
                    v='Sunday';
                }
                document.getElementById(v+k).innerHTML = input1 + ' ' + input4;
                console.log(document.getElementById(v).innerHTML);
            }
        }

}

function setdays1() {
    days[1] = true;
}
function setdays2() {
    days[2] = true;
}
function setdays3() {
    days[3] = true;
}
function setdays4() {
    days[4] = true;
}
function setdays5() {
    days[5] = true;
}
function setdays6() {
    days[6] = true;
}
function setdays7() {
    days[7] = true;
}

function dropdown1() {
    times[1] = true;
}
function dropdown2() {
    times[2] = true;
}
function dropdown3() {
    times[3] = true;
}
function dropdown4() {
    times[4] = true;
}
function dropdown5() {
    times[5] = true;
}
function Calendar()
{
    return (
        <>
        <div className = "medicationtitle">
            <h1> Medication Input </h1>
        </div>
        <div className= "medicationinput">
            
            <h1> Add your medication </h1> 
            <p> Name: </p>
            <input type="text" id="medication"/>
            <p> Days taken: </p>
            <button className = "button1" onClick={setdays1}> Monday </button>
            <button className = "button2" onClick={setdays2}> Tuesday </button>
            <button className = "button3" onClick={setdays3}> Wednesday</button>
            <button className = "button4" onClick={setdays4}> Thursday</button>
            <button className = "button5" onClick={setdays5}> Friday</button>
            <button className = "button6" onClick={setdays6}> Saturday</button>
            <button className = "button7" onClick={setdays7}> Sunday</button>
            
            <p> Times Taken: </p>
            <div class="dropdown">
                <button class="dropbtn">Times Taken</button>
                <div class="dropdown-content">
                    <a href="#" onClick={dropdown1}> Morning </a>
                    <a href="#" onClick={dropdown2}> Noon </a>
                    <a href="#" onClick={dropdown3}> Evening </a>
                    <a href="#" onClick={dropdown4}> Night </a>
                    <a href="#" onClick={dropdown5}> Whenever You Want </a>
                </div>

            </div>
            <p> Dosage: </p>
            <input type="text" id="dosage"/>
            <br></br>
            <center> 
            <button className = "button" type="button" onClick={send}>Enter</button> 
            </center>
           
        </div>

        
        <div className="title">
            <h1> Calendar </h1>
        </div>
        <center> 
          <table>
            <tr>

                <th>Time</th>
                <th>Monday</th>
                <th>Tuesday</th>
                <th>Wednesday</th>
                <th>Thursday</th>
                <th>Friday</th>
                <th>Saturday</th>
                <th>Sunday</th>
            </tr>
            <tr>
            <th><img src={sunrise} id="sunrise" />  </th>
                <td id='Monday'> {input1 + ' ' + input4} </td>
                <td id='Tuesday'> {input1 + ' ' + input4} </td>
                <td id='Wednesday'> {input1 + ' ' + input4} </td>
                <td id='Thursday'> {input1 + ' ' + input4} </td>
                <td id='Friday'> {input1 + ' ' + input4} </td>
                <td id='Saturday'> {input1 + ' ' + input4} </td>
                <td id='Sunday'> {input1 + ' ' + input4} </td>
              
            </tr>
            <tr>
            <th id><img src={noon} id="noon"/>  </th>
                <td id='MondayNoon'> {input1 + ' ' + input4} </td>
                <td id='TuesdayNoon'> {input1 + ' ' + input4} </td>
                <td id='WednesdayNoon'> {input1 + ' ' + input4} </td>
                <td id='ThursdayNoon'> {input1 + ' ' + input4} </td>
                <td id='FridayNoon'> {input1 + ' ' + input4} </td>
                <td id='SaturdayNoon'> {input1 + ' ' + input4} </td>
                <td id='SundayNoon'> {input1 + ' ' + input4} </td>
              
                
            </tr>
            <tr>
            <th><img src={sunset} id="sunset"/>  </th>
                <td id='MondayEvening'> {input1 + ' ' + input4} </td>
                <td id='TuesdayEvening'> {input1 + ' ' + input4} </td>
                <td id='WednesdayEvening'> {input1 + ' ' + input4} </td>
                <td id='ThursdayEvening'> {input1 + ' ' + input4} </td>
                <td id='FridayEvening'> {input1 + ' ' + input4} </td>
                <td id='SaturdayEvening'> {input1 + ' ' + input4} </td>
                <td id='SundayEvening'> {input1 + ' ' + input4} </td>
              
            </tr>
            <tr>
            <th><img src={night} id="night"/> </th>
                <td id='MondayNight'> {input1 + ' ' + input4} </td>
                <td id='TuesdayNight'> {input1 + ' ' + input4} </td>
                <td id='WednesdayNight'> {input1 + ' ' + input4} </td>
                <td id='ThursdayNight'> {input1 + ' ' + input4} </td>
                <td id='FridayNight'> {input1 + ' ' + input4} </td>
                <td id='SaturdayNight'> {input1 + ' ' + input4} </td>
                <td id='SundayNight'> {input1 + ' ' + input4} </td>
              
            </tr>
            <tr>
            <th><img src={wheneveryouwant} id="wheneveryouwant"/> </th>
                <td id='MondayWhenever'> {input1 + ' ' + input4} </td>
                <td id='TuesdayWhenever'> {input1 + ' ' + input4} </td>
                <td id='WednesdayWhenever'> {input1 + ' ' + input4} </td>
                <td id='ThursdayWhenever'> {input1 + ' ' + input4} </td>
                <td id='FridayWhenever'> {input1 + ' ' + input4} </td>
                <td id='SaturdayWhenever'> {input1 + ' ' + input4} </td>
                <td id='SundayWhenever'> {input1 + ' ' + input4} </td>
              
            </tr>
            

          </table>
          </center>

        
        </>
        )   

}



export default Calendar

