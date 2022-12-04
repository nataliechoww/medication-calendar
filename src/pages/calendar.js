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
let input2 = "";
let input3 = "";
let input4 = "";
let days = [];
let v = "";



function send(){
    console.log('clicked')
    input1 = document.getElementById('medication').value;
    //input3 = document.getElementById('timetaken').value;
    input4 = document.getElementById('dosage').value;
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
                console.log(v);
                document.getElementById(v).innerHTML = input1 + ' ' + input4;
                console.log(document.getElementById(v).innerHTML);
                
            }
            else {
                days[i] = '0';
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
                    <a href="#"> Morning </a>
                    <a href="#"> Noon </a>
                    <a href="#"> Evening </a>
                    <a href="#"> Night </a>
                    <a href="#"> Whenever You Want </a>
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
            <th><img src={noon} id="noon"/>  </th>
                <td id='Monday'> {input1 + ' ' + input4} </td>
                <td id='Tuesday'> {input1 + ' ' + input4} </td>
                <td id='Wednesday'> {input1 + ' ' + input4} </td>
                <td id='Thursday'> {input1 + ' ' + input4} </td>
                <td id='Friday'> {input1 + ' ' + input4} </td>
                <td id='Saturday'> {input1 + ' ' + input4} </td>
                <td id='Sunday'> {input1 + ' ' + input4} </td>
              
                
            </tr>
            <tr>
            <th><img src={sunset} id="sunset"/>  </th>
                <td id='Monday'> {input1 + ' ' + input4} </td>
                <td id='Tuesday'> {input1 + ' ' + input4} </td>
                <td id='Wednesday'> {input1 + ' ' + input4} </td>
                <td id='Thursday'> {input1 + ' ' + input4} </td>
                <td id='Friday'> {input1 + ' ' + input4} </td>
                <td id='Saturday'> {input1 + ' ' + input4} </td>
                <td id='Sunday'> {input1 + ' ' + input4} </td>
              
            </tr>
            <tr>
            <th><img src={night} id="night"/> </th>
                <td id='Monday'> {input1 + ' ' + input4} </td>
                <td id='Tuesday'> {input1 + ' ' + input4} </td>
                <td id='Wednesday'> {input1 + ' ' + input4} </td>
                <td id='Thursday'> {input1 + ' ' + input4} </td>
                <td id='Friday'> {input1 + ' ' + input4} </td>
                <td id='Saturday'> {input1 + ' ' + input4} </td>
                <td id='Sunday'> {input1 + ' ' + input4} </td>
              
            </tr>
            <tr>
            <th><img src={wheneveryouwant} id="wheneveryouwant"/> </th>
                <td id='Monday'> {input1 + ' ' + input4} </td>
                <td id='Tuesday'> {input1 + ' ' + input4} </td>
                <td id='Wednesday'> {input1 + ' ' + input4} </td>
                <td id='Thursday'> {input1 + ' ' + input4} </td>
                <td id='Friday'> {input1 + ' ' + input4} </td>
                <td id='Saturday'> {input1 + ' ' + input4} </td>
                <td id='Sunday'> {input1 + ' ' + input4} </td>
              
            </tr>
            

          </table>
          </center>

        
        </>
        )   

}



export default Calendar

