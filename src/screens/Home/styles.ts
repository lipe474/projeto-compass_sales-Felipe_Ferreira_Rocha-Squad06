import { SafeAreaView } from "react-native-safe-area-context";
import styled from "styled-components/native";

export const Container = styled(SafeAreaView)`
  flex: 1;
  background-color: ${({ theme }) => theme.COLORS.GRAY_300};
`;

export const ContainerScroll = styled.ScrollView`
  flex: 1;
`;

export const ContainerHeaderImage = styled.ImageBackground`
  height: 494px;
  padding-top: 32px;
  padding-left: 16px;
  padding-bottom: 32px;
  justify-content: space-between;
`;

export const GreetingText = styled.Text`
  font-size: ${({ theme }) => theme.FONT_SIZE.MD}px;
  font-family: ${({ theme }) => theme.FONT_FAMILY.BOLD};
  color: ${({ theme }) => theme.COLORS.WHITE};
`;

export const ContainerLowerHeader = styled.View`
  min-height: 172px;
  max-height: 172px;
  justify-content: space-between;
`;

export const AppTitle = styled.Text`
  font-size: ${({ theme }) => theme.FONT_SIZE.XXL}px;
  font-family: ${({ theme }) => theme.FONT_FAMILY.BLACK};
  color: ${({ theme }) => theme.COLORS.WHITE};
  width: 202px;
  margin-bottom: 12px;
`;

export const ContainerNewProducts = styled.View`
  flex: 1;
  padding-top: 35px;
  padding-left: 14px;
  background-color: ${({ theme }) => theme.COLORS.GRAY_100};
  padding-bottom: 20px;
`;

export const ContainerNewProductsHeader = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-end;
`;

export const SectionTitle = styled.Text`
  font-size: ${({ theme }) => theme.FONT_SIZE.XL}px;
  font-family: ${({ theme }) => theme.FONT_FAMILY.BOLD};
  color: ${({ theme }) => theme.COLORS.BLACK_700};
  top: 6px;
`;

export const SectionViewAll = styled.Text`
  font-size: ${({ theme }) => theme.FONT_SIZE.XS}px;
  font-family: ${({ theme }) => theme.FONT_FAMILY.REGULAR};
  color: ${({ theme }) => theme.COLORS.BLACK_700};
  padding-right: 16px;
`;

export const SectionSubtitle = styled.Text`
  font-size: ${({ theme }) => theme.FONT_SIZE.XS}px;
  font-family: ${({ theme }) => theme.FONT_FAMILY.REGULAR};
  color: ${({ theme }) => theme.COLORS.GRAY_300};
  margin-bottom: 20px;
`;

export const Products = styled.FlatList.attrs({
  horizontal: true,
  showsHorizontalScrollIndicator: false
})`
  flex: 1;
`;
