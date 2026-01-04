import React from "react";
import { TouchableOpacity, ScrollView } from "react-native";
// Import Expo Icons
import {
  Ionicons,
  FontAwesome5,
  MaterialCommunityIcons,
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

const RegisterScreen = () => {
  return (
    <Box flex={1} backgroundColor="#F8F9FA">
      <SafeAreaView style={{ flex: 1 }}>
        <ScrollView
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{
            paddingBottom: responsiveSpacingVertical(20),
          }}
        >
          {/* 1. Header: Nút quay lại và Đăng nhập */}
          <Box
            flexDirection="row"
            justifyContent="space-between"
            alignItems="center"
            paddingHorizontal={responsiveSpacing(20)}
            paddingVertical={responsiveSpacingVertical(10)}
          >
            <TouchableOpacity onPress={() => router.back()}>
              {/* Icon mũi tên quay lại */}
              <Ionicons name="arrow-back" size={scale(24)} color="#212529" />
            </TouchableOpacity>

            <TouchableOpacity onPress={() => router.push("/(auth)/login")}>
              <TextApp
                color="#007AFF"
                weight="700"
                fontSize={responsiveFont(16)}
              >
                Đăng nhập
              </TextApp>
            </TouchableOpacity>
          </Box>

          <Box
            paddingHorizontal={responsiveSpacing(20)}
            marginTop={responsiveSpacingVertical(20)}
          >
            {/* 2. Tiêu đề chính */}
            <TextApp fontSize={responsiveFont(28)} weight="700" color="#000">
              Tham gia cuộc trò chuyện
            </TextApp>
            <TextApp
              fontSize={responsiveFont(15)}
              color="#6C757D"
              marginTop={responsiveSpacingVertical(8)}
              marginBottom={responsiveSpacingVertical(30)}
            >
              Tạo tài khoản để bắt đầu trò chuyện với bạn bè ngay lập tức.
            </TextApp>

            {/* 3. Form nhập liệu */}
            <InputApp
              label="Họ và tên"
              placeholder="Nguyễn Văn A"
              iconRight={
                <Ionicons
                  name="person-outline"
                  size={scale(20)}
                  color="#ADB5BD"
                />
              }
            />

            <InputApp
              label="Địa chỉ Email"
              placeholder="example@email.com"
              keyboardType="email-address"
              iconRight={
                <Ionicons
                  name="mail-outline"
                  size={scale(20)}
                  color="#ADB5BD"
                />
              }
            />

            <InputApp
              label="Mật khẩu"
              placeholder="********"
              secureTextEntry
              iconRight={
                <Ionicons
                  name="lock-closed-outline"
                  size={scale(20)}
                  color="#ADB5BD"
                />
              }
            />

            <InputApp
              label="Xác nhận mật khẩu"
              placeholder="********"
              secureTextEntry
              iconRight={
                <MaterialCommunityIcons
                  name="shield-check-outline"
                  size={scale(20)}
                  color="#ADB5BD"
                />
              }
            />

            {/* 5. Nút Đăng ký */}
            <TouchableOpacity activeOpacity={0.8}>
              <Box
                backgroundColor="#007AFF"
                radius={scale(12)}
                height={scale(52)}
                alignItems="center"
                justifyContent="center"
                marginTop={responsiveSpacingVertical(30)}
                paddingVertical={responsiveSpacing(10)}
              >
                <TextApp
                  color="white"
                  weight="700"
                  fontSize={responsiveFont(16)}
                >
                  Đăng ký
                </TextApp>
              </Box>
            </TouchableOpacity>

            {/* 6. Divider */}
            <Box
              flexDirection="row"
              alignItems="center"
              marginVertical={responsiveSpacingVertical(25)}
            >
              <Box flex={1} height={1} backgroundColor="#E9ECEF" />
              <TextApp
                color="#ADB5BD"
                fontSize={responsiveFont(12)}
                marginHorizontal={scale(10)}
              >
                {" Hoặc tiếp tục với "}
              </TextApp>
              <Box flex={1} height={1} backgroundColor="#E9ECEF" />
            </Box>

            {/* 7. Social Login */}
            <Box flexDirection="row" justifyContent="space-between">
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
          </Box>
        </ScrollView>
      </SafeAreaView>
    </Box>
  );
};

export default RegisterScreen;
