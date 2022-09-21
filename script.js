//create addItem function
function addItem() {
  const value = document.querySelector('#form').value;    //assign value by getting elements with id form
  const ul = document.querySelector("#items");          // assign list by getting elements with id items
  const btn = document.createElement('button');         //creates a button element
  btn.innerText = ''                              //adds 'delete' text to the button 
	btn.setAttribute('data-delete','');                   //create an attribute to button element

  //if value given is empty show an alert to inform user
  if (value === '') {                             
    alert("Oops, you forgot to write your task!");
    return
  } 
  
  else if (checkSpace(value)) {
    alert("Oops, you entered a blank task!");
    return
  }
  // creates an li element
  const li = document.createElement("li");              
  // adds li elements into html  
  li.innerHTML = value; 
  // appends to the undordered list in HTML document                                  
  li.appendChild(btn);
  ul.appendChild(li);                                  
  li.onclick = (entry) => {
    li.classList.toggle("strike");
  }
  // allows user to remove list item when button is clicked
  btn.onclick = (event) => {
    const li = event.target.parentNode;
    li.remove()
  }

  document.querySelector("#form").value = "";            
}

//function to check if item only has spaces
function checkSpace(str) {
  // call the trim() method on the string. If the string has a length of 0 then the string contains only spaces
  return str.trim().length === 0;

}