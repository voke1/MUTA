import React, { useState, useEffect, useContext } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  SafeAreaView,
  Alert,
  StyleSheet,
  Pressable,
  Dimensions,
} from "react-native";

import { FONTS, SIZES, COLORS, icons, images } from "../../constants";
import {
  FormInput,
  CustomSwitch,
  TextButton,
  TextIconButton,
  Header,
  IconButton,
} from "../../components";
import { AuthContext } from "../../contexts/auth/state";

const EmailLoginScreen = ({ navigation }) => {
  const { width, height } = Dimensions.get("window");
  const { login } = useContext(AuthContext);

  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");

  function checkEnabled() {
    if (email && password) {
      return false;
    }
    return true;
  }

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
      {renderHeader()}
      <View
        style={{
          flex: 1,
          // justifyContent: "center",
          // alignItems: "center",
          backgroundColor: COLORS.primary,

          marginHorizontal: SIZES.padding * 1.2,
        }}
        // activeOpacity={1}
      >
        <View style={{ flex: 1 }}>
          <Text
            style={{
              color: COLORS.white,
              fontSize: 25,
              lineHeight: 40,
              fontFamily: "Poppins-Bold",
              textAlign: "center",
              fontWeight: "bold",
              marginBottom: SIZES.padding * 2,
            }}
          >
            Enter name and password{" "}
          </Text>

          <Text style={{ fontWeight: "bold", color: COLORS.lightGray }}>
            Email
          </Text>
          <FormInput
            inputStyle={{
              fontFamily: "Poppins-Regular",
              // fontStyle: "normal",
              // fontWeight: "700",
              fontSize: 14,
              lineHeight: 21,
            }}
            //   label="Email"
            onChange={(value) => {
              //validate email
              setEmail(value);
            }}
            value={email}
            editable={true}
            keyboardType="name"
            autoCompleteType="name"
            placeholder={""}
            containerStyle={{
              borderBottomWidth: 1,
              borderColor: COLORS.lightGray,
              height: SIZES.radius * 2.4,
              justifyContent: "center",
              alignItems: "center",
              marginBottom: SIZES.padding,
              color: COLORS.white,
            }}
            inputContainerStyle={{
              backgroundColor: COLORS.primary,
              color: COLORS.white,
            }}
          />

          <Text style={{ fontWeight: "bold", color: COLORS.lightGray }}>
            Password
          </Text>
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
            onChange={(value) => {
              //validate email
              setPassword(value);
            }}
            value={password}
            keyboardType="name"
            autoCompleteType="name"
            placeholder={""}
            containerStyle={{
              borderBottomWidth: 1,
              borderColor: COLORS.lightGray,
              height: SIZES.radius * 2.4,
              justifyContent: "center",
              alignItems: "center",
              marginBottom: SIZES.base,
            }}
            secureTextEntry={true}
            inputContainerStyle={{
              backgroundColor: COLORS.primary,
            }}
            appendComponent={
              <TouchableOpacity
                style={{
                  width: SIZES.radius,
                  alignItems: "flex-end",
                  justifyContent: "center",
                }}
                onPress={() => setPassword("")}
              >
                {password && (
                  <Image
                    style={{
                      height: 15,
                      width: 15,
                      tintColor: COLORS.gray,
                    }}
                    source={icons.cancel}
                  />
                )}
              </TouchableOpacity>
            }
          />
          <Text
            style={{
              color: COLORS.lightGray,
              fontSize: 12,
              lineHeight: 24,
              fontFamily: "Poppins-Medium",
              fontWeight: "bold",
              marginBottom: SIZES.padding * 5,
            }}
          >
            Forgot your password?
          </Text>

          <TextButton
            // label={label}
            isDisabled={!(email && password)}
            label={"LOGIN"}
            buttonContainerStyle={{
              height: SIZES.radius * 2.4,
              alignItems: "center",
              // marginTop: 12,
              borderRadius: SIZES.base * 1.2,
              backgroundColor:( email && password)
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
            onPress={() => login({ email, password })}
          />

          <View
            style={{
              flexDirection: "row",
              justifyContent: "center",
              marginTop: SIZES.base,
              marginBottom: SIZES.padding * 2,
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
              Don't have a Muta Account?
            </Text>
            <TextButton
              label="Sign up"
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
            />
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  SigninText: {
    fontSize: 12,
    // fontWeight: "bold",
    textAlign: "center",
    color: "white",
    // fontStyle: "normal",
    // fontFamily: "Poppins",
    lineHeight: 18,
    // fontStyle: "normal",
    fontWeight: "600",
  },
  ProfilePixStyle: {
    justifyContent: "center",
    alignItems: "center",
    // flex: 1,
    backgroundColor: COLORS.primary,
    // width: SIZES.width * 0.3,
    height: 100,
    width: 100,
    margin: 2,
    borderRadius: 50,
    position: "absolute",
    top: -65,
    zIndex: 5,
  },
});

export default EmailLoginScreen;
