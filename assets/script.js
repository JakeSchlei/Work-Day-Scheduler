// shows date and time at the top of the page

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

  
  localStorage.setItem("current-date", currentDate);
  // when the save button is clicked 
  $(".saveBtn").on("click", function (event) {
    let textInput = $(this).siblings("textarea").val();
    let inputId = $(this).attr("id");
    localStorage.setItem(inputId, textInput);
  });
  // storing the input in local storage
  function storeInfo() {
    for (let i = 0; i < localStorageArr.length; i++) {
      if (localStorage.getItem(localStorageArr[i])) {
        keyArr.push(localStorageArr[i]);
        valueArr.push(localStorage.getItem(localStorageArr[i]));
        console.log(localStorage.getItem(localStorageArr[i]));
      }
    }
  }
  
  function showInfo() {
    storeInfo();
    if (valueArr) {
      for (let i = 0; i < keyArr.length; i++) {
        $("#" + keyArr[i])
          .siblings("textarea")
          .val(valueArr[i]);
      }
    }
  }
  showInfo();

  // create a function to check date and label properly
