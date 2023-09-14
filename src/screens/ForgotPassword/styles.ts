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

export const ContentText = styled.View`
  height: 40px;
  justify-content: flex-start;
  align-items: center;
  margin-left: 16px;
  margin-right: 30px;
  margin-bottom: 16px;
`;

export const Subtitle = styled.Text`
  font-size: ${({ theme }) => theme.FONT_SIZE.SM}px;
  font-family: ${({ theme }) => theme.FONT_FAMILY.MEDIUM};
  color: ${({ theme }) => theme.COLORS.BLACK_700};
`;

export const ContentInputs = styled.View`
  height: 64px;
  margin-left: 16px;
  margin-right: 16px;
  margin-bottom: 48px;
`;

export const ContentButtons = styled.View`
  height: 48px;
  justify-content: space-between;
  margin-left: 16px;
  margin-right: 16px;
`;
