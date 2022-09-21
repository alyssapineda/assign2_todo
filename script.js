//create addItem function
function addItem() {
  const value = document.querySelector('#form').value;    //assign value by getting elements with id form
  const ul = document.querySelector("#items");          // assign list by getting elements with id items
  const btn = document.createElement('button');         //creates a button element
  btn.innerText = ''                              //adds 'delete' text to the button 
	btn.setAttribute('data-delete','');                   //create an attribute to button element

  const li = document.createElement("li");                // creates an li element
  li.innerHTML = value;                                   // adds li elements into html
  li.appendChild(btn);
  ul.appendChild(li);                                   // appends to the undordered list in HTML document
  li.onclick = (event) => {
    const li = document.querySelector(".checked");
  }
  btn.onclick = (event) => {
    const li = event.target.parentNode
    li.remove()
  }
  document.querySelector("#form").value = " ";            // removes content in text box when button is clicked
}