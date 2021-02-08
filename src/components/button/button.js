import React from "react";
import {Btn} from "./button-styles";

export const Button = ({url, label, size, secondary, ...props}) => (
  <Btn
    secondary={secondary}
    size={size}
    to={url}
    {...props}
  >{label}</Btn>
);

export default Button;