//This function allows you to redirect to a website
function redirect() {
  window.open('https://www.purdue.edu');
}

//This is an arrow funciton example. Show you how to extract text from an element
function arrow(button) {
  console.log(button.innerHTML);
};

//This is called an onload function where when the window is loaded this function runs
window.onload = function() {
  arrow(this.document.querySelector('button'));
  this.document.getElementById('nav-container').innerHTML = '<object id="obj" type="text/html" data="nav.html" ></object>';
  console.log(document.getElementsByClassName('nav-bar').innerHTML);
};
