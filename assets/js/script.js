var currentHour = moment().hour();
var timeSlots = $(".hour-content");
var allText = JSON.parse(localStorage.getItem("tasks")) || [];

var saveContent = function(text, time) {
    var task = {
        text,
        time,
    }
    allText.push(task);

    localStorage.setItem("tasks", JSON.stringify(allText));
  };
var loadContent = function(){
    for (var i = 0; i < allText.length; i++) {
        var textVal = $("#"+allText[i].time).val(allText[i].text);
        console.log(textVal);
    }
}
loadContent();
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


checkTime();
$(".save-btn").on("click", function() {
    // console.log(this);
    var content = $(this).siblings('.hour-content');

    var userInput = content.val();
    var sectionId = content.attr("id");
    // console.log(sectionId);
    // console.log(userInput);
    saveContent(userInput, sectionId);
});
// $(".hour-content").on("click", function() {
//     console.log(this);
//     var text = $(this)
//       .text()
//       .trim();
//     var textInput = $("<textarea>")
//       .val(text);
//     $(this).replaceWith(textInput);
//     // textInput.trigger("focus");
//   });
  
//   $(".hour-content").on("blur", function() {
//     var text = $(this)
//       .val()
//       .trim();
  
//     var status = $(this)
//       .closest(".list-group")
//       .attr("id")
//       .replace("list-","");
  
//     var index = $(this)
//       .closest(".list-group-item")
//       .index();
  
//     tasks[status][index].text = text;
//     saveTasks();
  
//     var taskP = $("<p>")
//       .addClass("m-1")
//       .text(text);
  
//     $(this).replaceWith(taskP);
//   });
// checkTime();
// setInterval(checkTime, 3600000);