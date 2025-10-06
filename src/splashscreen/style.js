
import styled from "styled-components/native";
import { Colors } from "../theme/theme.js";

export const Container = styled(Animated.View)`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

export const Logo = styled.Image`
  width: 316px;
  height: 293px;
`;

export const Texto = styled.Text`
  margin-top: 10px;
  font-family: BebasNeue;
  font-size: 30px;
  color: ${Colors.preto};
`;
