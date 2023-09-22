//Viktor Hraboviuk

import React, { useState, useEffect } from "react";
import { Text, View } from "react-native";
import { State as GestureState, TextInput } from "react-native-gesture-handler";
import { styles } from "./ProfileGroupStyles";

// GroupName component for displaying and updating the group name
export const GroupName = ({
  setGroupNameExample,
}: {
  setGroupNameExample: React.Dispatch<React.SetStateAction<string>>;
}) => {
  const [GroupName, setGroupName] = useState(""); // State variable to manage the group name input

  return (
    <View>
      <Text style={{ top: "40%", left: "5%", fontSize: 20 }}>Group name</Text>{" "}
      {/* Label for the group name input */}
      <TextInput
        style={styles.GroupName}
        onChangeText={(text) => {
          setGroupName(text); // Update the GroupName state when the text input changes
        }}
        value={GroupName} // Bind the value of the input field to the GroupName state
      />
    </View>
  );
};
