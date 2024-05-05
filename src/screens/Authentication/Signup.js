import React, { useState } from "react";
import {
  Alert,
  BackHandler,
  Easing,
  Image,
  Text,
  TouchableOpacity,
  View,
  SafeAreaView,
  Dimensions,
} from "react-native";
import {
  LineDivider,
  TextButton,
  Header,
  IconButton,
  TextIconButton,
  FormInput,
} from "../../components";
import { COLORS, icons, images, SIZES } from "../../constants";

const Signup = ({ navigation }) => {
  const { width, height } = Dimensions.get("window");
  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState("");

  const validateEmail = (input) => {
    const pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return pattern.test(input);
  };

  function renderHeader() {
    return (
      <Header
        containerStyle={{
          justifyContent: "center",
          alignItems: "center",
          height: 70,
          paddingHorizontal: SIZES.base * 1,
        }}
        titleStyle={{
          fontSize: 18,
          lineHeight: 27,
          fontFamily: "Poppins-Bold",
        }}
        rightComponent={<View style={{ width: 40, height: 40 }}></View>}
        leftComponent={
          <IconButton
            icon={icons.backBtn}
            containerStyle={{
              width: 40,
              height: 40,
              justifyContent: "center",
              alignItems: "center",
            }}
            iconStyle={{
              width: 20,
              height: 20,
            }}
            onPress={() => navigation.goBack()}
          />
        }
      />
    );
  }

  const renderSignupScreen = () => {
    return (
      <View
        style={{
          justifyContent: "space-evenly",
          backgroundColor: COLORS.primary,
          paddingHorizontal: SIZES.base * 1.2,
          flex: 1,
        }}
      >
        <Text
          style={{
            color: COLORS.white,
            fontSize: 25,
            lineHeight: 40,
            fontFamily: "Poppins-Bold",
            textAlign: "center",
            fontWeight: "bold",
          }}
        >
          Sign up and start learning right away!
        </Text>
        <TextIconButton
          label="SIGN UP WITH GOOGLE"
          iconPosition="LEFT"
          icon={icons.google}
          containerStyle={{
            height: SIZES.radius * 2.4,
            alignItems: "center",
            borderRadius: SIZES.base,
            backgroundColor: COLORS.white,
            paddingHorizontal: SIZES.padding,
          }}
          labelStyle={{
            color: COLORS.primary,
            fontSize: 14,
            lineHeight: 21,
            fontFamily: "Poppins-Regular",
            paddingLeft: SIZES.base,
            fontWeight: "bold",
          }}
          iconStyle={{
            width: 30,
            height: 30,
            marginRight: SIZES.padding,
          }}
          onPress={() => console.log("PRESSED")}
        />
        <TextIconButton
          label="SIGN UP WITH FACEBOOK"
          iconPosition="LEFT"
          icon={icons.facebook}
          containerStyle={{
            height: SIZES.radius * 2.4,
            alignItems: "center",
            borderRadius: SIZES.base,
            backgroundColor: COLORS.white,
            paddingHorizontal: SIZES.padding,
          }}
          labelStyle={{
            color: COLORS.primary,
            fontSize: 14,
            lineHeight: 21,
            fontFamily: "Poppins-Regular",
            paddingLeft: SIZES.base,
            fontWeight: "bold",
          }}
          iconStyle={{
            width: 30,
            height: 30,
            marginRight: SIZES.padding,
          }}
          onPress={() => console.log("PRESSED")}
        />
        <View
          style={{
            marginHorizontal: SIZES.base,
            flexDirection: "row",
            marginTop: SIZES.base,
            justifyContent: "space-between",
          }}
        >
          <LineDivider
            lineStyle={{
              marginTop: SIZES.base,
              width: "42%",
              backgroundColor: COLORS.lightGray,
            }}
          />
          <Text
            style={{
              fontSize: 12,
              lineHeight: 18,
              fontFamily: "Poppins-Medium",
              fontWeight: "bold",
              color: COLORS.lightGray,
            }}
          >
            OR
          </Text>
          <LineDivider
            lineStyle={{
              marginTop: SIZES.base,
              width: "42%",
              backgroundColor: COLORS.lightGray,
            }}
          />
        </View>
        <FormInput
          inputStyle={{
            fontFamily: "Poppins-Regular",
            // fontStyle: "normal",
            // fontWeight: "700",
            fontSize: 14,
            lineHeight: 21,
          }}
          //   label="Email"
          editable={true}
          value={email}
          label="First name"
          keyboardType="name"
          autoCompleteType="name"
          onChange={(value) => {
            //validate email
            setEmail(value);
            if (validateEmail(value)) {
              setEmailError(""); // Clear error message if email is valid
            } else {
              setEmailError("Please enter a valid email address");
            }
          }}
          placeholder="Enter email address"
          containerStyle={{
            borderBottomWidth: 1,
            borderColor: COLORS.lightGray,
            height: SIZES.radius * 2.4,
            justifyContent: "center",
            alignItems: "center",
            marginBottom: emailError ? null : SIZES.padding,
          }}
          inputContainerStyle={{
            backgroundColor: COLORS.primary,

            // borderWidth: 1,
            // borderColor: "gray",
            //   borderRadius: SIZES.radius * 3,
          }}
        />
        {emailError ? (
          <Text
            style={{
              color: "red",
              fontSize: 12,
              marginBottom: SIZES.padding,
              fontWeight: "bold",
            }}
          >
            {emailError}
          </Text>
        ) : null}

        <TextButton
          // label={label}
          label={"SIGN UP WITH EMAIL"}
          isDisabled={emailError}
          buttonContainerStyle={{
            height: SIZES.radius * 2.4,
            alignItems: "center",
            alignSelf: "flex-end",
            // marginTop: 12,
            borderRadius: SIZES.base * 1.2,
            backgroundColor: !emailError
              ? COLORS.secondary
              : `rgba(76, 166, 168, .4)`,
            // marginHorizontal: 40,
            // marginVertical: SIZES.base,
            width: "100%",
            borderWidth: 2,
            borderColor: COLORS.lightGray,
          }}
          labelStyle={{
            color: COLORS.primary,
            fontSize: 14,
            lineHeight: 21,
            fontFamily: "Poppins-Regular",
            fontWeight: "bold",
          }}
          onPress={() => {
            navigation.navigate("emailAuth", { email });
          }}
        />
        <View
          style={{
            flexDirection: "row",
            justifyContent: "center",
            marginTop: SIZES.base,
          }}
        >
          <Text
            style={{
              color: COLORS.lightGray,
              fontSize: 12,
              lineHeight: 24,
              fontFamily: "Poppins-Medium",
              fontWeight: "bold",
            }}
          >
            Already have an Account?
          </Text>
          <TextButton
            label="Login"
            buttonContainerStyle={{
              marginLeft: SIZES.base * 0.5,
            }}
            labelStyle={{
              color: COLORS.secondary,
              fontSize: 12,
              lineHeight: 24,
              fontFamily: "Poppins-Medium",
              fontWeight: "bold",
            }}
            onPress={() => {
              navigation.navigate("login");
            }}
          />
        </View>
      </View>
    );
  };

  return (
    <SafeAreaView
      style={{
        width,
        height,
        backgroundColor: COLORS.primary,
        flexGrow: 1,
      }}
      edges={["top"]}
    >
      {
        <>
          {renderHeader()}
          {renderSignupScreen()}
        </>
      }
    </SafeAreaView>
  );
};

export default Signup;
