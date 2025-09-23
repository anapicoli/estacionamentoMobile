import styled from "styled-components/native";
import { Colors } from "../theme/theme";

export const Container = styled.View`
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

export const Title = styled.Text`
  font-family: "BebasNeue-Regular";
  font-size: 30px;
  margin-top: 15px;
  margin-left: 20px;
`;

export const SearchContainer = styled.View`
  position: absolute;
  right: 20px;
  top: 100px;
  width: 150px;
  height: 25px;
  background-color: ${Colors.branco};
  border-radius: 20px;
  border: solid 1px ${Colors.preto};
  justify-content: center;
  padding-horizontal: 10px;
  margin-top: 10px
`;

export const SearchInput = styled.TextInput`
  font-family: "Inter-Regular";
  font-size: 5px;
`;

export const CardsContainer = styled.View`
  margin-top: 30px;
  padding-horizontal: 15px;
`;

export const Card = styled.View`
  width: 186px;
  height: 75px;
  background-color: ${Colors.amareloPastel};
  border-radius: 10px;
  padding: 15px;
  margin-right: 10px;
  margin-bottom: 15px;
  shadow-color: #000;
  shadow-offset: -4px 4px;
  shadow-opacity: 0.25;
  shadow-radius: 8px;
  elevation: 3;
`;

export const CardRow = styled.View`
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

export const ButtonRow = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const PlateText = styled.Text`
  font-family: "Inter-Medium";
  font-size: 12px;
  margin-top: 6px;
`;

export const DateText = styled.Text`
  font-family: "Inter-Regular";
  font-size: 10px;
`;

export const RegisterButton = styled.TouchableOpacity`
  width: 78px;
  height: 15px;
  background-color: ${Colors.marrom};
  border-radius: 8px;
  justify-content: center;
  align-items: center;
`;

export const RegisterButtonText = styled.Text`
  font-family: "Nunito-SemiBold";
  font-size: 10px;
  color: ${Colors.branco};
`;