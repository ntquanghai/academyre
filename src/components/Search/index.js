import React, { useState } from "react";

export const SearchField = () => {
  const [value, setValue] = useState("");
  // const valueRef = useRef(""); //creating a refernce for TextField Component

  const onSubmitHandler = (e) => {
    console.log("submit");
    e.preventDefault();
    setValue("");
  };
  const onChangeHandler = (e) => {
    setValue(e.target.value);
  };
  return (
    <div className="w-1/2 ">
      <form
        onSubmit={onSubmitHandler}
        className="border flex-row-reverse rounded-full flex border-black"
      >
        <input
          className="w-full !outline-none py-4 px-4 rounded-full"
          id="search"
          name="search"
          value={value}
          onChange={onChangeHandler}
          placeholder="Search for anything"
        />
        <button type="submit" className="pl-4 hover:cursor-not-allowed">
          <img src="https://img.icons8.com/ios/24/000000/search--v1.png" />
        </button>
      </form>
    </div>
  );
};
