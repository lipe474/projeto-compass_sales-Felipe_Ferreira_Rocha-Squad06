import { SafeAreaView } from "react-native-safe-area-context";
import styled from "styled-components/native";

export const Container = styled(SafeAreaView)`
  flex: 1;
  background-color: ${({ theme }) => theme.COLORS.GRAY_100};
`;

export const ContentHeader = styled.View`
  height: 104px;
  margin-bottom: 62px;
`;

export const ContentInputs = styled.View`
  min-height: 136px;
  max-height: 172px;
  justify-content: space-between;
  margin-left: 16px;
  margin-right: 16px;
`;

export const ContentButtons = styled.View`
  height: 130px;
  margin-left: 16px;
  margin-right: 16px;
  margin-bottom: 68px;
`;

export const ContentButtonLogin = styled.View`
  height: 100px;
  justify-content: space-between;
`;

export const ContentRegister = styled.View`
  height: 20px;
  justify-content: center;
  margin-left: auto;
  margin-right: auto;
  margin-top: 10px;
  flex-direction: row;
`;

export const ContentFooter = styled.View`
  height: 96px;
  justify-content: center;
  align-items: center;
  margin-left: auto;
  margin-right: auto;
  margin-top: 116px;
`;

export const ContentFooterButtons = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 200px;
  margin-top: 12px;
`;

export const Title = styled.Text`
  font-size: ${({ theme }) => theme.FONT_SIZE.SM}px;
  font-family: ${({ theme }) => theme.FONT_FAMILY.MEDIUM};
  color: ${({ theme }) => theme.COLORS.BLACK_700};
`;
