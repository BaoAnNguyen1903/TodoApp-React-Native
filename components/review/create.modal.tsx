import { Button, Modal, Pressable, StyleSheet, Text, View } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import { TextInput } from "react-native-gesture-handler";
const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    backgroundColor: "#fff"
  },

  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    borderBottomColor: "#ccc",
    borderBottomWidth: 1,
    paddingVertical: 10,
    marginBottom: 20
  },

  groupInput: {
    marginBottom: 15
  },

  text: {
    fontSize: 20,
    fontWeight: "400"
  },

  input: {
    borderWidth: 1,
    borderColor: "#ccc",
    marginVertical: 10,
    paddingVertical: 5,
    paddingHorizontal: 10,
    borderRadius: 5
  }
});

interface IProps {
  modalVisible: boolean;
  setModalVisible: (v: boolean) => void;
}
const CreateModal = (props: IProps) => {
  const { modalVisible, setModalVisible } = props;

  return (
    <>
      <Modal animationType="slide" transparent={true} visible={modalVisible}>
        <View style={styles.container}>
          {/* header */}
          <View style={styles.header}>
            <Text style={{ fontSize: 25 }}>Create a review</Text>
            <AntDesign
              onPress={() => setModalVisible(false)}
              name="close"
              size={24}
              color="black"
            />
          </View>

          {/* body */}
          <View>
            <View style={styles.groupInput}>
              <Text style={styles.text}>Nội dung</Text>
              <TextInput style={styles.input} />
            </View>
            <View>
              <Text style={styles.text}>Rating</Text>
              <TextInput keyboardType="numeric" style={styles.input} />
            </View>
          </View>
          {/* footer */}
          <View style={{ marginTop: 20 }}>
            <Button title="Add" />
          </View>
        </View>
      </Modal>
    </>
  );
};

export default CreateModal;
