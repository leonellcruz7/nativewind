import React, { useState } from "react";
import { Button, Modal, Text, View } from "react-native";

export default function Review({ navigation, route }) {
  const { details } = route.params;
  const { title, description } = details;
  const [showModal, setShowModal] = useState(false);
  return (
    <View>
      <Text>Title: {title}</Text>
      <Text>Description: {description}</Text>
      <Button title="Show" onPress={() => setShowModal(true)} />

      {showModal && (
        <Modal>
          <Text>This is a modal</Text>
          <Button title="Close" onPress={() => setShowModal(false)} />
        </Modal>
      )}
    </View>
  );
}
