import React from "react";
import { Image, TouchableOpacity, ScrollView } from "react-native";
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
            <TouchableOpacity>
              {/* Icon mũi tên quay lại */}
              <Image
                source={{
                  uri: "https://cdn-icons-png.flaticon.com/512/271/271220.png",
                }}
                style={{
                  width: scale(20),
                  height: scale(20),
                  tintColor: "#212529",
                }}
              />
            </TouchableOpacity>

            <TouchableOpacity>
              <TextApp
                value="Đăng nhập"
                color="#007AFF"
                fontWeight="bold"
                fontSize={responsiveFont(16)}
              />
            </TouchableOpacity>
          </Box>

          <Box
            paddingHorizontal={responsiveSpacing(20)}
            marginTop={responsiveSpacingVertical(20)}
          >
            {/* 2. Tiêu đề chính */}
            <TextApp
              value="Tham gia cuộc trò chuyện"
              fontSize={responsiveFont(28)}
              fontWeight="bold"
              color="#000"
            />
            <TextApp
              value="Tạo tài khoản để bắt đầu trò chuyện với bạn bè ngay lập tức."
              fontSize={responsiveFont(15)}
              color="#6C757D"
              marginTop={responsiveSpacingVertical(8)}
              marginBottom={responsiveSpacingVertical(30)}
            />

            {/* 3. Form nhập liệu */}
            <InputApp
              label="Họ và tên"
              placeholder="Nguyễn Văn A"
              iconRight={
                <Image
                  source={{
                    uri: "https://cdn-icons-png.flaticon.com/512/1077/1077063.png",
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
              label="Địa chỉ Email"
              placeholder="example@email.com"
              keyboardType="email-address"
              iconRight={
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
              placeholder="********"
              secureTextEntry
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

            <InputApp
              label="Xác nhận mật khẩu"
              placeholder="********"
              secureTextEntry
              iconRight={
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
            />

            {/* 4. Điều khoản dịch vụ */}
            <Box
              flexDirection="row"
              marginTop={responsiveSpacingVertical(10)}
              paddingRight={scale(20)}
            >
              <Box
                width={scale(20)}
                height={scale(20)}
                borderWidth={1}
                borderColor="#ADB5BD"
                radius={4}
                marginRight={scale(10)}
              />
              <Box flex={1}>
                <TextApp fontSize={responsiveFont(13)} color="#6C757D">
                  <TextApp
                    value="Bằng việc tạo tài khoản, bạn đồng ý với "
                    fontSize={responsiveFont(13)}
                    color="#6C757D"
                  />
                  <TextApp
                    value="Điều khoản dịch vụ"
                    color="#007AFF"
                    fontSize={responsiveFont(13)}
                    fontWeight="500"
                  />
                  <TextApp
                    value=" và "
                    fontSize={responsiveFont(13)}
                    color="#6C757D"
                  />
                  <TextApp
                    value="Chính sách bảo mật"
                    color="#007AFF"
                    fontSize={responsiveFont(13)}
                    fontWeight="500"
                  />
                  <TextApp
                    value=" của chúng tôi."
                    fontSize={responsiveFont(13)}
                    color="#6C757D"
                  />
                </TextApp>
              </Box>
            </Box>

            {/* 5. Nút Đăng ký */}
            <TouchableOpacity activeOpacity={0.8}>
              <Box
                backgroundColor="#007AFF"
                radius={scale(12)}
                height={scale(52)}
                alignItems="center"
                justifyContent="center"
                marginTop={responsiveSpacingVertical(30)}
              >
                <TextApp
                  value="Đăng ký"
                  color="white"
                  fontWeight="bold"
                  fontSize={responsiveFont(16)}
                />
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
                value=" Hoặc tiếp tục với "
                color="#ADB5BD"
                fontSize={responsiveFont(12)}
                marginHorizontal={scale(10)}
              />
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
          </Box>
        </ScrollView>
      </SafeAreaView>
    </Box>
  );
};

export default RegisterScreen;
