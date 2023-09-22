//Viktor Hraboviuk

import React from "react";
import { Text, View, TouchableOpacity, Image } from "react-native";
import { styles } from "./ProfileGroupStyles";

// This functional component represents an "Add Member" button.
export const AddMember = () => {
  return (
    <TouchableOpacity style={styles.AddMember}>
      {/* Display the text "+ Member" with custom styling */}
      <Text style={{ color: "rgb(92, 64, 129)", textAlign: "center" }}>
        + Member
      </Text>
    </TouchableOpacity>
  );
};
