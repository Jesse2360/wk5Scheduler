var currentDate = moment().format("dddd, MMMM Do YYYY");
$("#currentDay").text(currentDate);

/* When I click a time block I can enter a new event and once i click the save button
my new event will save even if refresh the page. */
function nineOClock() {
    var textBox = document.getElementById("event9");
    var outTextBox = document.getElementById("event9");
    var saveBtn = document.getElementById("button9");
  
    saveBtn.addEventListener("click", newEvent);
  
    outTextBox.innerHTML = localStorage.getItem("content");
    textBox.value = localStorage.getItem("content");
  
    function newEvent() {
      localStorage.setItem("content", textBox.value);
  
      outTextBox.innerHTML = textBox.value;
    }
  }
  // calling the function
nineOClock()










