import { Text } from "react-native";
import React, { memo } from "react";
import { FlexBoxProp } from "../constants/FlexBoxProp";

interface TextProps extends FlexBoxProp {
  value: string;
  color?: string;
  fontSize?: number;
  fontFamily?: string;
  margin?: number;
  marginTop?: number;
  marginBottom?: number;
  marginLeft?: number;
  marginRight?: number;
  fontWeight?:
    | "normal"
    | "bold"
    | "100"
    | "200"
    | "300"
    | "400"
    | "500"
    | "600"
    | "700"
    | "800"
    | "900"
    | undefined;
  alignSelf?:
    | "auto"
    | "flex-start"
    | "flex-end"
    | "center"
    | "stretch"
    | "baseline";
  marginVertical?: number;
  marginHorizontal?: number;
  textAlign?: "auto" | "left" | "right" | "center" | "justify";
  textAlignVertical?: "auto" | "center" | "top" | "bottom";
}
const TextComponent = (props: TextProps) => {
  const {
    value,
    color,
    fontFamily,
    fontSize,
    marginTop,
    marginBottom,
    marginLeft,
    marginRight,
    alignSelf,
    marginVertical,
    marginHorizontal,
    margin,
    fontWeight,
    textAlign,
    textAlignVertical,
  } = props;
  return (
    <Text
      {...props}
      style={[
        {
          color: color ?? "black",
          fontFamily: fontFamily,
          fontSize: fontSize ?? 14,
          marginTop: marginTop ?? null,
          marginBottom: marginBottom ?? null,
          marginLeft: marginLeft ?? null,
          marginRight: marginRight ?? null,
          alignSelf: alignSelf ?? undefined,
          marginVertical: marginVertical ?? 0,
          marginHorizontal: marginHorizontal ?? 0,
          margin: margin ?? 0,
          fontWeight: fontWeight,
          textAlign: textAlign,
          textAlignVertical: textAlignVertical,
        },
      ]}
    >
      {value}
    </Text>
  );
};

export default memo(TextComponent);
