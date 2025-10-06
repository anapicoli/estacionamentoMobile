// src/splashscreen/index.jsx
import React, { useEffect, useRef } from "react";

import { Container, Logo, Text } from "./style";
import { Animated } from "react-native";

export default function Splash({ navigation }) {
  const bgColor = useRef(new Animated.Value(0)).current;
  const logoOpacity = useRef(new Animated.Value(0)).current;
  const textOpacity = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.sequence([
      Animated.timing(bgColor, {
        toValue: 1,
        duration: 1000,
        useNativeDriver: false,
      }),
      Animated.timing(logoOpacity, {
        toValue: 1,
        duration: 800,
        useNativeDriver: true,
      }),
      Animated.timing(textOpacity, {
        toValue: 1,
        duration: 800,
        useNativeDriver: true,
      }),
    ]).start(() => {
      setTimeout(() => {
        navigation.replace("Login");
      }, 1500);
    });
  }, []);

  const backgroundColor = bgColor.interpolate({
    inputRange: [0, 1],
    outputRange: ["#000000", "#F7CB05"],
  });

  return (
    <Container style={{ backgroundColor }}>
      <Animated.View style={{ opacity: logoOpacity }}>
        <Logo
          source={require("../../assets/images/logo.png")} resizeMode="contain"/>
      </Animated.View>

      <Animated.View style={{ opacity: textOpacity }}>
        <Text>ESTACIONAMENTO</Text>
      </Animated.View>
    </Container>
  );
}
