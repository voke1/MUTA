import React from "react";
import { View, Text, Pressable, TouchableOpacity } from "react-native";
import { FONTS } from "../constants";

const CardItem = ({
  onPress,
  containerStyle,
  title,
  leftComponent,
  rightComponent,
  titleStyle,
  titleContainerStyle,
  title2,
  title2Style,
}) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={{ flexDirection: "row", ...containerStyle }}
    >
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

export default CardItem;
