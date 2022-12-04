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
let monmorning = '';
let monnight = '';
let monnoon = '';
let monsunset = '';
let monwhenever = '';
let v = "";



function send(){
    console.log('clicked')
    input1 = document.getElementById('medication').value;
    input3 = document.getElementById('timetaken').value;
    input4 = document.getElementById('dosage').value;
    for(let i = 1; i<=7; i++){
        
        if(days[i] === true) {
                document.getElementsByClassName(days[i]).innerHTML = input1;
                days[i] = document.getElementsByClassName('button'+i).innerHTML;
                if(i===1) {
                    v='Monday';
                }
                if(i===2) {
                    v='Tuesday';
                }
                if(i===3) {
                    v='Wednesday ';
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
                document.getElementById(v).innerHTML = input1;
                
            }
            else {
                days[i] = '0';
            }
        }
        
    
    document.getElementById('Monday').innerHTML = input1 + ' ' + input4;
    document.getElementById('Tuesday').innerHTML = input1 + ' ' + input4;

         
     
    
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
            <button className = "button1" onClick={ days[1]=true }> Monday </button>
            <button className = "button2"> Tuesday </button>
            <button className = "button3"> Wednesday</button>
            <button className = "button4"> Thursday</button>
            <button className = "button5"> Friday</button>
            <button className = "button6"> Saturday</button>
            <button className = "button7"> Sunday</button>
            <p> Times taken: </p>
            <input type="text" id="timetaken"/>
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
                <td id='Monday'> {input1 + input4} </td>
                <td> {input1 + ' ' + input4} </td>
                <td>Memantine (10mg) </td>
                <td id='Tuesday'> {input1 + ' ' + input4} </td>
                <td></td>
                <td>Tylenol</td>
                <td></td>
            </tr>
            <tr>
            <th><img src={noon} id="noon"/>  </th>
                <td> {input1} </td>
                <td>Famotidine(20 mg)</td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                
            </tr>
            <tr>
            <th><img src={sunset} id="sunset"/>  </th>
                <td> {input1} </td>
                <td></td>
                <td></td>
                <td></td>
                <td>Famotidine (20 mg)</td>
                <td></td>
                <td></td>
            </tr>
            <tr>
            <th><img src={night} id="night"/> </th>
                <td> {input1} </td>
                <td></td>
                <td>Valium (5 mg)</td>
                <td> </td>
                <td></td>
                <td></td>
                <td> </td>
            </tr>
            <tr>
            <th><img src={wheneveryouwant} id="wheneveryouwant"/> </th>
                <td> {input1} </td>
                <td>Vitamin D3</td>
                <td>Vitamin D3</td>
                <td>Vitamin D3</td>
                <td>Vitamin D3 </td>
                <td>Vitamin D3</td>
                <td>Vitamin D3</td>
            </tr>
            

          </table>
          </center>

        
        </>
        )   

}



export default Calendar

