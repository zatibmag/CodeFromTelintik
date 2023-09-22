//Viktor Hraboviuk

import React, { useState } from "react";
import { View, TextInput, Text } from "react-native";
import { styles } from "./ProfileGroupStyles";

// GroupBio component definition
export const GroupBio = ({
  setBioTextExample,
}: {
  setBioTextExample: React.Dispatch<React.SetStateAction<string>>;
}) => {
  const [BioText, setBioText] = useState(""); // State to manage the bio text

  return (
    <View>
      <Text style={{ top: "-10%", left: "5%", fontSize: 20 }}>Bio</Text>{" "}
      {/* Display the "Bio" text label */}
      <TextInput
        style={styles.BioText}
        onChangeText={(text) => {
          setBioText(text); // Update the BioText state when text changes
        }}
        value={BioText} // Display the current bio text value
      />
    </View>
  );
};
