import { Platform } from "react-native";
import colors from "./colors";

export function _textStyle(textSize, textColor, fontFamily) {
  return {
    textAlign: "center",
    fontFamily: fontFamily,
    fontSize: textSize || 12,
    color: textColor || colors.theme.light.lightenGrey
  };
}

export function container(height, width, borderRadius) {
  return {
    width: width,
    height: height,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: borderRadius
  };
}

export function normalTypeContainer(
  height,
  width,
  borderRadius,
  backgroundColor
) {
  return {
    width: width,
    height: height,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: borderRadius,
    backgroundColor: backgroundColor
  };
}

export default {
  shadowStyle: {
    ...Platform.select({
      ios: {
        shadowRadius: 7,
        shadowOpacity: 1,
        shadowColor: "rgba(93, 93, 93, 0.25)",
        shadowOffset: {
          width: 2,
          height: 2
        }
      },
      android: {
        elevation: 2
      }
    })
  },
  column: { flexDirection: "column" }

  //   linearContainerShadowStyle: {
  //     ...Platform.select({
  //       ios: {
  //         elevation: 1,
  //         shadowOpacity: 0.3,
  //         shadowRadius: 3,
  //         shadowOffset: { width: 2, height: 3 },
  //         shadowColor: colors.theme.light.shadowColor
  //       },
  //       android: {
  //         position: "relative",
  //         alignItems: "center",
  //         justifyContent: "center"
  //       }
  //     })
  //   }
};
