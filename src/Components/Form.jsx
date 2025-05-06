import React, { useState } from "react";
import './form.css'

function Form() {
  const [username, setUsername] = useState("");

  function handleChange(e) {
    setUsername(e.target.value);
  }


  function handleClick(e) {
    e.preventDefault();
    if (username ==='') return;
    alert(`Xoş gəldin, ${username}!`);
    setUsername('');
    document.getElementById('name').value = '';
  }

  return (
    <div>
      <form>
        <label htmlFor="name">Name: </label>
        <input
          type="text"
          id="name"
          value={username}
          onChange={(e) => handleChange(e)}
          placeholder="Name:"
        ></input><br /><br />
        <button onClick={(e) => handleClick(e)}>Click here!</button>
      </form>
    </div>
  );
}

export default Form;
