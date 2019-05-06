import React from "react";
import PropTypes from "prop-types";
import colors from "./styles/colors";
import { Text, View } from "react-native";
import Ripple from "react-native-material-ripple";
import Icon from "react-native-dynamic-vector-icons";
import LinearGradient from "react-native-linear-gradient";
import styles, {
  container,
  textStyle,
  normalTypeContainer
} from "./styles/CardButton.style";

const CardButton = props => {
  function renderContainer() {
    const {
      text,
      iconName,
      iconSize,
      iconType,
      iconColor,
      textSize,
      textColor,
      fontFamily,
      iconComponent,
      textComponent
    } = props;
    return (
      <View style={styles.column}>
        {iconComponent || (
          <View
            style={{
              alignItems: "center",
              justifyContent: "center"
            }}
          >
            <Icon
              size={iconSize}
              name={iconName}
              type={iconType}
              color={iconColor}
            />
          </View>
        )}
        {textComponent || (
          <Text style={textStyle(textSize, textColor, fontFamily)}>{text}</Text>
        )}
      </View>
    );
  }

  function renderGradient() {
    const {
      end,
      start,
      width,
      height,
      onPress,
      locations,
      rippleColor,
      shadowStyle,
      borderRadius,
      gradientColors,
      rippleContainerBorderRadius
    } = props;
    return (
      <Ripple
        onPress={onPress}
        style={shadowStyle || styles.shadowStyle}
        rippleColor={rippleColor}
        rippleContainerBorderRadius={rippleContainerBorderRadius}
      >
        <LinearGradient
          end={end}
          start={start}
          locations={locations}
          colors={gradientColors}
          style={container(height, width, borderRadius)}
        >
          {renderContainer()}
        </LinearGradient>
      </Ripple>
    );
  }

  function renderNormal() {
    const {
      width,
      height,
      onPress,
      rippleColor,
      shadowStyle,
      borderRadius,
      backgroundColor,
      rippleContainerBorderRadius
    } = props;
    return (
      <Ripple
        onPress={onPress}
        rippleColor={rippleColor}
        rippleContainerBorderRadius={rippleContainerBorderRadius}
      >
        <View
          style={[
            normalTypeContainer(height, width, borderRadius, backgroundColor),
            shadowStyle || styles.shadowStyle
          ]}
        >
          {renderContainer()}
        </View>
      </Ripple>
    );
  }

  const { gradient } = props;
  const renderCardButton = gradient ? renderGradient() : renderNormal();
  return renderCardButton;
};

CardButton.propTypes = {
  end: PropTypes.object,
  text: PropTypes.string,
  start: PropTypes.object,
  width: PropTypes.number,
  gradient: PropTypes.bool,
  height: PropTypes.number,
  iconName: PropTypes.string,
  iconSize: PropTypes.number,
  iconType: PropTypes.string,
  iconColor: PropTypes.string,
  rippleColor: PropTypes.string,
  borderRadius: PropTypes.number,
  gradientColors: PropTypes.array,
  backgroundColor: PropTypes.string,
  rippleContainerBorderRadius: PropTypes.number
};

CardButton.defaultProps = {
  width: 90,
  height: 90,
  text: "Test",
  iconSize: 36,
  gradient: true,
  borderRadius: 20,
  iconName: "traffic",
  end: { x: 0, y: 1 },
  start: { x: 0.5, y: 0 },
  iconType: "MaterialIcons",
  backgroundColor: "#fcfcfc",
  rippleContainerBorderRadius: 20,
  rippleColor: colors.theme.light.primary,
  iconColor: colors.theme.light.lightenGrey,
  gradientColors: ["#f9f7b4", "#f7c77e", "#e8ba6b"]
};

export default CardButton;
