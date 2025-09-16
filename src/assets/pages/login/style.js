import styled from "styled-components";
export const Container = styled.View`
    flex: 1;
    background-color: #ffffffff;
`;

export const Header = styled.View`
    height: 100px;
    background-color: #ffd700;
    justify-content: center;
    align-items: flex-start;
    padding: 15px;
`;

export const Logo = styled.Image`
    width: 120px;
    height: 60px;
`;

export const Form = styled.View`
    flex: 1;
    justify-content: center;
    align-items: center;
`;

export const Title = styled.Text`
    font-size: 22px;
    font-weight: bold;
    color: #000;
    background-color: #ffd700;
    padding: 10px 30px;
    border-radius: 12px;
    margin-bottom: 20px;
    elevation: 4;
`;

export const Input = styled.TextInput`
    width: 85%;
    background-color: #fff;
    border: 1px solid #ccc;
    border-radius: 8px;
    padding: 12px;
    margin-bottom: 15px;
`;

export const Button = styled.TouchableOpacity`
    width: 85%;
    background-color: #7a6a00;
    padding: 14px;
    border-radius: 10px;
    align-items: center;
`;

export const ButtonText = styled.Text`
    color: #fff;
    font-size: 16px;
    font-weight: bold;
`;

export const LinkText = styled.Text`
    margin-top: 15px;
    color: #555;
    text-decoration: underline;
`;