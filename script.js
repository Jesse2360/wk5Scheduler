var currentDate = moment().format("dddd, MMMM Do YYYY");
$("#currentDay").text(currentDate);

/* When I click a time block I can enter a new event and once i click the save button
my new event will save even if refresh the page. */
function nineOClock() {
    var textBox = document.getElementById("event9");
    var outTextBox = document.getElementById("event9");
    var saveBtn = document.getElementById("button9");
  
    saveBtn.addEventListener("click", newEvent);
  
    outTextBox.innerHTML = localStorage.getItem("content9");
    textBox.value = localStorage.getItem("content9");
  
    function newEvent() {
      localStorage.setItem("content9", textBox.value);
  
      outTextBox.innerHTML = textBox.value;
    }
  }
  // calling the function
nineOClock()

function tenOClock(){
    var textBox10 = document.getElementById("event10");
    var outTextBox10 = document.getElementById("event10");
    var saveBtn10 = document.getElementById("button10");

    saveBtn10.addEventListener("click", newEvent);

    outTextBox10.innerHTML = localStorage.getItem("content10");
    TextBox10.value = localStorage.getItem("content10");

    function newEvent(){
        localStorage.setItem("content10", textBox10.value);

        outTextBox10.innerHTML = textBox10.value;
    }
}
tenOClock()

function elevenOClock(){
    var textBox11 = getElementById("event11");
    var outTextBox11 = getElementById("event11");
    var saveBtn11 = getElementById("event11");

    saveBtn11.addEventListener("click", newEvent);

    outTextBox11.innerHTML = localStorage.getItem("content11");
    textBox11.value = localStorage.getItem("content11");

    function newEvent(){

        localStorage.setItem("content11", textBox11.value);
        outTextBox11.innerHTML = textBox11.value;
    }
}
elevenOClock()







