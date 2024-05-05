import React, { useContext } from "react";
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
import { AuthContext } from "../../contexts/auth/state";

const ProficiencyScreen = ({ navigation }) => {
  const { width, height } = Dimensions.get("window");
  const [prof, setProf] = React.useState("");
  const { proficiency, setProficiency } = useContext(AuthContext);
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

      <Text
        style={{
          // fontWeight: "bold",
          fontSize: 20,

          // textAlign: "center",
          // paddingTop: SIZES.padding,
          color: COLORS.white,
          // textAlign: "center",
          paddingHorizontal: SIZES.base * 1.2,
          fontWeight: "bold",
          marginBottom: SIZES.padding * 3,
        }}
      >
        How would you rate your proficiency in the Language?
      </Text>

      <View
        style={{
          flex: 1,
          paddingHorizontal: SIZES.base * 1.5,
        }}
      >
        <View style={{ flex: 1 }}>
          {dummyData.proficiencies.map((item, index) => {
            return (
              <CardItem
                key={item.id} // Use a unique identifier (e.g., item.id) as the key
                title={item.title}
                title2={item.subTitle}
                titleStyle={{
                  fontSize: 16,
                  lineHeight: 21,
                  // textAlign: "center",
                  color: COLORS.white,
                  fontWeight: "bold",
                }}
                title2Style={{
                  color: COLORS.lightGray,
                  fontSize: 12,
                }}
                titleContainerStyle={{
                  alignItems: "flex-start",
                  marginHorizontal: SIZES.base,
                  justifyContent: "center",
                }}
                containerStyle={{
                  height: SIZES.padding * 4,
                  // backgroundColor: COLORS.lightPrimary,
                  justifyContent: "center",
                  alignItems: "center",
                  borderColor: COLORS.white,
                  borderWidth: prof === item.title ? 3 : 1,
                  marginBottom: SIZES.padding,
                  borderRadius: SIZES.base * 1.2,
                  paddingHorizontal: SIZES.padding,
                }}
                leftComponent={
                  <IconLabel
                    icon={item.icon}
                    containerStyle={{
                      width: 30,
                      height: 30,
                      justifyContent: "center",
                      alignItems: "center",
                      // backgroundColor: "#E09B3D",
                      borderRadius: 40,
                    }}
                    iconStyle={{
                      width: 25,
                      height: 25,
                    }}
                  />
                }
                rightComponent={
                  prof === item.title && (
                    <View
                      style={{
                        width: 40,
                        height: 40,
                        justifyContent: "center",
                        alignItems: "center",
                      }}
                    >
                      <Image
                        resizeMode="contain"
                        source={icons.checkBtn}
                        style={{ width: 30, height: 30 }}
                      />
                    </View>
                  )
                }
                onPress={() => {
                  setProf(item.title);
                }}
              />
            );
          })}
        </View>
        <TextButton
          // label={label}
          label={"CONTINUE"}
          isDisabled={!prof}
          buttonContainerStyle={{
            height: SIZES.radius * 2.4,
            alignItems: "center",
            alignSelf: "flex-end",
            // marginTop: 12,
            borderRadius: SIZES.base * 1.2,
            backgroundColor: prof ? COLORS.secondary : `rgba(76, 166, 168, .4)`,
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
          onPress={() => {
            setProficiency(prof);
            navigation.navigate("signup");
          }}
        />
      </View>
    </SafeAreaView>
  );
};

export default ProficiencyScreen;
