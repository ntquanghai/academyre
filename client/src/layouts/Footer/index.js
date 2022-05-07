import React from "react";
export const Footer = () => {
  return (
    <div id="footer" className="bg-black text-white h-full">
      <div>
        <h1>Tech the world online</h1>
        <p>
          Create an online video course, reach student across the globe, and
          earn money
        </p>
      </div>
      <div>
        <h1>
          Top company choose <b className="text-blue-400">Academyre</b> to build in-demand career skills
        </h1>
      </div>
      <div>
        <img
          className="mx-4 w-20 h-20"
          src="./logo-removebg-preview.png"
          alt=""
        />
        <div>
          <a href="">Academyre</a>
        </div>
      </div>
    </div>
  );
};
