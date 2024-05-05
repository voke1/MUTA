import React from "react";
import { View, Text, Image } from "react-native";
import { FONTS, SIZES } from "../constants";

const IconLabel = ({ containerStyle, icon, iconStyle, label, labelStyle, children }) => {
  return (
    <View
      style={{
        flexDirection: "row",
        // paddingVertical: SIZES.base,
        // paddingHorizontal: SIZES.radius,
        // borderRadius: SIZES.radius,
        ...containerStyle,
      }}
    >
        <Image source={icon} resizeMode="contain" style={{  ...iconStyle}}/>
        <Text style={{ ...FONTS.body3, ...labelStyle}}>{label}</Text>
        {children}
    </View>
  );
};

export default IconLabel;
