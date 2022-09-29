//create addItem function
function addItem() {
  //declares constant accepting elements with an id form as argument
  const value = document.querySelector('#form').value;
  //declares constant accepting elements with an id items as argument
  const ul = document.querySelector("#items");
  //create button element
  const btn = document.createElement('button');
  //create an attribute to button element                        
	btn.setAttribute('data-delete','');

  //if value given is empty show an alert to inform user
  if (value === '') {                             
    alert("Oops, you forgot to write your task!");
    return
  } 
  // calls checkSpace function to show an alert if user enters spaces as entry
  else if (checkSpace(value)) {
    alert("Oops, you entered a blank task!");
    return
  }
  // creates an li element
  const li = document.createElement("li");              
  // adds li elements into html
  li.innerHTML = value; 
  // appends button element with li element in HTML document                                  
  li.appendChild(btn);
  // appends li element in ul element in HTML document  
  ul.appendChild(li);                                  
  // when user clicks on li element, put a strike through the text
  li.onclick = (entry) => {
    li.classList.toggle("strike");
  }
  // allows user to remove list item when button is clicked
  btn.onclick = (event) => {
    const li = event.target.parentNode;
    li.remove()
  }
  // erases user's previous entry, if input successfully entered console shows success
  document.querySelector("#form").value = "";
  console.log("Success");            
}

//Checks contact user input once submitted
function submitItem() {
  //Gets form element by numerical index
  let name = document.forms["contact"]["name"].value;
  let email = document.forms["contact"]["email"].value;
  let message = document.forms["contact"]["message"].value;

//Logic for the error functions
  //Checks for empty name input value
  if((name == "") || checkSpace(name)){   
    console.log("No Name Input");
    alert("Please enter your name!");
    return;
  //Checks for empty email input value
  }else if((email == "")){
    console.log("No Email Input");
    alert("Please enter your email!");
    return;
  //Checks for message has more than 200 characters
  }else if(message > 200){
    console.log("Message above 200 characters");
    alert("Message is above 200 characters!")
    return;
  //Calls checkEmail function to validate email input, if passed console shows success
  }else if(checkEmail(email)){
    console.log("Success");
    alert("Your form has been submitted!");
  }else{
  //If email input fails validation test, inform user to enter valid email
    console.log("Invalid email syntax");
    alert("Please enter a valid email!");
  }
}

// Checks for character limit in real time with hard limit
function limitText(min, max){
  if(min.value.length > max){
    alert("You have reached the " + (max + 1) + " character limit!")
  }

}

// Checks for valid email using regex
function checkEmail(input){
  var regex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g;
  return regex.test(input);
}

//Checks if item only contains spaces
function checkSpace(str) {
  // call the trim() method on the string. If the string has a length of 0 then the string contains only spaces
  return str.trim().length === 0; 
}

