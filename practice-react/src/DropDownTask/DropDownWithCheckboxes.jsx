import React from "react";
import { useState } from "react";

const DropDownWithCheckboxes = () => {
  const [show, setShow] = useState(false);
  const [selectedValues, setSelectedValues] = useState([]);

  const Options = [
    { id: 1, label: "option1", value: "value1" },
    { id: 2, label: "option2", value: "value2" },
    { id: 3, label: "option3", value: "value3" },
    { id: 4, label: "option4", value: "value4" },
    { id: 5, label: "option5", value: "value5" },
    { id: 6, label: "option6", value: "value6" },
  ];

  function toggle() {
    setShow(!show);
  }

  function handleChange(e) {
    const { name, value, checked } = e.target;
    if (checked) {
      setSelectedValues((prev) => [...prev, value]);
    } else {
      const filterValues = selectedValues.filter((val) => val !== value);
      setSelectedValues(filterValues);
    }
  }

  function handleSubmit() {
    alert(selectedValues);
     setShow(false);
     setSelectedValues([])
    
  }
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
      }}
    >
      <div
        onClick={toggle}
        style={{
          padding: "5px",
          border: "2px solid black",
          width: "8rem",
          marginTop: "10px",
        }}
      >
        <p>
  Selected ({selectedValues.length}): {selectedValues.join(", ") || "None"} {"\u2193"}
</p>
      </div>
      {show && (
        <div
          style={{ padding: "5px", border: "2px solid black", width: "8rem" }}
        >
          {Options.map((option, idx) => {
            return (
              <div key={option.id}>
                <label>{option.label}</label>
                <input
                  type="checkbox"
                  value={option.value}
                  name={option.label}
                  onChange={handleChange}
                  disabled={
                    selectedValues.length === 3 &&
                    !selectedValues.includes(option.value)
                  }
                />
              </div>
            );
          })}
        </div>
      )}

      <div>
        <button
          onClick={handleSubmit}
          disabled={!(selectedValues.length === 3)}
        >
          Select
        </button>
      </div>
    </div>
  );
};

export default DropDownWithCheckboxes;
