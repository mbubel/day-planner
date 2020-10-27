// Get the time working to show the correct date/time
$("#currentDay").text(moment().format("dddd, MMMM Do"));
// Array of the divs 9am-5pm to iterate in the function compareTime
var timeBlocks = [
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
console.log(timeBlocks);
var format = "hh:mm:ss";
var curTime = moment();
function compareTime() {
  // compare the current time to an hour time block
  // for loop to iterate through my "timeblock" divs for each one check:
  for (i = 0; i < timeBlocks.length; i++) {
    console.log(
      "start time: " +
        timeBlocks[i].startTime +
        ", end time: " +
        timeBlocks[i].endTime
    );
    beforeTime = moment(timeBlocks[i].startTime, format);
    afterTime = moment(timeBlocks[i].endTime, format); // if the current time is within the time block update the div class to .present
    if (curTime.isBetween(beforeTime, afterTime)) {
      console.log("is between");
      timeBlocks[i].div.addClass("present");
    } // if the current time is after the time block update the div class to .future
    else if (curTime.isBefore(beforeTime)) {
      console.log("is before");
      timeBlocks[i].div.addClass("future");
    } // if the current time is before the time block update th div class to .past
    else if (curTime.isAfter(beforeTime)) {
      console.log("is after");
      timeBlocks[i].div.addClass("past");
    }
  }
}
compareTime();
