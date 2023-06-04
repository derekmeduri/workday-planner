var today = dayjs();
//on click event, function to get the value of time block and textarea
$(document).ready(function () {
  $(".saveBtn").on("click", function () {
    var textArea = $(this).siblings(".description").val();
    var time = $(this).parent().attr("id");

    //set time and text area to local storage
    console.log(textArea);
    console.log(time);
    localStorage.setItem(time, textArea);
  });
  //function to update hour and change the class of the time blocks accordingly.
  function hourUpdater() {
    var currentHour = dayjs().hour();
    console.log(currentHour);
    // loop over time blocks
    $(".time-block").each(function () {
      var timeBlock = $(this).attr("id");
      console.log(timeBlock);
      if (timeBlock < currentHour) {
        $(this).addClass("future");
      } else if (timeBlock === currentHour) {
        $(this).addClass("present");
      } else $(this).addClass("past");
    });
  }
  //check the hour every 15 seconds and update the hour accordingly
  hourUpdater();
  setInterval(hourUpdater, 15000);

  // load any saved data from localStorage for each time block 9a-5p

  //trying to create a for loop to run them
  //
  // for loop using i = 8 ("hour-" + i + .description)
  //$.each( var , function(index, value){

  //}
  //var localStorageContent = localStorage.getItem
  //

  $("#hour-9 .description").val(localStorage.getItem("hour-9"));
  $("#hour-10.description").val(localStorage.getItem("hour-10"));
  $("#hour-11 .description").val(localStorage.getItem("hour-11"));
  $("#hour-12 .description").val(localStorage.getItem("hour-12"));
  $("#hour-13 .description").val(localStorage.getItem("hour-13"));
  $("#hour-14 .description").val(localStorage.getItem("hour-14"));
  $("#hour-15 .description").val(localStorage.getItem("hour-15"));
  $("#hour-16 .description").val(localStorage.getItem("hour-16"));
  $("#hour-17 .description").val(localStorage.getItem("hour-17"));

  // display the current day
  $("#currentDay").text(today.format("dddd, MMMM D, YYYY"));
});
