import { View, Text } from "react-native";
import React from "react";
import {
  FormControl,
  Select,
  CheckIcon,
  WarningOutlineIcon,
} from "native-base";

interface SelectFormProps {
  placeholder: string;
  selectItems: string[];
  value: string;
  name: string;
  required?: boolean;
  onValueChange: (e: any) => void;
}
const SelectForm = ({
  placeholder,
  name,
  selectItems,
  value,
  onValueChange,
  required = false,
}: SelectFormProps) => {
  return (
    <FormControl>
      <FormControl.Label>{name}</FormControl.Label>
      <Select
        selectedValue={value}
        minWidth="200"
        accessibilityLabel={name}
        placeholder={placeholder}
        _selectedItem={{
          bg: "teal.600",
          endIcon: <CheckIcon size="5" />,
        }}
        mt={1}
        onValueChange={(itemValue) => {
          onValueChange(itemValue);
        }}
        variant="underlined"
      >
        {selectItems.map((item) => {
          return <Select.Item label={item} value={item} />;
        })}
      </Select>
    </FormControl>
  );
};

export default SelectForm;
