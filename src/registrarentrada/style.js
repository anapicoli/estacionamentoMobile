import styled from "styled-components/native";
import { Colors } from "../theme/theme";

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

export const BackContainer = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  margin-top: 15px;
  margin-right: 15px;
  gap: 5px;
`;

export const BackImage = styled.Image`
  width: 15px;
  height: 15px;
`;

export const BackText = styled.Text`
  font-family: "Inter-Regular";
  font-size: 12px;
`;

export const EntryForm = styled.View`
  justify-content: center;
  flex-direction: column;
  align-items: center;
  margin-top: 154px;
`;

export const Form = styled.View`
  width: 370px;
  align-self: center;
  padding: 25px;
  background-color: ${Colors.amareloVibrante};
  border-radius: 20px;
`;

export const TitleTab = styled.Text`
  font-family: "BebasNeue-Regular";
  font-size: 30px;
  padding: 10px 60px;
  text-align: center;
  width: 203px;
  height: 55px;
  border-radius: 20px;
  background-color: ${Colors.amareloVibrante};
  margin-bottom: -10px;
  elevation: 30;
  z-index: 2;
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
  elevation: 2;
`;

export const Button = styled.TouchableOpacity`
  width: 96px;
  height: 40px;
  background-color: ${Colors.marrom};
  border-radius: 100px;
  margin-top: 25px;
  justify-content: center;
  align-items: center;
`;

export const ButtonText = styled.Text`
  font-family: "Nunito-SemiBold";
  font-size: 15px;
  color: ${Colors.branco};
`;