var today = dayjs();

// TODO: Add a listener for click events on the save button. This code should
// use the id in the containing time-block as a key to save the user input in
// local storage.
$(document).ready(function () {
  $(".saveBtn").on("click", function () {
    var textArea = $(this).siblings(".description").val();
    var time = $(this).parent().attr("id");
    // Might not need to stringify/create object. should be able to get info by row.
    //localStorage.setItem("textArea", JSON.stringify(textArea));

    console.log(textArea);
    console.log(time);
    localStorage.setItem(time, textArea);
    // get nearby values
  });
  // function? How can DOM traversal be used to get the "hour-x" id of the
  // time-block containing the button that was clicked? How might the id be
  // useful when saving the description in local storage?
  function hourUpdater() {
    var currentHour = dayjs().hour();
    console.log(currentHour);
    // loop over time blocks
    $(".time-block").each(function () {
      var timeBlock = $(".time-block");

      if (timeBlock < currentHour) {
        $(".time-block").removeClass(".present .future");
      } else if (timeBlock === currentHour) {
        $(".time-block").removeClass(".past .future");
      } else {
        $(".time-block").removeClass(".present .past");
      }
    });
  }
  // TODO: Add code to apply the past, present, or future class to each time
  // block by comparing the id to the current hour. HINTS: How can the id
  // attribute of each time-block be used to conditionally add or remove the
  // past, present, and future classes? How can Day.js be used to get the
  // current hour in 24-hour time?
  hourUpdater();
  setInterval(hourUpdater, 15000);

  // TODO: Add code to get any user input that was saved in localStorage and set
  // the values of the corresponding textarea elements. HINT: How can the id
  // attribute of each time-block be used to do this?
  //

  // load any saved data from localStorage for each time block 9a-5p//
  // for loop using i = 8 ("hour-" + i + .description)
  $(".decription").each;

  $("#hour-9 .description").val(localStorage.getItem("hour-9"));
  $("#hour-10.description").val(localStorage.getItem("hour-10"));
  $("#hour-11 .description").val(localStorage.getItem("hour-11"));
  $("#hour-12 .description").val(localStorage.getItem("hour-12"));
  $("#hour-13 .description").val(localStorage.getItem("hour-13"));
  $("#hour-14 .description").val(localStorage.getItem("hour-14"));
  $("#hour-15 .description").val(localStorage.getItem("hour-15"));
  $("#hour-16 .description").val(localStorage.getItem("hour-16"));
  $("#hour-17 .description").val(localStorage.getItem("hour-17"));

  // displays current day on page
  $("#currentDay").text(today.format("dddd, MMMM D, YYYY"));
});
