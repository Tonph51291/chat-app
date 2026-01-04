import React from "react";
import { ImageBackground, TouchableOpacity, ScrollView } from "react-native";
// Import Expo Icons
import {
  Ionicons,
  MaterialCommunityIcons,
  FontAwesome5,
} from "@expo/vector-icons";

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
                  color="white"
                  weight="600"
                  fontSize={responsiveFont(16)}
                >
                  Kết nối mọi lúc, mọi nơi
                </TextApp>
              </Box>
            </ImageBackground>
          </Box>

          <Box
            paddingHorizontal={responsiveSpacing(20)}
            marginTop={responsiveSpacingVertical(24)}
          >
            {/* 2. Tiêu đề */}
            <TextApp fontSize={responsiveFont(28)} weight="700" color="#000">
              Chào mừng trở lại!
            </TextApp>
            <TextApp
              fontSize={responsiveFont(14)}
              color="#6C757D"
              marginTop={responsiveSpacingVertical(8)}
              marginBottom={responsiveSpacingVertical(24)}
            >
              Vui lòng đăng nhập để tiếp tục cuộc trò chuyện.
            </TextApp>

            {/* 3. Form nhập liệu */}
            <InputApp
              label="Email hoặc Số điện thoại"
              placeholder="user@example.com"
              iconLeft={
                <Ionicons
                  name="mail-outline"
                  size={scale(20)}
                  color="#ADB5BD"
                />
              }
            />

            <InputApp
              label="Mật khẩu"
              placeholder="Nhập mật khẩu của bạn"
              secureTextEntry
              iconLeft={
                <Ionicons
                  name="lock-closed-outline"
                  size={scale(20)}
                  color="#ADB5BD"
                />
              }
              iconRight={
                <Ionicons name="eye-outline" size={scale(20)} color="#ADB5BD" />
              }
            />

            <Box alignSelf="flex-end">
              <TouchableOpacity>
                <TextApp
                  color="#007AFF"
                  fontSize={responsiveFont(13)}
                  weight="500"
                >
                  Quên mật khẩu?
                </TextApp>
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
                paddingVertical={responsiveSpacing(10)}
              >
                <TextApp
                  color="white"
                  weight="700"
                  fontSize={responsiveFont(16)}
                >
                  Đăng nhập
                </TextApp>
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
                <MaterialCommunityIcons
                  name="face-recognition"
                  size={scale(24)}
                  color="#007AFF"
                  style={{ marginRight: scale(8) }}
                />
                <TextApp color="#007AFF" weight="500">
                  Đăng nhập bằng Face ID
                </TextApp>
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
                color="#ADB5BD"
                fontSize={responsiveFont(12)}
                marginHorizontal={scale(10)}
              >
                {" Hoặc đăng nhập với "}
              </TextApp>
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
                  paddingVertical={responsiveSpacing(10)}
                >
                  <FontAwesome5
                    name="google"
                    size={scale(18)}
                    color="#DB4437"
                    style={{ marginRight: scale(10) }}
                  />
                  <TextApp weight="600">Google</TextApp>
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
                  paddingVertical={responsiveSpacing(10)}
                >
                  <Ionicons
                    name="logo-apple"
                    size={scale(20)}
                    color="#000"
                    style={{ marginRight: scale(10) }}
                  />
                  <TextApp weight="600">Apple</TextApp>
                </Box>
              </TouchableOpacity>
            </Box>

            {/* 8. Footer */}
            <Box
              flexDirection="row"
              justifyContent="center"
              marginBottom={responsiveSpacingVertical(40)}
            >
              <TextApp color="#6C757D">Chưa có tài khoản? </TextApp>
              <TouchableOpacity onPress={() => router.push("/(auth)/register")}>
                <TextApp color="#007AFF" weight="700">
                  Đăng ký ngay
                </TextApp>
              </TouchableOpacity>
            </Box>
          </Box>
        </ScrollView>
      </SafeAreaView>
    </Box>
  );
};

export default LoginScreen;
