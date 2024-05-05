import React from "react";
import {
  View,
  Text,
  Alert,
  Image,
  FlatList,
  TouchableOpacity,
  ScrollView,
  Dimensions,
  SafeAreaView,
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
  TextIconLabel,
  LeaderBoardItem,
} from "../../components";
const HomeScreen = ({ navigation }) => {
  const [transactions, setTransactions] = React.useState("");
  const { width, height } = Dimensions.get("window");
  const [selectedSeek, setSelectedSeek] = React.useState("");

  const walletTrans = [
    { title: "Title here", amount: 4353, icon: null, percent: 45 },
    { title: "Title here", amount: 4353, icon: null, percent: 45 },
    { title: "Title here", amount: 4353, icon: null, percent: 45 },
    { title: "Title here", amount: 4353, icon: null, percent: 45 },
  ];

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
        rightComponent={
          <View style={{ flexDirection: "row" }}>
            <IconButton
              icon={icons.notification}
              containerStyle={{
                width: 40,
                height: 40,
                justifyContent: "center",
                alignItems: "center",
              }}
              iconStyle={{
                width: 17,
                height: 17,
              }}
              onPress={() => console.log("pressed")}
            />
            <IconButton
              icon={icons.user}
              containerStyle={{
                width: 40,
                height: 40,
                justifyContent: "center",
                alignItems: "center",
              }}
              iconStyle={{
                width: 30,
                height: 30,
              }}
              onPress={() => console.log("pressed")}
            />
          </View>
        }
        leftComponent={
          <TextIconButton
            label="Yoruba Lessons"
            iconPosition="RIGHT"
            icon={icons.dropCarat}
            containerStyle={{
              alignItems: "center",
              justifyContent: "space-between",
              height: 40,
            }}
            labelStyle={{
              color: COLORS.white,
              fontSize: 14,
              lineHeight: 21,
              fontFamily: "Poppins-Regular",
              paddingRight: SIZES.base,
              fontWeight: "bold",
            }}
            iconStyle={{
              width: 10,
              height: 10,
              marginRight: SIZES.padding,
            }}
            onPress={() => console.log("PRESSED")}
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
      <ScrollView
        showsVerticalScrollIndicator={false}
        style={{
          marginHorizontal: SIZES.base,
          flex: 1,
          marginBottom: SIZES.padding * 5,
        }}
      >
        {renderHeader()}
        <>
          <View
            style={{
              // flexDirection: "row",
              backgroundColor: COLORS.lightPrimary,
              height: SIZES.height * 0.23,
              // marginTop: SIZES.base,
              borderRadius: SIZES.padding,
              justifyContent: "center",
              alignItems: "center",
              flexDirection: "row",
            }}
          >
            <View style={{ flex: 2, paddingLeft: SIZES.padding }}>
              <TextIconLabel
                label="Intermediate"
                iconPosition="LEFT"
                icon={icons.level}
                containerStyle={{
                  alignItems: "center",
                  borderRadius: SIZES.padding,
                  marginBottom: SIZES.base,
                }}
                labelStyle={{
                  color: COLORS.lightGray,
                  fontSize: 14,
                  lineHeight: 21,
                  fontFamily: "Poppins-Regular",
                  fontWeight: "bold",
                }}
                iconStyle={{
                  width: 20,
                  height: 20,
                  marginRight: SIZES.padding,
                }}
                onPress={() => console.log("PRESSED")}
              />
              <TextIconLabel
                label="Lesson 2"
                iconPosition="LEFT"
                icon={icons.lesson}
                containerStyle={{
                  alignItems: "center",
                  borderRadius: SIZES.padding,
                  marginBottom: SIZES.base,
                }}
                labelStyle={{
                  color: COLORS.lightGray,
                  fontSize: 14,
                  lineHeight: 21,
                  fontFamily: "Poppins-Regular",
                  fontWeight: "bold",
                }}
                iconStyle={{
                  width: 20,
                  height: 20,
                  marginRight: SIZES.padding,
                }}
                onPress={() => console.log("PRESSED")}
              />
              <View style={{ flexDirection: "row", alignItems: "center" }}>
                <View
                  style={{
                    backgroundColor: COLORS.lightGray,
                    borderRadius: SIZES.padding,
                    height: 6,
                    marginBottom: SIZES.base,
                    width: "80%",
                    marginRight: SIZES.base,
                  }}
                >
                  <View
                    style={{
                      backgroundColor: COLORS.orange,
                      width: "52%",
                      borderRadius: SIZES.padding,
                      justifyContent: "center",
                      alignItems: "center",
                      height: 6,
                    }}
                  ></View>
                </View>
                <Text
                  style={{
                    color: "white",
                    fontFamily: "Poppins-Bold",
                    fontSize: 14,
                    lineHeight: 21,
                    fontWeight: "bold",
                    marginBottom: SIZES.base,
                  }}
                >
                  52%
                </Text>
              </View>

              <TextIconButton
                label="Start learning"
                iconPosition="RIGHT"
                icon={icons.google}
                containerStyle={{
                  alignItems: "center",
                  borderRadius: SIZES.padding,
                  backgroundColor: COLORS.lightSecondary,
                  paddingHorizontal: SIZES.base,
                  marginBottom: SIZES.base,
                  justifyContent: "space-between",
                  height: SIZES.radius * 1.6,
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
            </View>
            <View style={{ flex: 1 }}>
              <Image
                source={icons.lessonIcon}
                resizeMode="contain"
                style={{
                  width: SIZES.padding * 8,
                  height: SIZES.padding * 6,
                }}
              />
            </View>
          </View>

          <CardItem
            title={`Review your most recent lesson`}
            titleStyle={{
              fontFamily: "Poppins-Medium",
              fontSize: 16,
              lineHeight: 21,
              color: COLORS.primary,
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
              backgroundColor: COLORS.lightOrange,
              justifyContent: "center",
              alignItems: "center",
              borderRadius: SIZES.base * 1.2,
              paddingHorizontal: SIZES.padding,
              marginVertical: SIZES.padding * 2,
            }}
            leftComponent={
              <IconLabel
                icon={icons.book}
                containerStyle={{
                  width: 40,
                  height: 40,
                  justifyContent: "center",
                  alignItems: "center",
                  // backgroundColor: "#E09B3D",
                  borderRadius: 40,
                }}
                iconStyle={{
                  width: 40,
                  height: 40,
                }}
              />
            }
            rightComponent={
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
                  source={icons.carat}
                  style={{ width: 15, height: 15 }}
                />
              </View>
            }
          />
          <TextIconButton
            label="Leaderboard"
            iconPosition="RIGHT"
            icon={icons.carat}
            containerStyle={{
              alignItems: "center",
              borderRadius: SIZES.padding,
              marginVertical: SIZES.base,
              paddingHorizontal: 0,
              justifyContent: "space-between",
            }}
            labelStyle={{
              color: COLORS.white,
              fontSize: 14,
              lineHeight: 21,
              fontFamily: "Poppins-Regular",
              fontWeight: "bold",
            }}
            iconStyle={{
              width: 15,
              height: 15,
            }}
            onPress={() => console.log("PRESSED")}
          />
        </>
        <View style={{ flex: 1 }}>
          {dummyData.leaderBoard.map((item, index) => {
            return (
              <LeaderBoardItem
                position={item.position}
                title={item.title}
                title2={item.subTitle}
                titleStyle={{
                  fontFamily: "Poppins-Medium",
                  fontSize: 16,
                  lineHeight: 21,
                  // textAlign: "center",
                  fontSize: SIZES.h3,
                  color: item.title === "Me" ? COLORS.primary : COLORS.white,
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
                positionTitleStyle={{
                  color: item.title === "Me" ? COLORS.white : COLORS.primary,
                  padding: 2,
                }}
                positionTitleContainerStyle={{
                  backgroundColor:
                    item.title === "Me" ? COLORS.lightPrimary : COLORS.white,
                  padding: 2,
                }}
                containerStyle={{
                  height: SIZES.padding * 4,
                  backgroundColor:
                    item.title === "Me"
                      ? COLORS.lightOrange
                      : COLORS.lightPrimary,
                  justifyContent: "center",
                  alignItems: "center",
                  marginBottom: SIZES.base,
                  borderRadius: SIZES.base * 1.2,
                  paddingHorizontal: SIZES.padding,
                }}
                leftComponent={
                  <IconLabel
                    icon={item.icon}
                    containerStyle={{
                      width: 60,
                      height: 60,
                      justifyContent: "center",
                      alignItems: "center",
                      // backgroundColor: "#E09B3D",
                      borderRadius: 40,
                    }}
                    iconStyle={{
                      width: 60,
                      height: 60,
                    }}
                  />
                }
                rightComponent={
                  <View
                    style={{
                      width: 50,
                      height: 50,
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  >
                    <Text
                      style={{
                        color: COLORS.orange,
                        fontWeight: "bold",
                        fontSize: 12,
                      }}
                    >
                      15.832
                    </Text>
                  </View>
                }
                onPress={() => {
                  setSelectedSeek(item.title);
                }}
              />
            );
          })}
        </View>
        <TextIconButton
          label="Upgrade now to unlock all lessons"
          iconPosition="LEFT"
          icon={icons.unlock}
          containerStyle={{
            height: SIZES.radius * 1.8,
            alignItems: "center",
            borderRadius: SIZES.padding,
            backgroundColor: COLORS.lightSecondary,
            paddingHorizontal: SIZES.padding,
            marginVertical: SIZES.padding,
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
      </ScrollView>
    </SafeAreaView>
  );
};

export default HomeScreen;
