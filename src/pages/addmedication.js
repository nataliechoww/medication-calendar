import '../styles/addmedication.css'
import React from 'react'

let input1 = "";
let input2 = "";
let input3 = "";
let input4 = "";
let days = [];
function Addmedication() 
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
            <button className = "button1"> Monday </button>
            <button className = "button2"> Tuesday </button>
            <button className = "button3"> Wednesday</button>
            <button className = "button4"> Thursday</button>
            <button className = "button5"> Friday</button>
            <button className = "button6"> Saturday</button>
            <button className = "button7"> Sunday</button>
            <p> Time taken a day: </p>
            <input type="text" id="timetakenaday"/>
            <p> Times taken: </p>
            <input type="text" id="timetaken"/>
            <p> Dosage: </p>
            <input type="text" id="dosage"/>
            <br></br>
            <center> 
            <button className = "button" type="button" onClick={send}>Enter</button> 
            </center>
           
        </div>
        </>
    )
}

function send(){
    
    input1 = document.getElementById('medication').value;
    input2 = document.getElementById('timetakenaday').innerHTML;
    input3 = document.getElementById('timetaken').innerHTML;
    input4 = document.getElementById('dosage').innerHTML;
         for(let i = 1; i<=7; i++){
            if(document.getElementsByClassName('button'+i).onClick === true) {
                days[i] = i;
            }
            else {
                days[i] = 0;
            }
        }      
    
}

export {input1, input2, input3, input4, days};


export default Addmedication;