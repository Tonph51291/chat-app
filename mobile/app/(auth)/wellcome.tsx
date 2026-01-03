import React from "react";
import { Image, TouchableOpacity } from "react-native";
import Box from "../../components/Box"; // Điều chỉnh đường dẫn theo project của bạn
import TextApp from "../../components/TextApp"; // Điều chỉnh đường dẫn theo project của bạn
import {
  scale,
  verticalScale,
  responsiveFont,
  responsiveSpacingVertical,
} from "../../constants/responsive"; // File responsive bạn vừa cung cấp
import { SafeAreaView } from "react-native-safe-area-context";
import { router } from "expo-router";

const OnboardingScreen = () => {
  return (
    <Box flex={1} backgroundColor="#F8F9FA" paddingHorizontal={scale(20)}>
      <SafeAreaView style={{ flex: 1 }}>
        {/* 1. Nút Bỏ qua */}
        <Box alignSelf="flex-end" marginTop={responsiveSpacingVertical(10)}>
          <TouchableOpacity>
            <TextApp
              value="Bỏ qua"
              color="#6C757D"
              fontSize={responsiveFont(16)}
              fontWeight="500"
            />
          </TouchableOpacity>
        </Box>

        {/* 2. Ảnh minh họa chính */}
        <Box
          width="100%"
          height={verticalScale(300)}
          marginTop={responsiveSpacingVertical(20)}
          radius={scale(24)}
          overflow="hidden"
        >
          <Image
            source={{
              uri: "https://img.freepik.com/free-vector/floating-chat-bubbles-concept-illustration_114360-5553.jpg",
            }}
            style={{ width: "100%", height: verticalScale(300) }}
            resizeMode="cover"
          />
        </Box>

        {/* 3. Icon Logo & Nội dung văn bản */}
        <Box alignItems="center" marginTop={responsiveSpacingVertical(30)}>
          {/* Giả lập Icon trung tâm */}
          <Box
            backgroundColor="#007AFF"
            padding={scale(12)}
            radius={scale(12)}
            marginBottom={responsiveSpacingVertical(20)}
          >
            <Image
              source={{
                uri: "https://cdn-icons-png.flaticon.com/512/589/589708.png",
              }}
              style={{
                width: scale(30),
                height: scale(30),
                tintColor: "white",
              }}
            />
          </Box>

          <TextApp
            value="Trò chuyện không giới hạn"
            fontSize={responsiveFont(26)}
            fontWeight="bold"
            color="#000"
            textAlign="center"
          />

          <Box marginTop={responsiveSpacingVertical(15)}>
            <TextApp
              value="Kết nối với bạn bè và gia đình mọi lúc, mọi nơi với tốc độ nhanh chóng và bảo mật cao."
              fontSize={responsiveFont(15)}
              color="#6C757D"
              textAlign="center"
            />
          </Box>
        </Box>

        {/* 4. Dấu chấm phân trang (Pagination) */}
        <Box
          flexDirection="row"
          justifyContent="center"
          marginTop={responsiveSpacingVertical(30)}
          alignItems="center"
        >
          <Box
            width={scale(25)}
            height={verticalScale(6)}
            backgroundColor="#007AFF"
            radius={10}
            marginRight={scale(5)}
          />
          <Box
            width={scale(6)}
            height={verticalScale(6)}
            backgroundColor="#DEE2E6"
            radius={10}
            marginRight={scale(5)}
          />
          <Box
            width={scale(6)}
            height={verticalScale(6)}
            backgroundColor="#DEE2E6"
            radius={10}
          />
        </Box>

        {/* 5. Nút Đăng ký và Đăng nhập */}
        <Box
          flex={1}
          justifyContent="flex-end"
          marginBottom={responsiveSpacingVertical(20)}
        >
          <TouchableOpacity activeOpacity={0.8}>
            <Box
              backgroundColor="#007AFF"
              paddingVertical={responsiveSpacingVertical(15)}
              radius={scale(12)}
              alignItems="center"
            >
              <TextApp
                value="Đăng ký ngay"
                color="white"
                fontWeight="bold"
                fontSize={responsiveFont(16)}
              />
            </Box>
          </TouchableOpacity>

          <Box
            flexDirection="row"
            justifyContent="center"
            marginTop={responsiveSpacingVertical(20)}
          >
            <TextApp
              value="Đã có tài khoản? "
              color="#000"
              fontSize={responsiveFont(14)}
            />
            <TouchableOpacity
              activeOpacity={0.8}
              onPress={() => router.push("/(auth)/login")}
            >
              <TextApp
                value="Đăng nhập"
                color="#007AFF"
                fontWeight="bold"
                fontSize={responsiveFont(14)}
              />
            </TouchableOpacity>
          </Box>
        </Box>
      </SafeAreaView>
    </Box>
  );
};

export default OnboardingScreen;
