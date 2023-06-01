import React from "react";
import InputMask from "react-input-mask";
import { Container, Label, Error } from "./styles";
import validateEmailFormat from "@/utils/validate-email-format";

interface IPorps {
  labelText: string;
  InputType: string;
  onChange: Function;
  placeholder: string;
  isRequired: boolean;
  disabled: boolean;
  value: string;
  name: string;
  mask: string;
  isErrorState: boolean;
  setErrorState: Function;
}

export function Input({
  labelText,
  InputType,
  onChange,
  placeholder,
  isRequired,
  disabled,
  value,
  name,
  mask,
  isErrorState,
  setErrorState,
}: IPorps) {
  const handleInputChange = (e: {
    target: {
      validity: any;
      value: string;
    };
  }) => {
    const currentValue = mask
      ? e.target.value.replace(/[^\d]/g, "")
      : e.target.value;

    if (value === currentValue) return false;

    typeof onChange === "function" && onChange(currentValue);

    if (InputType === "email") {
      typeof setErrorState === "function" &&
        setErrorState(!validateEmailFormat(currentValue));
    } else if (mask && isRequired) {
      typeof setErrorState === "function" &&
        setErrorState(
          currentValue.length === mask.replace(/[^\d]/g, "").length
            ? false
            : true
        );
    } else {
      typeof setErrorState === "function" &&
        setErrorState(e.target.validity.valid ? false : true);
    }
  };

  return (
    <Container>
      <Label error={isErrorState} filled={value}>
        {labelText}
      </Label>
      <InputMask
        type={InputType}
        onChange={(e: { target: { validity: any; value: any } }) => {
          handleInputChange(e);
        }}
        placeholder={placeholder}
        required={isRequired}
        disabled={disabled}
        value={value}
        name={name}
        mask={mask}
      />
      {isErrorState && <Error error={isErrorState}>{}</Error>}
    </Container>
  );
}
