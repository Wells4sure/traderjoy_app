import { View, Text } from "react-native";
import React from "react";
import {
  Box,
  FormControl,
  Icon,
  Input,
  InputGroup,
  InputLeftAddon,
  InputRightAddon,
  Modal,
  Pressable,
  Stack,
} from "native-base";
import { MaterialIcons } from "@expo/vector-icons";

interface QtyModalProps {
  isOpen: boolean;
  qtyValue: number;
  onChange: (value: number) => void;
  addOrRemove: (action: string, value: number) => void;
  onClose: () => void;
}

const QtyModal = ({
  isOpen,
  onClose,
  qtyValue,
  onChange,
  addOrRemove,
}: QtyModalProps) => {
  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      _backdrop={{
        bg: "coolGray.900",
      }}
      size={"lg"}
    >
      <Modal.Content>
        <Modal.CloseButton />
        <Modal.Header>Enter Qty</Modal.Header>
        <Modal.Body>
          <Box w="100%" alignItems={"center"}>
            <FormControl>
              <InputGroup
                w={{
                  base: "70%",
                  md: "285",
                }}
              >
                <InputLeftAddon
                  children={
                    <Pressable onPress={() => addOrRemove("remove", qtyValue)}>
                      <Icon
                        as={<MaterialIcons name={"remove-circle"} />}
                        size={5}
                        mr="2"
                        color="muted.400"
                      />
                    </Pressable>
                  }
                />
                <Input
                  w={{
                    base: "70%",
                    md: "285",
                  }}
                  placeholder="Qty"
                  value={qtyValue.toString()}
                  keyboardType="numeric"
                  textAlign="center"
                  onChangeText={(value) => {
                    onChange(Number(value));
                  }}
                />
                <InputRightAddon
                  children={
                    <Pressable onPress={() => addOrRemove("add", qtyValue)}>
                      <Icon
                        as={<MaterialIcons name={"add-circle"} />}
                        size={5}
                        mr="2"
                        color="muted.400"
                      />
                    </Pressable>
                  }
                />
              </InputGroup>
            </FormControl>
          </Box>
        </Modal.Body>
      </Modal.Content>
    </Modal>
  );
};

export default QtyModal;
