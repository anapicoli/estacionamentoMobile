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
`;

export const Logo = styled.Image`
  width: 98px;
  height: 89px;
`;

export const ListTitle = styled.View`
  flex-direction: row;
  align-items: center;
  padding-top: 10px;
`;

export const Title = styled.Text`
  font-family: "BebasNeue-Regular";
  font-size: 30px;  
  margin-left: 20px;
  margin-right: 70px;
`;

export const SearchInput = styled.TextInput`
  font-family: "Inter-Regular";
  font-size: 10px;
  border-radius: 20px;
  border: solid 1px ${Colors.preto};
  padding-left: 15px;
  width: 150px;
  height: 35px;
`;

export const CardsContainer = styled.View`
  margin-top: 30px;
  margin-left: 15px;
`;

export const Card = styled.View`
  width: 186px;
  height: 75px;
  background-color: ${Colors.amareloPastel};
  border-radius: 10px;
  padding: 15px;
  margin-right: 10px;
  margin-bottom: 15px;
  elevation: 6;
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
  margin-top: 12px;
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
  border-radius: 100px;
  justify-content: center;
  align-items: center;
`;

export const RegisterButtonText = styled.Text`
  font-family: "Nunito-SemiBold";
  font-size: 10px;
  color: ${Colors.branco};
`;
export const RegisterEntryText = styled.Text`
  font-family: "Nunito-SemiBold";
  font-size: 15px;
  color: ${Colors.branco};
`;