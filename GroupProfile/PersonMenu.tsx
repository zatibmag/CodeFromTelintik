// Viktor Hraboviuk

import React, { useState, useEffect } from "react";
import { Text, View, TouchableOpacity, Image } from "react-native";
import { EvilIcons } from "@expo/vector-icons";
import { styles } from "./ProfileGroupStyles";

// PersonMenu component definition
export const PersonMenu = () => {
  const [menuVisible, setMenuVisible] = useState(false); // Initially hidden menu

  return (
    <View style={styles.PersonMenu}>
      <TouchableOpacity onPress={() => setMenuVisible(false)}>
        <Text style={{ color: "red" }}>
          Move to Trash
          <EvilIcons name="trash" size={20} color="red" />
        </Text>
      </TouchableOpacity>
    </View>
  );
};
