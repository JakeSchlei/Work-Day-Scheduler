const dateTime = $("#currentDay").text(
    moment().format("dddd, MMMM Do YYYY, h:mm a")
  );
  
  const localStorageArr = [
    "9am",
    "10am",
    "11am",
    "12pm",
    "1pm",
    "2pm",
    "3pm",
    "4pm",
    "5pm",
  ];
  let valueArr = [];
  let keyArr = [];
  let currentTime = moment().format("HH");
  let currentDate = moment().format("DD");
  
  if (localStorage.getItem("current-date")) {
    let temp = localStorage.getItem("current-date");
    if (currentDate > temp) {
      localStorage.clear();
    }
  }