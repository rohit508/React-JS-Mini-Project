import React from 'react';
import ReactDOM from 'react-dom';
import "./index.css";
const cssstyle  = { };
let currentDate = new Date();
currentDate = currentDate.getHours();

let getting = " ";


if(currentDate >= 1 && currentDate <12){
    getting = ' Good Morning';
    cssstyle.color =  'green';

}else if(currentDate >=12 && currentDate <19 ){
    getting = " Good Afternoon"; 
    cssstyle.color =  'Orange';

}else {
    getting = ' Good Night';
    cssstyle.color =  'Black';

}

    ReactDOM.render(
        <>
        <div>
            <h1>Hello sir , <span style = {cssstyle}>{getting}</span> </h1>
        </div>
        
        
        </>,
        document.getElementById('root')
    );