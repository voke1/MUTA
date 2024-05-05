import React from "react";
import {
  View,
  Text,
  Image,
  FlatList,
  TouchableOpacity,
  Pressable,
  StyleSheet,
  Modal,
  Alert,
  SafeAreaView,
  ScrollView,
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
  CustomSwitch,
  TextButton,
  FormInput,
  TextIconLabel,
} from "../../components";

const SelectedLanguage = ({ navigation }) => {
  const [selectedSeek, setSelectedSeek] = React.useState("");

  function renderHeader() {
    return (
      <Header
        containerStyle={{
          justifyContent: "center",
          alignItems: "center",
          height: 70,
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
      //   visible={isSuccessVisible}
      style={{
        flex: 1,

        backgroundColor: COLORS.primary,
      }}
    >
      {renderHeader()}

      <Text
        style={{
          // fontWeight: "bold",
          fontSize: 20,
          fontFamily: "Poppins-Bold",
          lineHeight: 40,
          // textAlign: "center",
          // paddingTop: SIZES.padding,
          color: COLORS.white,
          // textAlign: "center",
          paddingHorizontal: SIZES.base,
          fontWeight: "bold",
        }}
      >
        I want to learn...
      </Text>

      <ScrollView
        contentContainerStyle={{
          //   flex: 1,
          // flexDirection: "row",
          // flexWrap: "wrap",
          // justifyContent: "center",
          alignItems: "center",
          marginTop: SIZES.base,
          // backgroundColor: "red",
          // paddingTop: SIZES.padding,
          paddingHorizontal: SIZES.base,
          // height: SIZES.height / 3,
          // paddingTop: 0,
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <View
          style={{
            flex: 1,
            flexWrap: "wrap",
            flexDirection: "row",
            marginBottom: SIZES.base * 2,
          }}
        >
          {dummyData.spokenLanguage.map((item, index) => {
            return (
              <TouchableOpacity
                key={item.id.toString()} // Use index as the unique key
                style={{
                  justifyContent: "center",
                  padding: SIZES.base,
                  borderRadius: SIZES.base * 0.8,
                  height: SIZES.padding * 7,
                  width: SIZES.padding * 8,
                  margin: SIZES.base * 0.5,
                  borderColor:
                    selectedSeek === item.title
                      ? COLORS.secondary
                      : COLORS.lightGray,
                  borderWidth: selectedSeek === item.title ? 2 : 1,
                }}
                onPress={() => {
                  setSelectedSeek(item.title);
                }}
              >
                <Image
                  source={item.icon}
                  style={{
                    alignSelf: "center",
                    width: 50,
                    height: 50,
                    tintColor:
                      selectedSeek === item.title
                        ? COLORS.secondary
                        : COLORS.lightGray,
                  }}
                  resizeMode="contain"
                />
                <Text style={styles.giftTitle}>{item.title}</Text>
              </TouchableOpacity>
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
            marginBottom: SIZES.padding,
          }}
          labelStyle={{
            color: COLORS.primary,
            fontSize: 14,
            lineHeight: 21,
            fontFamily: "Poppins-Regular",
            fontWeight: "bold",
          }}
          onPress={() => navigation.navigate("proficiency")}
        />
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  giftTitle: {
    fontFamily: "Poppins-Medium",
    fontSize: 16,
    lineHeight: 24,
    textAlign: "center",
    paddingTop: SIZES.base,
    fontWeight: "bold",
    color: COLORS.lightGray,
  },
  priceTitle: {
    fontFamily: "Poppins",
    fontSize: 11,
    lineHeight: 16,
    color: "#959595",
  },
  priceValue: {
    fontFamily: "Poppins-Bold",
    fontSize: 12,
    lineHeight: 18,
    color: COLORS.primary,
  },
  ProfilePixStyle: {
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: COLORS.primary,
    width: SIZES.height * 0.2,
    height: SIZES.height * 0.2,
    borderRadius: (SIZES.height * 0.2) / 2,
    borderWidth: SIZES.base,
    borderColor: "red",
  },
  dropdown1BtnStyle: {
    width: "100%",
    height: 55,
    // flex: 1,
    backgroundColor: "#FFF",
    // borderRadius: SIZES.radius,
    // borderWidth: 1,
    // borderColor: "#444",
    // marginTop: SIZES.radius,
    // marginRight: SIZES.base*2,
  },
  dropdown1BtnTxtStyle: {
    fontFamily: "Poppins-Regular",
    fontSize: 14,
    lineHeight: 21,
    textAlign: "left",
  },
  dropdown1DropdownStyle: { backgroundColor: "#EFEFEF" },
  dropdown1RowStyle: {
    backgroundColor: "#EFEFEF",
    borderBottomColor: "#C5C5C5",
  },
  dropdown1RowTxtStyle: {
    color: "#444",
    textAlign: "left",
    paddingHorizontal: SIZES.base,
  },

  dropdown2BtnStyle: {
    width: "70%",
    height: 50,
    backgroundColor: "#444",
    borderRadius: 8,
  },
  dropdown3RowStyle: {
    backgroundColor: "slategray",
    borderBottomColor: "#444",
    height: 50,
  },
  dropdown3RowChildStyle: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
    paddingHorizontal: 18,
  },
  dropdownRowImage: { width: 45, height: 45, resizeMode: "cover" },
  dropdown3RowTxt: {
    color: "#F1F1F1",
    textAlign: "center",
    fontWeight: "bold",
    fontSize: 24,
    marginHorizontal: 12,
  },
});

export default SelectedLanguage;
