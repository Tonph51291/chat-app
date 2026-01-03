import React from "react";
import {
  Image,
  ImageBackground,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import Box from "@/components/Box";
import TextApp from "@/components/TextApp";
import InputApp from "@/components/InputApp";
import {
  scale,
  verticalScale,
  responsiveFont,
  responsiveSpacing,
  responsiveSpacingVertical,
} from "@/constants/responsive";
import { SafeAreaView } from "react-native-safe-area-context";
import { router } from "expo-router";

const LoginScreen = () => {
  return (
    <Box flex={1} backgroundColor="#F8F9FA">
      <SafeAreaView style={{ flex: 1 }}>
        <ScrollView showsVerticalScrollIndicator={false}>
          {/* 1. Header Image Section */}
          <Box height={verticalScale(240)} width="100%">
            <ImageBackground
              source={{
                uri: "https://img.freepik.com/free-vector/flat-design-relying-concept-illustration_23-2148949023.jpg",
              }}
              style={{
                width: "100%",
                height: verticalScale(240),
                justifyContent: "flex-end",
              }}
              imageStyle={{
                borderBottomLeftRadius: scale(30),
                borderBottomRightRadius: scale(30),
              }}
            >
              <Box padding={scale(20)}>
                <TextApp
                  value="Kết nối mọi lúc, mọi nơi"
                  color="white"
                  fontWeight="600"
                  fontSize={responsiveFont(16)}
                />
              </Box>
            </ImageBackground>
          </Box>

          <Box
            paddingHorizontal={responsiveSpacing(20)}
            marginTop={responsiveSpacingVertical(24)}
          >
            {/* 2. Tiêu đề */}
            <TextApp
              value="Chào mừng trở lại!"
              fontSize={responsiveFont(28)}
              fontWeight="bold"
              color="#000"
            />
            <TextApp
              value="Vui lòng đăng nhập để tiếp tục cuộc trò chuyện."
              fontSize={responsiveFont(14)}
              color="#6C757D"
              marginTop={responsiveSpacingVertical(8)}
              marginBottom={responsiveSpacingVertical(24)}
            />

            {/* 3. Form nhập liệu */}
            <InputApp
              label="Email hoặc Số điện thoại"
              placeholder="user@example.com"
              iconLeft={
                <Image
                  source={{
                    uri: "https://cdn-icons-png.flaticon.com/512/542/542689.png",
                  }}
                  style={{
                    width: scale(18),
                    height: scale(18),
                    tintColor: "#ADB5BD",
                  }}
                />
              }
            />

            <InputApp
              label="Mật khẩu"
              placeholder="Nhập mật khẩu của bạn"
              secureTextEntry
              iconLeft={
                <Image
                  source={{
                    uri: "https://cdn-icons-png.flaticon.com/512/3064/3064155.png",
                  }}
                  style={{
                    width: scale(18),
                    height: scale(18),
                    tintColor: "#ADB5BD",
                  }}
                />
              }
              iconRight={
                <Image
                  source={{
                    uri: "https://cdn-icons-png.flaticon.com/512/709/709612.png",
                  }}
                  style={{
                    width: scale(18),
                    height: scale(18),
                    tintColor: "#ADB5BD",
                  }}
                />
              }
            />

            <Box alignSelf="flex-end">
              <TouchableOpacity>
                <TextApp
                  value="Quên mật khẩu?"
                  color="#007AFF"
                  fontSize={responsiveFont(13)}
                  fontWeight="500"
                />
              </TouchableOpacity>
            </Box>

            {/* 4. Nút Đăng nhập chính */}
            <TouchableOpacity activeOpacity={0.8}>
              <Box
                backgroundColor="#007AFF"
                radius={scale(12)}
                height={scale(52)}
                alignItems="center"
                justifyContent="center"
                marginTop={responsiveSpacingVertical(24)}
              >
                <TextApp
                  value="Đăng nhập"
                  color="white"
                  fontWeight="bold"
                  fontSize={responsiveFont(16)}
                />
              </Box>
            </TouchableOpacity>

            {/* 5. Face ID Option */}
            <TouchableOpacity>
              <Box
                flexDirection="row"
                justifyContent="center"
                alignItems="center"
                marginTop={responsiveSpacingVertical(20)}
              >
                <Image
                  source={{
                    uri: "https://cdn-icons-png.flaticon.com/512/1077/1077012.png",
                  }}
                  style={{
                    width: scale(20),
                    height: scale(20),
                    tintColor: "#007AFF",
                    marginRight: scale(8),
                  }}
                />
                <TextApp
                  value="Đăng nhập bằng Face ID"
                  color="#007AFF"
                  fontWeight="500"
                />
              </Box>
            </TouchableOpacity>

            {/* 6. Divider */}
            <Box
              flexDirection="row"
              alignItems="center"
              marginVertical={responsiveSpacingVertical(30)}
            >
              <Box flex={1} height={1} backgroundColor="#E9ECEF" />
              <TextApp
                value=" Hoặc đăng nhập với "
                color="#ADB5BD"
                fontSize={responsiveFont(12)}
                marginHorizontal={scale(10)}
              />
              <Box flex={1} height={1} backgroundColor="#E9ECEF" />
            </Box>

            {/* 7. Social Login Buttons */}
            <Box
              flexDirection="row"
              justifyContent="space-between"
              marginBottom={responsiveSpacingVertical(30)}
            >
              <TouchableOpacity style={{ flex: 0.48 }}>
                <Box
                  flexDirection="row"
                  alignItems="center"
                  justifyContent="center"
                  borderWidth={1}
                  borderColor="#E9ECEF"
                  radius={scale(12)}
                  height={scale(48)}
                >
                  <Image
                    source={{
                      uri: "https://cdn-icons-png.flaticon.com/512/300/300221.png",
                    }}
                    style={{
                      width: scale(18),
                      height: scale(18),
                      marginRight: scale(10),
                    }}
                  />
                  <TextApp value="Google" fontWeight="600" />
                </Box>
              </TouchableOpacity>

              <TouchableOpacity style={{ flex: 0.48 }}>
                <Box
                  flexDirection="row"
                  alignItems="center"
                  justifyContent="center"
                  borderWidth={1}
                  borderColor="#E9ECEF"
                  radius={scale(12)}
                  height={scale(48)}
                >
                  <Image
                    source={{
                      uri: "https://cdn-icons-png.flaticon.com/512/0/747.png",
                    }}
                    style={{
                      width: scale(18),
                      height: scale(18),
                      marginRight: scale(10),
                    }}
                  />
                  <TextApp value="Apple" fontWeight="600" />
                </Box>
              </TouchableOpacity>
            </Box>

            {/* 8. Footer */}
            <Box
              flexDirection="row"
              justifyContent="center"
              marginBottom={responsiveSpacingVertical(40)}
            >
              <TextApp value="Chưa có tài khoản? " color="#6C757D" />
              <TouchableOpacity onPress={() => router.push("/(auth)/register")}>
                <TextApp
                  value="Đăng ký ngay"
                  color="#007AFF"
                  fontWeight="bold"
                />
              </TouchableOpacity>
            </Box>
          </Box>
        </ScrollView>
      </SafeAreaView>
    </Box>
  );
};

export default LoginScreen;
