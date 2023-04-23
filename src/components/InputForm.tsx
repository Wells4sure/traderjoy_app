import { View, Text } from "react-native";
import React from "react";
import { FormControl, Input } from "native-base";

interface InputFormProps {
  placeholder: string;
  type: string;
  value: string;
  name: string;
  required?: boolean;
  onChange: (e: any) => void;
  InputRightElement?: any;
}
const InputForm = ({
  placeholder,
  name,
  type,
  value,
  onChange,
  InputRightElement,
  required = false,
}: InputFormProps) => {
  return (
    <FormControl isRequired={required}>
      <FormControl.Label>{name}</FormControl.Label>
      <Input
        type={type}
        defaultValue={value}
        placeholder={placeholder}
        variant={"underlined"}
        onChange={(e) => {
          onChange(e);
        }}
        InputRightElement={InputRightElement}
      />
    </FormControl>
  );
};

export default InputForm;
