import React, { useState } from "react";

export const SearchField = () => {
  const [value, setValue] = useState("");
  // const valueRef = useRef(""); //creating a refernce for TextField Component

  const onSubmitHandler = (e) => {
    e.preventDefault();
    setValue("");
  };
  const onChangeHandler = (e) => {
    console.log(e.target.value);
    setValue(e.target.value);
  };
  return (
    <form
      onSubmit={onSubmitHandler}
      noValidate
      className="w-1/3"
    >
      <input
        className="w-full py-2 px-2 border rounded-lg border-gray-400"
        id="search"
        name="search"
        value={value}
        onChange={onChangeHandler}
      />
      {/* <button type="submit" className="hidden"></button> */}
    </form>
  );
};
