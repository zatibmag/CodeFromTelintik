//Viktor Hraboviuk

import React, { useState, useEffect } from "react";
import { Text, View, TouchableOpacity, Image } from "react-native";
import { EvilIcons } from "@expo/vector-icons";
import { styles } from "./ProfileGroupStyles";
import { PersonMenu } from "./PersonMenu";

// Define the properties expected for a User component
export interface UserProps {
  ImagePath: string; // User's profile image URL
  Nickname: string;
}

// User component definition
export const User: React.FC<UserProps> = (props) => {
  const [menuVisible, setMenuVisible] = useState(false); // State to control menu visibility

  const [userImage, setUserImage] = useState(""); // State to store the user's profile image URL

  useEffect(() => {
    // Set the initial user image URL when the component mounts
    setUserImage(
      "https://scontent-waw1-1.cdninstagram.com/v/t51.2885-19/289178626_2948624415436487_8628462265740965676_n.jpg?stp=dst-jpg_s150x150&_nc_ht=scontent-waw1-1.cdninstagram.com&_nc_cat=111&_nc_ohc=RMw17--nQjQAX9egPN5&edm=ACWDqb8BAAAA&ccb=7-5&oh=00_AfDaufPWuIPO25xdfBIUT358e8RoESXI19tmBjL8sx68hA&oe=650A6332&_nc_sid=ee9879"
    );
  }, []); // This effect runs only once when the component mounts

  return (
    <View>
      <TouchableOpacity
        style={styles.PersonBg}
        onLongPress={() => setMenuVisible(true)} // Display the menu on long-press
      >
        {menuVisible && <PersonMenu />}{" "}
        {/* Render the menu when menuVisible is true */}
        <Image
          style={styles.PersonIcon}
          source={{ uri: props.ImagePath }}
        />{" "}
        {/* Display the user's profile image */}
        <Text style={styles.PersonNick}>{props.Nickname}</Text>{" "}
        {/* Display the user's nickname */}
      </TouchableOpacity>
    </View>
  );
};
