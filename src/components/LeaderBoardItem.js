import React from "react";
import { View, Text, Pressable, TouchableOpacity } from "react-native";
import { FONTS, SIZES, COLORS } from "../constants";

const LeaderBoardItem = ({
  onPress,
  containerStyle,
  title,
  leftComponent,
  rightComponent,
  titleStyle,
  titleContainerStyle,
  title2,
  title2Style,
  position,
  positionTitleStyle,
  positionTitleContainerStyle,
}) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={{ flexDirection: "row", ...containerStyle }}
    >
      <View
        style={{
          height: 20,
          // width: 25,
          minWidth: 25,
          alignSelf: "flex-start",
          marginLeft: -SIZES.padding,
          marginRight: 10,
          borderBottomRightRadius: SIZES.base,
          borderTopLeftRadius: SIZES.base,
          justifyContent: "center",
          alignItems: "center",
          ...positionTitleContainerStyle,
        }}
      >
        <Text
          style={{
            fontWeight: "bold",
            fontSize: 10,
            color: COLORS.primary,
            ...positionTitleStyle,
          }}
        >
          {position}
        </Text>
      </View>
      {/* left */}
      {leftComponent}

      {/* Title */}
      <View
        style={{
          flex: 1,
          alignItems: "center",
          justifyContent: "center",
          ...titleContainerStyle,
        }}
      >
        <Text style={{ ...titleStyle }}>{title}</Text>
        {title2 && <Text style={{ ...title2Style }}>{title2}</Text>}
      </View>

      {/* Right */}
      {rightComponent}
    </TouchableOpacity>
  );
};

export default LeaderBoardItem;
