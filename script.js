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
}

//function to check if item only contains spaces
function checkSpace(str) {
  // call the trim() method on the string. If the string has a length of 0 then the string contains only spaces
  return str.trim().length === 0;

}