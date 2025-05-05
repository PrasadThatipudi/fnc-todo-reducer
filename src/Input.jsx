import { useState } from "react";

export const Input = ({ onSubmit, placeholder }) => {
  const [inputValue, setInputValue] = useState("");

  const handleChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleSubmit = (event) => {
    if (event.key === "Enter" && inputValue.trim()) {
      console.log("New Todo:", inputValue);
      onSubmit(inputValue);
      setInputValue("");
    }
  };

  return (
    <div>
      <input
        type="text"
        placeholder={placeholder}
        value={inputValue}
        onChange={handleChange}
        onKeyDown={handleSubmit}
      />
    </div>
  );
};
