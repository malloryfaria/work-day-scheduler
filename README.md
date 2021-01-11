# Work Day Scheduler

## Description 
A simple work day scheduler/virtual daily planner.

## User Story
AS AN employee with a busy schedule
I WANT to add important events to a daily planner
SO THAT I can manage my time effectively

## Acceptance Criteria
GIVEN I am using a daily planner to create a schedule
WHEN I open the planner
THEN the current day is displayed at the top of the calendar
WHEN I scroll down
THEN I am presented with time blocks for standard business hours
WHEN I view the time blocks for that day
THEN each time block is color-coded to indicate whether it is in the past, present, or future
WHEN I click into a time block
THEN I can enter an event
WHEN I click the save button for that time block
THEN the text for that event is saved in local storage
WHEN I refresh the page
THEN the saved events persist

## Build status

Live

## Deployed application
https://malloryfaria.github.io/work-day-scheduler/
 
## Screenshots

![Work Day Scheduler Screenshot](/assets/images/screenshot.jpg?raw=true "Work Day Scheduler Screenshot")

## Tech/framework used

<b>Built with</b>
- HTML
- JavaScript
- CSS
- JQuery
- BootStrap
- Moment.js


## Code Example

```
// Uses Moment to get current date and current hour
var currentDate = moment().format("dddd MMM Do YYYY, h:mm a");
var currentHour = moment().format("H");

// Declare variables
var timeRow = $(".time-row");
var container = $(".container");

// Create an array to hold the tasks for saving to localStorage
var tasks = [];

// Function to load the page initially

function loadTasks() {

    timeRow.each(function(){
        var thisRow = $(this);
        var thisRowHr = parseInt(thisRow.attr("data-hour"));
    
        var tasksObj = {
          hour: thisRowHr,
          text: "",
        }
        tasks.push(tasksObj);
      });
      // Loop all rows and save to the local storage
      localStorage.setItem("tasks", JSON.stringify(tasks)); 

};

```


## License
None

© [Mallory](https://github.com/malloryfaria)


