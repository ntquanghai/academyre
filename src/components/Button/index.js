import { Button } from "@mui/material";
import React from "react";

const ButtonPrimary = (props) => {
  return (
    <>
      <Button variant="outlined">Primary</Button>
    </>
  );
};
const ButtonDisabled = (props) => {
  return (
    <>
      <Button variant="outlined" disabled>
        Disabled
      </Button>
    </>
  );
};
const ButtonSecondary = (props) => {
  return (
    <>
      <Button variant="outlined">Primary</Button>
    </>
  );
};

export {ButtonPrimary, ButtonDisabled, ButtonSecondary}