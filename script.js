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
  // erases user's previous entry
  document.querySelector("#form").value = "";
  console.log("Success");            
}

//create submit function
function submitItem() {
  //declares constant accepting elements with an id form as argument
  const name = document.querySelector('#name').name;
  const username = document.querySelector('#username').username;
  const message = document.querySelector('#message').message;

  //if value given is empty show an alert to inform user
  if (name === '') or (username === '') or (message === '') {                             
    alert("Oops, you forgot to write your task!");
    return
  } 
  // calls checkSpace function to show an alert if user enters spaces as entry
  if (checkSpace(name)) or or (username === '') or (message === '') {
    alert("Oops, you entered a blank information!");
    return
  }

  if (checkName(name)) or (checkName(username)) or (checkName(message)) {
    alert("Oops, you are lacking more information!");
    return
  }

  if(name.length > 40) or (username.length > 40) {
    alert("Your message is over 200 characters long, please shorten it!")
    return
  }

  else if(message.length > 200) {
    alert("Your message is over 200 characters long, please shorten it!")
    return
  }

  // erases user's previous entry
  document.querySelector("#contact").name = "";
  document.querySelector("#contact").username = "";
  document.querySelector("#contact").message = "";
  console.log("Success");     
  
}

//function to check if item only contains spaces
function checkSpace(str) {
  // call the trim() method on the string. If the string has a length of 0 then the string contains only spaces
  return str.trim().length === 0;
}

//function for less than 1 value
function checkName(str) {
  // call the trim() method on the string and checks if string has a length of 1
  return str.trim().length === 1;
}
//function for incorrect email

//function for value greater than 40 for both name and email

//function for value greater than 200 for message

