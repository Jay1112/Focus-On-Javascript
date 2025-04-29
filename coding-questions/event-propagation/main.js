const div = document.querySelector("div");
const form = document.querySelector("form");
const btn = document.querySelector("button");
const main = document.querySelector("main");

// event propagation
// event propagation in javascript means how events traverlled in DOM tree when event occurrs.

// event bubbling
// event bubbling travells from bottom to top in DOM.

// event capturing
// event capturing captures the events from top to bottom and then remaining would be executed in event bubbling manner

// capture : true => execute first from top to bottom in DOM and then bubbling happens from bottom to top

// we can stop event bubbling and capturing using event.stopPropagation()

function func(event) {
  // here this ~ event.currentTarget
  const message = `currentTarget : ${event.currentTarget.tagName} | target : ${event.target.tagName} | this target : ${this.tagName}`;
  alert(message);
}

// main.addEventListener('click', func, { capture : true }); // 1
// div.addEventListener('click', func); // 4
// form.addEventListener('click', func, { capture : true });  // 2
// btn.addEventListener('click', func); // 3

main.addEventListener("click", function(e){
  func(e);
},{ capture : true });

div.addEventListener("click", (e) => {
  func(e);
});

form.addEventListener("click", (e) => {
    e.stopPropagation();
  func(e);
});

btn.addEventListener("click", (e) => {
  func(e);
});
