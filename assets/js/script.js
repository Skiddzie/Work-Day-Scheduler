var currentHour = moment().hour();
var timeSlots = $(".hour-content");
//creates an empty array if the object tasks has not been created yet
var allText = JSON.parse(localStorage.getItem("tasks")) || [];

//when called an object will be commited to local storage using the user inputted text
var saveContent = function(text, time) {
    var task = {
        text,
        time,
    }
    allText.push(task);

    localStorage.setItem("tasks", JSON.stringify(allText));
  };


// var loadContent = function(){
//     for (var i = 0; i < allText.length; i++) {
//         var textVal = $("#"+allText[i].time).val(allText[i].text);
//         console.log(textVal);
//     }
// }


//loops through every timeslot to check if it's before, during, or after the current time
var checkTime = function() {
    for (var i = 0; i < timeSlots.length; i++) {
        var slot = timeSlots[i];
        if ($(slot).attr("id") < currentHour){
            $(slot).css('backgroundColor','gray');
        }
        else if ($(slot).attr("id") == currentHour){
            $(slot).css('backgroundColor', 'red');
        }
        else {
            $(slot).css('backgroundColor', 'green');
        }

       }
};

//when the save button is clicked, it's respective sibling element selected and then called for with saveContent()
$(".save-btn").on("click", function() {
    // console.log(this);
    var content = $(this).siblings('.hour-content');

    var userInput = content.val();
    var sectionId = content.attr("id");

    saveContent(userInput, sectionId);
});

// loadContent();
//checks the time when the page is loaded
checkTime();
//checks the time every hour
setInterval(checkTime, 3600000)
