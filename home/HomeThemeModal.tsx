import React, { useContext, useState } from "react";
import {
  Modal,
  Pressable,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";
import { ThemeContext } from "../theme/ThemeContext";

export const HomeThemeModal = ({
  onCloseModal,
  visible,
}: Props): JSX.Element => {
  const { theme } = useContext(ThemeContext);
  const [text, onChangeText] = useState("");

  const onClose = (text: string) => {
    onCloseModal(text);
    onChangeText("");
  };

  return (
    <View style={styles.centeredView}>
      <Modal
        animationType="fade"
        transparent={true}
        visible={visible}
        onRequestClose={() => onClose(text)}
      >
        <View style={styles.centeredView}>
          <View
            style={[
              styles.modalView,
              {
                backgroundColor: theme.modal.background,
                shadowColor: theme.modal.border,
              },
            ]}
          >
            <Text style={[styles.title, { color: theme.modal.foreground }]}>
              Input
            </Text>
            <TextInput
              style={[
                styles.input,
                {
                  borderColor: theme.modal.border,
                  color: theme.modal.foreground,
                },
              ]}
              onChangeText={onChangeText}
              value={text}
              placeholder="Input text here..."
              placeholderTextColor={theme.modal.placeholder}
              keyboardType="ascii-capable"
            />
            <Pressable
              style={[
                styles.button,
                { backgroundColor: theme.actions.primary.background },
              ]}
              onPress={() => onClose(text)}
            >
              <Text
                style={[
                  styles.textStyle,
                  { color: theme.actions.primary.foregroundActive },
                ]}
              >
                Add
              </Text>
            </Pressable>
          </View>
        </View>
      </Modal>
    </View>
  );
};

type Props = {
  onCloseModal: (text: string) => void;
  visible: boolean;
};

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  modalView: {
    margin: 16,
    borderRadius: 16,
    padding: 36,
    alignItems: "flex-start",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 4,
  },
  button: {
    alignItems: "flex-end",
    borderRadius: 8,
    padding: 8,
    elevation: 2,
  },
  textStyle: {
    fontWeight: "bold",
    textAlign: "center",
  },
  title: {
    fontWeight: "bold",
    fontSize: 16,
    textAlign: "left",
  },
  input: {
    width: 160,
    height: 40,
    marginTop: 8,
    marginBottom: 8,
    borderWidth: 1,
    padding: 10,
  },
});
