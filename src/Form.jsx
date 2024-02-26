import React from "react";

function Click(event) {
  event.preventDefault();
  console.log("hii");
}
function Form() {
  return (
    <div>
      <input type="text" placeholder="Enter name" />
      <button onMouseOver={Click}>click me </button>
    </div>
  );
}

export default Form;
