import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export const SearchField = () => {
  const [value, setValue] = useState("");
  const navigate = useNavigate();
  const onSubmitHandler = (e) => {
    console.log("submit");
    e.preventDefault();
    setValue("");
    navigate("/search")
  };
  const onChangeHandler = (e) => {
    setValue(e.target.value);
  };
  return (
    <div className="w-1/2 ml-4 text-sm">
      <form
        onSubmit={onSubmitHandler}
        className="border flex-row-reverse rounded-full flex border-black"
      >
        <input
          className="w-full !outline-none py-3 px-4 rounded-full"
          id="search"
          name="search"
          value={value}
          onChange={onChangeHandler}
          placeholder="Search for anything"
          autoComplete="off"
        />
        <button type="submit" className="pl-4 hover:cursor-not-allowed">
          <img src="https://img.icons8.com/ios/24/000000/search--v1.png" />
        </button>
      </form>
    </div>
  );
};
