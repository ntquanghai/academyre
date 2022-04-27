import React from "react";

export const Panel = (props) => {
  const { panelTitle } = props;
  return (
    <div className="border-t w-4/5 flex items-center justify-between py-6 cursor-pointer last:border-b">
      <h3 className="font-bold text-xl">{panelTitle}</h3>
      <div className="" aria-hidden="false">
        <img src="https://img.icons8.com/external-those-icons-lineal-those-icons/24/000000/external-down-arrows-those-icons-lineal-those-icons-1.png" />
      </div>
    </div>
  );
};
