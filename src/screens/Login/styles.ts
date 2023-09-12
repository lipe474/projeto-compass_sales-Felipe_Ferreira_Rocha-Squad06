import { SafeAreaView } from "react-native-safe-area-context";
import styled from "styled-components/native";

export const Container = styled(SafeAreaView)`
  flex: 1;
  background-color: ${({ theme }) => theme.COLORS.GRAY_100};
`;

export const Content = styled.View`
  height: 252px;
  justify-content: flex-start;
  background-color: ${({ theme }) => theme.COLORS.GRAY_100};
  margin-left: 16px;
  margin-right: 16px;
`;
