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

const SpokenLanguageScreen = ({ navigation }) => {
  const { width, height } = Dimensions.get("window");
  const [lang, setLang] = React.useState("");
  const { setSpokenLang, spokenLanguage } = useContext(AuthContext);

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

      <View style={{ paddingHorizontal: SIZES.base * 1.5 }}>
        {dummyData.languageSelection.map((item) => (
          <CardItem
            key={item.id} // Use a unique identifier as the key
            title={item.title}
            titleStyle={{
              fontSize: 16,
              lineHeight: 21,
              color: COLORS.white,
              fontWeight: "bold",
            }}
            titleContainerStyle={{
              alignItems: "flex-start",
              marginHorizontal: SIZES.base,
              justifyContent: "center",
            }}
            containerStyle={{
              height: SIZES.padding * 3,
              justifyContent: "center",
              alignItems: "center",
              borderColor: COLORS.white,
              borderWidth: lang === item.title ? 3 : 1,
              marginBottom: SIZES.padding * 2,
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
                  borderRadius: 40,
                }}
                iconStyle={{
                  width: 30,
                  height: 30,
                }}
              />
            }
            rightComponent={
              lang === item.title && (
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
              setLang(item.title);
            }}
          />
        ))}

        <TextButton
          // label={label}
          label={"CONTINUE"}
          isDisabled={!lang}
          buttonContainerStyle={{
            height: SIZES.radius * 2.4,
            alignItems: "center",
            alignSelf: "flex-end",
            // marginTop: 12,
            borderRadius: SIZES.base * 1.2,
            backgroundColor: lang ? COLORS.secondary : `rgba(76, 166, 168, .4)`,
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
            setSpokenLang(lang);
            navigation.navigate("selectedLanguage");
          }}
        />
      </View>
    </SafeAreaView>
  );
};

export default SpokenLanguageScreen;
