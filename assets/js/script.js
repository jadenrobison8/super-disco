var textInputValues = ["", "", "", "", "", "", "", "", ""];
var hour = moment().hour();
if(localStorage.getItem('task')) {
    textInputValues = JSON.parse(localStorage.getItem('task'));
}

//function to retrieve current day
var currentDay = function() {
    //retrieve current day
    var now = moment().format("dddd, MMMM Do");
    //console.log(now)

    $("#currentDay").append(now);
};

//loop through textInputValues array to fill correct textareas
for(var i = 0; i < textInputValues.length; i++) {
    $("#" + i).append(textInputValues[i]);
    if (9 + i < hour) {
        $("#" + i).addClass('past');
    } else if (9 + i > hour) {
        $("#" + i).addClass('future');
    } else if (9 + i === hour) {
        $("#" + i).addClass('present');
    }
}

//save button is clicked
$(".saveBtn").click(function(event) {
    //grab id and turn into number
    let clickedId = parseInt(event.currentTarget.id[0])

    //get value of click textarea
    var textInput = $(this).siblings("textarea").val()

    //text input value into correct spot in text inputvaluesarrray
    textInputValues[clickedId] = textInput

    saveTasks();
});

//save tasks
var saveTasks = function() {
    localStorage.setItem("task", JSON.stringify(textInputValues));

    loadTasks();
};

var loadTasks = function() {
    tasks = JSON.parse(localStorage.getItem("task"));
}

currentDay();

