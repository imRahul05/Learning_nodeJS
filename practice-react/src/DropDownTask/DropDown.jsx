import React from "react";
import { useState } from "react";

const DropDown = () => {
  const [values, setValues] = useState([]);
  
  function handleChange(e) {
    console.log(e.target.selectedOptions);
    const AllValues = Array.from(e.target.selectedOptions).map(
      (option) => option.value
    );
    setValues(AllValues)
  }
  function handleSubmit() {
    console.log("hello")
   const res = values.map((value,idx)=>`option${idx+1}:${value}`)
   alert(res)
  }
  return (
    <div>
      <div>
        <h1>please only select three values otherwise select button won't work</h1>
        <select
          onChange={handleChange}
          multiple
          style={{ padding: "70px", margin: "10px" }}
        >
          <option value="" disabled>
            select multiple values
          </option>
          <option value="value1">one</option>
          <option value="value2">two</option>
          <option value="value3">three</option>
          <option value="value4">four</option>
          <option value="value5">five</option>
          <option value="value6">six</option>
        </select>
      </div>
      <div>
        <button
          onClick={handleSubmit}
          style={{ padding: "10px", margin: "10px" }}
          disabled={!(values.length===3)}
        >
          Select
        </button>
      </div>
    </div>
  );
};

export default DropDown;
