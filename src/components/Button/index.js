import { Button } from "@mui/material";
import React from "react";

const ButtonPrimary = (props) => {
  const {
    variant,
    className,
    buttonType,
    fullWidth,
    children,
    onClick,
    ...rest
  } = props;
  return (
    <>
      {/* variant: 'text' | 'outlined' | 'contained' */}
      {/* type fullWidth sx  */}
      <Button
        className={className}
        variant={variant}
        type={buttonType}
        {...rest}
      >
        {children}
      </Button>
    </>
  );
};

export default ButtonPrimary ;
