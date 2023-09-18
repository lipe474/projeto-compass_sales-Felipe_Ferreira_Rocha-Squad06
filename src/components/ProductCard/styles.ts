import styled from "styled-components/native";
import { Rating } from "react-native-ratings";
import { HeartStraight } from "phosphor-react-native";

export const Container = styled.View`
  min-height: 266px;
  max-height: 266px;
  min-width: 148px;
  max-width: 148px;
  background-color: transparent;
  margin-right: 16px;
`;

export const ContainerImageBackground = styled.Image`
  min-height: 184px;
  max-height: 184px;
  min-width: 148px;
  max-width: 148px;
  border-radius: 5px;
`;

export const ContainerTagNew = styled.View`
  position: absolute;
  min-height: 24px;
  max-height: 24px;
  min-width: 40px;
  max-width: 40px;
  background-color: ${({ theme }) => theme.COLORS.BLACK_700};
  border-radius: 20px;
  justify-content: center;
  align-items: center;

  top: 8px;
  left: 8px;
`;

export const TagNewText = styled.Text`
  font-size: ${({ theme }) => theme.FONT_SIZE.XS}px;
  font-family: ${({ theme }) => theme.FONT_FAMILY.BOLD};
  color: ${({ theme }) => theme.COLORS.WHITE};
  text-transform: uppercase;
`;

export const ContainerFavorite = styled.TouchableOpacity`
  position: absolute;
  min-height: 36px;
  max-height: 36px;
  min-width: 36px;
  max-width: 36px;
  background-color: ${({ theme }) => theme.COLORS.WHITE};
  border-radius: 20px;
  justify-content: center;
  align-items: center;
  elevation: 5;

  top: 165px;
  right: 0px;
`;

export const FavoriteIcon = styled(HeartStraight).attrs(({ theme }) => ({
  size: 16
}))``;

export const RatingContainer = styled.View`
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  margin-top: 7px;
`;

export const RatingText = styled.Text`
  font-size: ${({ theme }) => theme.FONT_SIZE.XXS}px;
  font-family: ${({ theme }) => theme.FONT_FAMILY.REGULAR};
  color: ${({ theme }) => theme.COLORS.GRAY_300};
  margin-left: 3.5px;
`;

export const ContainerInfo = styled.View`
  flex: 1;
  flex-direction: column;
  justify-content: flex-start;
  margin-top: 3px;
`;

export const CategoryText = styled.Text`
  font-size: ${({ theme }) => theme.FONT_SIZE.XS}px;
  font-family: ${({ theme }) => theme.FONT_FAMILY.REGULAR};
  color: ${({ theme }) => theme.COLORS.GRAY_300};
`;

export const ProductNameText = styled.Text`
  font-size: ${({ theme }) => theme.FONT_SIZE.MD}px;
  font-family: ${({ theme }) => theme.FONT_FAMILY.BOLD};
  color: ${({ theme }) => theme.COLORS.BLACK_700};
`;

export const PriceText = styled.Text`
  font-size: ${({ theme }) => theme.FONT_SIZE.SM}px;
  font-family: ${({ theme }) => theme.FONT_FAMILY.MEDIUM};
  color: ${({ theme }) => theme.COLORS.BLACK_700};
`;

export const RatingIcons = styled(Rating).attrs(({ theme }) => ({
  type: "custom",
  imageSize: 15,
  ratingCount: 5,
  ratingBackgroundColor: theme.COLORS.GRAY_300,
  tintColor: theme.COLORS.GRAY_100,
  ratingColor: theme.COLORS.RED_200,
  showRating: false,
  readonly: true,
  showReadOnlyText: false,
  fractions: 1,
  jumpValue: 0.1
}))`
  background-color: ${({ theme }) => theme.COLORS.GRAY_100};
`;
