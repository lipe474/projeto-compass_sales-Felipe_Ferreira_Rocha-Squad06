import { useTheme } from "styled-components/native";
import {
  CategoryText,
  Container,
  ContainerFavorite,
  ContainerImageBackground,
  ContainerInfo,
  ContainerTagNew,
  FavoriteIcon,
  PriceText,
  ProductNameText,
  RatingContainer,
  RatingIcons,
  RatingText,
  TagNewText
} from "./styles";

import { useState } from "react";
import { IconWeight } from "phosphor-react-native";

type ProductCardProps = {
  rating: number;
  category: string;
  productName: string;
  price: number;
  favorite?: boolean;
};
export function ProductCard({
  rating,
  category,
  productName,
  price,
  favorite
}: ProductCardProps) {
  const [isFavorite, setIsFavorite] = useState(favorite);
  const { COLORS } = useTheme();

  const weight: IconWeight = isFavorite ? "fill" : "bold";
  const color = isFavorite ? COLORS.RED_200 : COLORS.GRAY_300;

  const toggleIconWeight = () => {
    setIsFavorite(!isFavorite);
  };

  return (
    <Container>
      <ContainerImageBackground
        source={require("@assets/images/image.png")}
        resizeMode="cover"
      />

      <ContainerTagNew>
        <TagNewText>New</TagNewText>
      </ContainerTagNew>
      <ContainerFavorite onPress={toggleIconWeight}>
        <FavoriteIcon weight={weight} color={color} />
      </ContainerFavorite>
      <RatingContainer>
        <RatingIcons startingValue={rating} />
        <RatingText>({rating})</RatingText>
      </RatingContainer>
      <ContainerInfo>
        <CategoryText>{category}</CategoryText>
        <ProductNameText>{productName}</ProductNameText>
        <PriceText>{price}$</PriceText>
      </ContainerInfo>
    </Container>
  );
}
