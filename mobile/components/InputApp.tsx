import React, { memo } from "react";
import { TextInput, TextInputProps, TouchableOpacity } from "react-native";
import Box from "./Box";
import TextApp from "./TextApp";
import {
  scale,
  responsiveFont,
  responsiveSpacingVertical,
} from "@/constants/responsive";

interface InputAppProps extends TextInputProps {
  label?: string;
  iconLeft?: React.ReactNode;
  iconRight?: React.ReactNode;
  onPressRight?: () => void;
}

const InputApp = ({
  label,
  iconLeft,
  iconRight,
  onPressRight,
  ...props
}: InputAppProps) => {
  return (
    <Box marginBottom={responsiveSpacingVertical(16)}>
      {label && (
        <TextApp
          value={label}
          fontWeight="600"
          fontSize={responsiveFont(14)}
          marginBottom={responsiveSpacingVertical(8)}
          color="#343A40"
        />
      )}
      <Box
        flexDirection="row"
        alignItems="center"
        borderWidth={1}
        borderColor="#E9ECEF"
        radius={scale(12)}
        paddingHorizontal={scale(12)}
        height={scale(52)}
        backgroundColor="#FFFFFF"
      >
        {iconLeft && <Box marginRight={scale(10)}>{iconLeft}</Box>}

        <TextInput
          style={{
            flex: 1,
            fontSize: responsiveFont(14),
            color: "#212529",
            height: "100%",
          }}
          placeholderTextColor="#ADB5BD"
          {...props}
        />

        {iconRight && (
          <TouchableOpacity onPress={onPressRight}>
            <Box marginLeft={scale(10)}>{iconRight}</Box>
          </TouchableOpacity>
        )}
      </Box>
    </Box>
  );
};

export default memo(InputApp);
