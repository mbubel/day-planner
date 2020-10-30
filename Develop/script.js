// Get the time working to show the correct date/time
$("#currentDay").text(moment().format("dddd, MMMM Do"));
// Array of the time between 9am-5pm
var time = [
  { div: $("#9am"), startTime: "09:00:00", endTime: "09:59:59" },
  { div: $("#10am"), startTime: "10:00:00", endTime: "10:59:59" },
  { div: $("#11am"), startTime: "11:00:00", endTime: "11:59:59" },
  { div: $("#12pm"), startTime: "12:00:00", endTime: "12:59:59" },
  { div: $("#1pm"), startTime: "13:00:00", endTime: "13:59:59" },
  { div: $("#2pm"), startTime: "14:00:00", endTime: "14:59:59" },
  { div: $("#3pm"), startTime: "15:00:00", endTime: "15:59:59" },
  { div: $("#4pm"), startTime: "16:00:00", endTime: "16:59:59" },
  { div: $("#5pm"), startTime: "17:00:00", endTime: "17:59:59" },
];
var format = "hh:mm:ss";
var currentTime = moment();
function compareTime() {
  // for loop to check the time
  for (i = 0; i < time.length; i++) {
    console.log(
      "start time: " + time[i].startTime + ", end time: " + time[i].endTime
    );
    before = moment(time[i].startTime, format);
    after = moment(time[i].endTime, format);
    // If the current time is within the timeblock, add ".present" to the coorresponding div class.
    if (currentTime.isBetween(before, after)) {
      console.log("is between");
      time[i].div.addClass("present");
    } // If the current time is after the timeblock, add ".future" to the coorresponding div class.
    else if (currentTime.isBefore(before)) {
      console.log("is before");
      time[i].div.addClass("future");
    } // If the current time is after the timeblock, add ".past" to the coorresponding div class.
    else if (currentTime.isAfter(before)) {
      console.log("is after");
      time[i].div.addClass("past");
    }
  }
}
compareTime();

// Local Storage
$("#saveButton1").click(function(){
  var NineAm = $("#9am").val();
  localStorage.setItem("9am notes", NineAm);
  
})

$("#saveButton2").click(function(){
  var TenAm = $("#10am").val();
   localStorage.setItem("10am notes", TenAm);
})

$("#saveButton3").click(function(){
  var TenAm = $("#11am").val();
   localStorage.setItem("11am notes", TenAm);
})

$("#saveButton4").click(function(){
  var TenAm = $("#12pm").val();
   localStorage.setItem("12pm notes", TenAm);
})
$("#saveButton5").click(function(){
  var TenAm = $("#1pm").val();
   localStorage.setItem("1pm notes", TenAm);
})
$("#saveButton6").click(function(){
  var TenAm = $("#2pm").val();
   localStorage.setItem("2pm notes", TenAm);
})
$("#saveButton7").click(function(){
  var TenAm = $("#3pm").val();
   localStorage.setItem("3pm notes", TenAm);
})
$("#saveButton8").click(function(){
  var TenAm = $("#4pm").val();
   localStorage.setItem("4pm notes", TenAm);
})
$("#saveButton9").click(function(){
  var TenAm = $("#5pm").val();
   localStorage.setItem("5pm notes", TenAm);
})


