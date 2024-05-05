import React, { useState, useContext } from "react";
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
import { AuthContext } from "../../contexts/auth/state";
const LoginScreen = ({ navigation }) => {
  const { width, height } = Dimensions.get("window");
  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState("");

  const { login } = useContext(AuthContext);

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

  const renderLogin = () => {
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

            textAlign: "center",
            fontWeight: "bold",
          }}
        >
          Log in to Muta
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
            // fontStyle: "normal",
            // fontWeight: "700",
            fontSize: 14,
            lineHeight: 21,
          }}
          //   label="Email"
          editable={true}
          onChange={(value) => {
            //validate email
            setEmail(value);
            if (validateEmail(value)) {
              setEmailError(""); // Clear error message if email is valid
            } else {
              setEmailError("Please enter a valid email address");
            }
          }}
          value={email}
          autoCompleteType="name"
          placeholder={"Enter email address"}
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
          }}
          appendComponent={
            <TouchableOpacity
              style={{
                width: SIZES.radius,
                alignItems: "flex-end",
                justifyContent: "center",
              }}
              onPress={() => setEmail("")}
            >
              {email && (
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
          label={"LOG IN WITH EMAIL"}
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

            fontWeight: "bold",
          }}
          onPress={() => navigation.navigate("emailLogin", { email })}
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

              fontWeight: "bold",
            }}
            onPress={() => {
              navigation.navigate("spokenLanguage");
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
          {renderLogin()}
        </>
      }
    </SafeAreaView>
  );
};

export default LoginScreen;
