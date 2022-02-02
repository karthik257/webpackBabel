import "./index.css";
import React from "react";
import ReactDOM from "react-dom";

ReactDOM.render(
  <div className="center-align">
    <div className="flex">
      <h1 className="red-text">Note Taking App</h1>
      <img src="imgs/note.jpg" />
    </div>

    <input type="text" placeholder="Enter note" id="inp" />
    <button id="btn">Add</button>
    <div id="note"></div>
  </div>,

  document.getElementById("root")
);

document.getElementById("btn").addEventListener("click", function () {
  let inp = document.getElementById("inp").value;
    let p = document.createElement("p");
  p.textContent = inp;
  document.getElementById("note").append(p);
});
