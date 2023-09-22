// Viktor Hraboviuk

import React, { useState, useEffect } from "react";
import { SafeAreaView } from "react-native";
import { styles } from "./ProfileGroupStyles";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { GroupHead } from "./GroupHeadProfile";
import { GroupBio } from "./GroupBio";
import { User, UserProps } from "./UserProfile";
import { GroupName } from "./GroupNameInput";
import { EditGroupPhoto } from "./EditGroupPhoto";
import { AddMember } from "./AddMember";

export default function GroupProfile() {
  // State variables to manage group information
  const [GroupHeadNameExample, setGroupHeadNameExample] = useState("");
  const [bioTextExample, setBioTextExample] = useState("");
  const [menuVisible, setMenuVisible] = useState(false); // Initially hidden menu
  const [GroupNameExample, setGroupNameExample] = useState("");
  const [GroupImage, setGroupImage] = useState(
    "https://scontent-waw1-1.cdninstagram.com/v/t51.2885-19/289178626_2948624415436487_8628462265740965676_n.jpg?stp=dst-jpg_s150x150&_nc_ht=scontent-waw1-1.cdninstagram.com&_nc_cat=111&_nc_ohc=RMw17--nQjQAX9egPN5&edm=ACWDqb8BAAAA&ccb=7-5&oh=00_AfDaufPWuIPO25xdfBIUT358e8RoESXI19tmBjL8sx68hA&oe=650A6332&_nc_sid=ee9879"
  );

  // Sample user data
  const user: UserProps = {
    ImagePath:
      "https://scontent-waw1-1.cdninstagram.com/v/t51.2885-19/289178626_2948624415436487_8628462265740965676_n.jpg?stp=dst-jpg_s150x150&_nc_ht=scontent-waw1-1.cdninstagram.com&_nc_cat=111&_nc_ohc=RMw17--nQjQAX9egPN5&edm=ACWDqb8BAAAA&ccb=7-5&oh=00_AfDaufPWuIPO25xdfBIUT358e8RoESXI19tmBjL8sx68hA&oe=650A6332&_nc_sid=ee9879",
    Nickname: "User",
  };

  return (
    <GestureHandlerRootView style={styles.wrapper}>
      <SafeAreaView style={styles.container}>
        {/* Components for displaying group information */}
        <GroupHead setGroupHeadNameExample={setGroupHeadNameExample} />
        <EditGroupPhoto />
        <GroupName setGroupNameExample={setGroupNameExample} />
        <GroupBio setBioTextExample={setBioTextExample} />
        <AddMember />

        {/* Display sample user components */}
        <User ImagePath={user.ImagePath} Nickname="Ждун" />
        <User ImagePath={user.ImagePath} Nickname="Aboba" />
      </SafeAreaView>
    </GestureHandlerRootView>
  );
}
