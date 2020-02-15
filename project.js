function redirect() {
  window.open('https://www.purdue.edu');
}

const arrow = (button) => {
  console.log(button.innerHTML);
};

window.onload = function() {
  arrow(this.document.querySelector('button'));
};
