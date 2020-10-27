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
document.getElementById("saveButton").addEventListener(
  "click",
  function () {
    var user = document.getElementById("9am").value;
    //localStorage["user"] = user ;
    localStorage.setItem("", user);
  },
  false
);
