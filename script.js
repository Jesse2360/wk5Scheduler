window.onload = function(){
scheduleColors();

}

var currentDate = moment().format("dddd, MMMM Do YYYY");
$("#currentDay").text(currentDate);

var now = new Date().getHours();

function scheduleColors() {
  if (now > 9) {
    $("#event9am").addClass("past");
  } else if (now >= 9 && now < 10) {
    $("#event9am").addClass("present");
  } else if (now < 9) {
    $("#event9am").addClass("future");
  }
  if (now > 10) {
    $("#event10am").addClass("past");
  } else if (now >= 10 && now < 11) {
    $("#event10am").addClass("present");
  } else if (now < 10) {
    $("#event10am").addClass("future");
  }
  if (now > 11) {
    $("#event11am").addClass("past");
  } else if (now >= 11 && now < 12) {
    $("#event11am").addClass("present");
  } else if (now < 11) {
    $("#event11am").addClass("future");
  }
  if (now > 12) {
    $("#event12pm").addClass("past");
  } else if (now >= 12 && now < 13) {
    $("#event12pm").addClass("present");
  } else if (now < 12) {
    $("#event12pm").addClass("future");
  }
  if (now > 13) {
    $("#event1pm").addClass("past");
  } else if (now >= 13 && now < 14) {
    $("#event1pm").addClass("present");
  } else if (now < 13) {
    $("#event1pm").addClass("future");
  }
  if (now > 14) {
    $("#event2pm").addClass("past");
  } else if (now >= 14 && now < 15) {
    $("#event2pm").addClass("present");
  } else if (now < 14) {
    $("#event2pm").addClass("future");
  }
  if (now > 15) {
    $("#event3pm").addClass("past");
  } else if (now >= 15 && now < 16) {
    $("#event3pm").addClass("present");
  } else if (now < 15) {
    $("#event3pm").addClass("future");
  }
  if (now > 16) {
    $("#event4pm").addClass("past");
  } else if (now >= 16 && now < 17) {
    $("#event4pm").addClass("present");
  } else if (now < 16) {
    $("#event4pm").addClass("future");
  }
  if (now > 17) {
    $("#event5pm").addClass("past");
  } else if (now >= 17 && now < 18) {
    $("#event5pm").addClass("present");
  } else if (now < 17) {
    $("#event5pm").addClass("future");
  }
}

/* When I click a time block I can enter a new event and once i click the save button
my new event will save even if refresh the page. */
function nineOClock() {
    var textBox = document.getElementById("event9am");
    var outTextBox = document.getElementById("event9am");
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
    var textBox10 = document.getElementById("event10am");
    var outTextBox10 = document.getElementById("event10am");
    var saveBtn10 = document.getElementById("button10");

    saveBtn10.addEventListener("click", newEvent);

    outTextBox10.innerHTML = localStorage.getItem("content10");
    textBox10.value = localStorage.getItem("content10");

    function newEvent(){
        localStorage.setItem("content10", textBox10.value);

        outTextBox10.innerHTML = textBox10.value;
    }
}
tenOClock()

function elevenOClock(){
    var textBox11 = document.getElementById("event11am");
    var outTextBox11 = document.getElementById("event11am");
    var saveBtn11 = document.getElementById("button11");

    saveBtn11.addEventListener("click", newEvent);

    outTextBox11.innerHTML = localStorage.getItem("content11");
    textBox11.value = localStorage.getItem("content11");

    function newEvent(){

        localStorage.setItem("content11", textBox11.value);

        outTextBox11.innerHTML = textBox11.value;
    }
}
elevenOClock()

function twelveOClock() {
    var textBox12 = document.getElementById("event12pm");
    var outBox12 = document.getElementById("event12pm");
    var saveBtn12 = document.getElementById("button12");
  
    saveBtn12.addEventListener("click", updateEvent);

    outBox12.textContent = localStorage.getItem("content12");
    textBox12.value = localStorage.getItem("content12");
  function updateEvent() {
      localStorage.setItem("content12", textBox12.value);
      outBox12.textContent = textBox12.value;
    }
  }
  twelveOClock()

  function oneOClock() {
    var textBox1 = document.getElementById("event1pm");
    var outTextBox1 = document.getElementById("event1pm");
    var savebtn = document.getElementById("button1");
  
    savebtn.addEventListener("click", updateEvent1);
  
    outTextBox1.innerHTML = localStorage.getItem("content1");
    textBox1.value = localStorage.getItem("content1");
  
    function updateEvent1() {
      localStorage.setItem("content1", textBox1.value);
  
      outTextBox1.innerHTML = textBox1.value;
    }
  }
  oneOClock()

  function twoOClock() {
    var textBox2 = document.getElementById("event2pm");
    var outTextBox2 = document.getElementById("event2pm");
    var saveBtn = document.getElementById("button2");
  
    saveBtn.addEventListener("click", updateEvent2);
  
    outTextBox2.innerHTML = localStorage.getItem("content2");
    textBox2.value = localStorage.getItem("content2");
  
    function updateEvent2() {
        localStorage.setItem("content2", textBox2.value);
  
        outTextBox2.innerHTML = textBox2.value;
    }
  }
  twoOClock()

  function threeOClock() {
    var textBox3 = document.getElementById("event3pm");
    var outTextBox3 = document.getElementById("event3pm");
    var saveBtn = document.getElementById("button3");
  
    saveBtn.addEventListener("click", updateEvent3);
  
    outTextBox3.textContent = localStorage.getItem("content3");
    textBox3.value = localStorage.getItem("content3");
  
    function updateEvent3() {
      localStorage.setItem("content3", textBox3.value);
  
      outTextBox3.textContent = itextBox3.value;
    }
  }
  threeOClock()

  function fourOClock() {
    var textBox4 = document.getElementById("event4pm");
    var outBox4 = document.getElementById("event4pm");
    var saveBtn = document.getElementById("button4");
  
    saveBtn.addEventListener("click", updateEvent4);
  
    outBox4.innerHTML = localStorage.getItem("content4");
    textBox4.value = localStorage.getItem("content4");
  
    function updateEvent4() {
      localStorage.setItem("content4", textBox4.value);
  
      outBox4.innerHTML = textBox4.value;
    }
  }
  fourOClock()

  function fiveOClock() {
    var textBox5 = document.getElementById("event5pm");
    var outBox5 = document.getElementById("event5pm");
    var saveBtn = document.getElementById("button5");
  
    saveBtn.addEventListener("click", updateOutput9);
  
    outBox5.textContent = localStorage.getItem("content5");
    textBox5.value = localStorage.getItem("content5");
  
    function updateOutput9() {
      localStorage.setItem("content5", textBox5.value);
  
      outBox5.textContent = textBox5.value;
    }
  }
  fiveOClock()