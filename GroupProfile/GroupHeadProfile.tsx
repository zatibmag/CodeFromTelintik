//ViktorHraboviuk

import React, { useState } from "react";
import { Text, View, TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { styles } from "./ProfileGroupStyles";

// GroupHead component for displaying the group name and navigation buttons
export const GroupHead = ({
  setGroupHeadNameExample,
}: {
  setGroupHeadNameExample: React.Dispatch<React.SetStateAction<string>>;
}) => {
  const [GroupHeadName, setGroupHeadName] = useState("Group"); // State variable for the group name

  return (
    <View style={styles.topToolBar}>
      {/* Back button */}
      <TouchableOpacity style={{ top: "43%", right: "43%" }}>
        <Ionicons name="chevron-back" size={24} color="black" />
      </TouchableOpacity>
      <Text style={{ top: "17%" }}>Group</Text> {/* Display the group name */}
      {/* Done button */}
      <TouchableOpacity style={{ left: "38%", top: "-3%" }}>
        <Text>Done</Text>
      </TouchableOpacity>
    </View>
  );
};
