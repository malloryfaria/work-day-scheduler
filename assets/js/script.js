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

// Function to save the tasks to localStorage

function saveTasks (){
    var hourToUpdate = $(this).parent().attr("data-hour");
    var itemToAdd = (($(this).parent()).children("textarea")).val(); 
    for (var j = 0; j < tasks.length; j++){
      if (tasks[j].hour == hourToUpdate){
       
        tasks[j].text = itemToAdd;
      }
    }
    localStorage.setItem("tasks", JSON.stringify(tasks));
    console.log("Tasks were saved");
    renderPlanner();
  };

// Function to format the row colours depending on the current time

function formatRows(){
    timeRow.each(function(){
    var thisRow = $(this);
    var thisRowHr = parseInt(thisRow.attr("data-hour"));
  
    // Set to "Present" if current row hour is equal to this hour
    if (thisRowHr == currentHour) {
      thisRow.addClass("present").removeClass("past future");
    }

    // Set to "Past" if current row hour is less than this hour
    if (thisRowHr < currentHour) {
      thisRow.addClass("past").removeClass("present future");
    }

    // Set to "Future" if current row hour is greater than this hour
    if (thisRowHr > currentHour) {
      thisRow.addClass("future").removeClass("past present");
    }
  });
  };

// Function to load the saved tasks into the planner if they are saved to localStorage

function renderPlanner() {

tasks = localStorage.getItem("tasks");
tasks = JSON.parse(tasks);
    
for (var i = 0; i < tasks.length; i++){
    var itemHour = tasks[i].hour;
    var itemText = tasks[i].text; 
    
    $("[data-hour=" + itemHour + "]").children("textarea").val(itemText);
}
};

// What will happen on the page load (when the document has loaded)

$(document).ready(function(){
formatRows();

if(!localStorage.getItem("tasks")){
// Run the loadTasks function if there are no tasks in storage so we don't pull localStorage
loadTasks();
} 
// Update the date & time in the header
$("#currentDay").text(currentDate);

// Render planner from localStorage
renderPlanner();

// When a save button is clicked, save the task to localStorage
container.on("click", "button", saveTasks, console.log("Tasks were saved"));

});

// Function to clear out all the tasks in the planner
$("#clear-planner").on("click", function() {
    localStorage.clear();
    tasks = "";
    location.reload();
    console.log("Local storage was cleared");
});

// Function to refresh the page by clicking the refresh button

$("#refresh").on("click", function() {
    location.reload();
});


