let mins = document.getElementById('mins');
let hours = document.getElementById('hours');
let days = document.getElementById('days');
// going to try addTheValue from https://www.tutorialspoint.com/javascript-sum-function-on-the-click-of-a-button for the sum

function addTheValueMin(secondValue) {
    mins.innerHTML = parseInt(mins.innerHTML) + parseInt(secondValue);
    if (mins.innerHTML >= 60) {
        mins.innerHTML = mins.innerHTML-60;
        hours.innerHTML++;
        if (hours.innerHTML >= 24) {
            hours.innerHTML = hours.innerHTML-24;
            days.innerHTML++;
        }
        
    }
}

function addTheValueHour(secondValue) {
    hours.innerHTML = parseInt(hours.innerHTML) + parseInt(secondValue);
    if (hours.innerHTML >= 24) {
        hours.innerHTML = hours.innerHTML-24;
        days.innerHTML++;
    }
}

function addTheValueDay(secondValue) {
    days.innerHTML = parseInt(days.innerHTML) + parseInt(secondValue);
}


function resetTime() { // function to set everything back to 0
    document.getElementById('mins').innerHTML = 0;
    document.getElementById('hours').innerHTML = 0;
    document.getElementById('days').innerHTML = 0;
}



// make the counter roll over to hours at 60 mins and days at 24 hours
// after counter roll over, make reset button optionally save

