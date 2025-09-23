import styled from "styled-components/native";
import {Colors} from "../theme/theme";

export const Container = styled.ScrollView`
  flex: 1;
  background-color: ${Colors.branco};
`;

export const Header = styled.View`
  width: 100%;
  height: 90px;
  background-color: ${Colors.amareloVibrante};
  justify-content: center;
  padding-left: 20px;
`;

export const Logo = styled.Image`
  width: 98px;
  height: 89px;
`;

export const Form = styled.View`
  width: 370px;
  align-self: center;
  margin-top: 209px;
  padding: 25px;
  background-color: ${Colors.amareloVibrante};
  border-radius: 20px;
  shadow-color: #000;
  shadow-offset: 0px 4px;
  shadow-opacity: 0.25;
  shadow-radius: 4px;
`;

export const TitleTab = styled.Text`
  font-family: "BebasNeue-Regular";
  font-size: 30px;
  align-self: center;
  margin-bottom: 20px;
`;

export const Label = styled.Text`
  font-family: "Inter-Regular";
  font-size: 12px;
  margin-top: 10px;
`;

export const Input = styled.TextInput`
  width: 324px;
  height: 45px;
  background-color: ${Colors.branco};
  border-radius: 8px;
  padding: 10px;
  margin-top: 5px;
  shadow-color: #000;
  shadow-offset: 4px 3px;
  shadow-opacity: 0.2;
  shadow-radius: 5px;
  elevation: 2;
`;

export const Button = styled.TouchableOpacity`
  width: 96px;
  height: 40px;
  background-color: ${Colors.marrom};
  border-radius: 10px;
  margin-top: 25px;
  justify-content: center;
  align-items: center;
`;

export const ButtonText = styled.Text`
  font-family: "Nunito-SemiBold";
  font-size: 15px;
  color: ${Colors.branco};
`;

export const Row = styled.View`
  flex-direction: row;
  justify-content: ${(p) => (p.rowRight ? "flex-end" : "center")};
  margin-top: 5px;
`;

export const LinkText = styled.Text`
  font-family: "Inter-Regular";
  font-size: 10px;
  color: ${Colors.marrom};
  text-decoration: underline;

`;