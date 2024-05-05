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

const ProficiencyScreen = ({ navigation }) => {
  const { width, height } = Dimensions.get("window");
  const [selectedSeek, setSelectedSeek] = React.useState("");

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

      <Text
        style={{
          // fontWeight: "bold",
          fontSize: 20,
          fontFamily: "Poppins-Bold",
          // textAlign: "center",
          // paddingTop: SIZES.padding,
          color: COLORS.white,
          // textAlign: "center",
          paddingHorizontal: SIZES.base * 1.2,
          fontWeight: "bold",
          marginBottom: SIZES.padding* 3,
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
                title={item.title}
                title2={item.subTitle}
                titleStyle={{
                  fontFamily: "Poppins-Medium",
                  fontSize: 16,
                  lineHeight: 21,
                  // textAlign: "center",
                  fontSize: SIZES.h3,
                  color: COLORS.white,
                  fontWeight: "bold",
                }}
                title2Style={{
                  color: COLORS.lightGray,
                  fontSize: 12,
                  fontFamily: "Poppins-Medium",
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
                  borderWidth: selectedSeek === item.title ? 3 : 1,
                  marginBottom: SIZES.padding ,
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
                  selectedSeek === item.title && (
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
                  setSelectedSeek(item.title);
                }}
              />
            );
          })}
        </View>
        <TextButton
          // label={label}
          label={"CONTINUE"}
          disabled={false}
          buttonContainerStyle={{
            height: SIZES.radius * 2.4,
            alignItems: "center",
            alignSelf: "flex-end",
            // marginTop: 12,
            borderRadius: SIZES.base * 1.2,
            backgroundColor: COLORS.secondary,
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
          onPress={() => navigation.navigate("signup")}
        />
      </View>
    </SafeAreaView>
  );
};

export default ProficiencyScreen;
