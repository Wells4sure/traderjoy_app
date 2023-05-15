import { View, Text } from "react-native";
import React from "react";
import {
  Box,
  Button,
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
import { ProductI } from "../../types";
import { currentPos } from "../../redux/slice/PosSlice";
import { useAppSelector } from "../../redux/hooks";

interface QtyModalProps {
  isOpen: boolean;
  selectedProduct: ProductI | null;
  onChange: (value: number) => void;
  addOrRemove: (action: string, value: number) => void;
  onClose: () => void;
  handleSubmitQty: () => void;
}

const QtyModal = ({
  isOpen,
  onClose,
  selectedProduct,
  onChange,
  addOrRemove,
  handleSubmitQty,
}: QtyModalProps) => {
  const { OrderQty } = useAppSelector(currentPos);
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
        <Modal.Header> {`Enter ${selectedProduct?.name} Qty`}</Modal.Header>
        <Modal.Body>
          <Box
            w="100%"
            alignItems="center"
            justifyContent="center"
            maxW={"100%"}
          >
            <FormControl>
              <InputGroup
                mx="auto"
                w="80%"
                alignItems="center"
                justifyContent="center"
              >
                <InputLeftAddon
                  children={
                    <Pressable onPress={() => addOrRemove("remove", OrderQty)}>
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
                  w="100%"
                  placeholder="Qty"
                  value={OrderQty.toString()}
                  keyboardType="numeric"
                  textAlign="center"
                  onChangeText={(value) => {
                    onChange(Number(value));
                  }}
                />
                <InputRightAddon
                  children={
                    <Pressable onPress={() => addOrRemove("add", OrderQty)}>
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
        <Modal.Footer>
          <Modal.Footer>
            <Button
              // full width
              w={"100%"}
              onPress={() => {
                handleSubmitQty();
              }}
            >
              Save
            </Button>
          </Modal.Footer>
        </Modal.Footer>
      </Modal.Content>
    </Modal>
  );
};

export default QtyModal;
