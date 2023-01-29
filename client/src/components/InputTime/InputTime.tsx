import React, { FC } from "react";
import classes from "./inputHour.module.scss";

export interface InputHourProps {
  name: string;
  id: string;
  onChange: (value: any) => void;
  value: string;
  label: string;
  htmlFor: string;
}

const InputHour: FC<InputHourProps> = ({
  name,
  id,
  onChange,
  value,
  label,
  htmlFor,
}) => {
  return (
    <>
      <label htmlFor={htmlFor} className={classes.input_label}>
        {label}
      </label>
      <input
        type="time"
        name={name}
        id={id}
        value={value}
        onChange={onChange}
        className={classes.input_time}
      />
    </>
  );
};

export default InputHour;
