import React from 'react'
import '../styles/calendar.css'
import nightimage from '../images/3037561.png'
import night from '../images/nightimg.jpg'
import noon from '../images/noon.jpg'
import sunrise from '../images/sunrise.jpg'
import sunset from '../images/sunset.jpg'
import {input1, input2, input3, input4} from '../pages/addmedication.js'
function Calendar()
{
    return (
        <>
        
        <div className="title">
            <h1> Calendar </h1>
        </div>
        <center> 
          <table>
            <tr>
                <th> {input1}</th>
                <th>Monday</th>
                <th>Tuesday</th>
                <th>Wednesday</th>
                <th>Thursday</th>
                <th>Friday</th>
                <th>Saturday</th>
                <th>Sunday</th>
            </tr>
            <tr>
            <th><img src={sunrise} id="sunrise"/></th>
                <td>med2</td>
                <td>med3</td>
                <td>med1</td>
                <td>med2</td>
                <td>med3</td>
                <td>med3</td>
                <td>med4</td>
            </tr>
            <tr>
            <th><img src={noon} id="noon"/></th>
                <td>med2</td>
                <td>med3</td>
                <td>med1</td>
                <td>med2</td>
                <td>med3</td>
                <td>med3</td>
                <td>med4</td>
            </tr>
            <tr>
            <th><img src={sunset} id="sunset"/></th>
                <td>med2</td>
                <td>med3</td>
                <td>med1</td>
                <td>med2</td>
                <td>med3</td>
                <td>med3</td>
                <td>med4</td>
            </tr>
            <tr>
            <th><img src={night} id="nightimg"/></th>
                <td>med2</td>
                <td>med3</td>
                <td>med1</td>
                <td>med2</td>
                <td>med3</td>
                <td>med3</td>
                <td>med4</td>
            </tr>
            <tr>
           
                <td>med2</td>
                <td>med3</td>
                <td>med1</td>
                <td>med2</td>
                <td>med3</td>
                <td>med3</td>
                <td>med4</td>
            </tr>
            

          </table>
          </center>

        
        </>
        )   

}
export default Calendar

