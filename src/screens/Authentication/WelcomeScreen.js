import React from "react";
import {
  View,
  Text,
  Alert,
  Image,
  FlatList,
  TouchableOpacity,
  ScrollView,
  SafeAreaView,
  Dimensions,
  ImageBackground,
} from "react-native";
import {
  images,
  FONTS,
  SIZES,
  COLORS,
  icons,
  constants,
  dummyData,
} from "../../constants";

import {
  IconButton,
  Header,
  IconLabel,
  TextIconButton,
  CardItem,
  LineDivider,
  TextButton,
} from "../../components";

const WelcomeScreen = ({ navigation }) => {
  const { width, height } = Dimensions.get("window");

  return (

    <ImageBackground
      source={icons.welcome}
      style={{
        flex: 1,
        height,
        width,
      }}
    >
      <View
        style={{ marginTop: SIZES.padding * 12, padding: SIZES.base * 1.2 }}
      >
        <Text
          style={{
            color: COLORS.lightGray,
            fontSize: 16,
            lineHeight: 24,
            fontFamily: "Poppins-Medium",
          }}
        >
          Learn Languages from
        </Text>
        <Image
          source={icons.africa}
          resizeMode="contain"
          style={{
            width: SIZES.padding * 10,
            height: SIZES.padding * 5,
            marginBottom: SIZES.padding * 0.5,
          }}
        />
        <Text
          style={{
            color: COLORS.lightGray,
            fontSize: 16,
            lineHeight: 24,
            fontFamily: "Poppins-Medium",
            marginBottom: SIZES.padding * 3,
          }}
        >
          Muta helps you learn African Languages in the easiest way
        </Text>
        <TextButton
          // label={label}
          label={"GET STARTED"}
          disabled={false}
          buttonContainerStyle={{
            height: SIZES.radius * 2.4,
            alignItems: "center",
            alignSelf: "flex-end",
            // marginTop: 12,
            borderRadius: SIZES.base * 1.2,
            backgroundColor: COLORS.secondary,
            marginBottom: SIZES.padding,
            // marginHorizontal: 40,
            // marginVertical: SIZES.base,
            width: "100%",
          }}
          labelStyle={{
            color: COLORS.primary,
            fontSize: 14,
            lineHeight: 21,
            fontFamily: "Poppins-Regular",
            fontWeight: "bold",
          }}
          onPress={() => navigation.navigate("spokenLanguage")}
        />
        <TextButton
          // label={label}
          label={"LOG IN"}
          disabled={false}
          buttonContainerStyle={{
            height: SIZES.radius * 2.4,
            alignItems: "center",
            alignSelf: "flex-end",
            // marginTop: 12,
            borderRadius: SIZES.base * 1.2,
            backgroundColor: COLORS.primary,
            // marginHorizontal: 40,
            // marginVertical: SIZES.base,
            borderColor: COLORS.secondary,
            borderWidth: 1,
            width: "100%",
            marginBottom: SIZES.padding * 2,
          }}
          labelStyle={{
            color: COLORS.secondary,
            fontSize: 14,
            lineHeight: 21,
            fontFamily: "Poppins-Regular",
            fontWeight: "bold",
          }}
          onPress={() => navigation.navigate("login")}
        />
        <View
          style={{
            flexDirection: "row",
            justifyContent: "center",
            marginTop: SIZES.padding * 2,
          }}
        >
          <Text
            style={{
              color: COLORS.lightGray,
              fontSize: 13,
              fontFamily: "Poppins-Medium",
              textAlign: "center",
            }}
          >
            By continuing on this app, you agree to Muta's{" "}
            <Text
              style={{
                color: COLORS.secondary,
                fontSize: 13,
                fontFamily: "Poppins-Medium",
              }}
            >
              Terms of Service
            </Text>{" "}
            and{" "}
            <Text
              style={{
                color: COLORS.secondary,
                fontSize: 13,
                fontFamily: "Poppins-Medium",
              }}
            >
              Privacy Policy
            </Text>
          </Text>
        </View>
      </View>
    </ImageBackground>
  );
};

export default WelcomeScreen;
