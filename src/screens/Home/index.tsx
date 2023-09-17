import { FlatList } from "react-native";
import {
  AppTitle,
  Container,
  ContainerHeaderImage,
  ContainerLowerHeader,
  ContainerNewProducts,
  ContainerNewProductsHeader,
  ContainerScroll,
  GreetingText,
  SectionSubtitle,
  SectionTitle,
  SectionViewAll
} from "./styles";
import { CustomButton } from "@components/Button";
import { ProductCard } from "@components/ProductCard";

export function Home() {
  const image = {
    uri: "@assets/images/background.png"
  };
  return (
    <Container>
      <ContainerScroll>
        <ContainerHeaderImage
          source={require("@assets/images/background.png")}
          resizeMode="cover"
        >
          <GreetingText>Hello, compassinho</GreetingText>

          <ContainerLowerHeader>
            <AppTitle>Compass Sales</AppTitle>
            <CustomButton title="Check" width={160} height={36} />
          </ContainerLowerHeader>
        </ContainerHeaderImage>

        <ContainerNewProducts>
          <ContainerNewProductsHeader>
            <SectionTitle>New</SectionTitle>
            <SectionViewAll>View all</SectionViewAll>
          </ContainerNewProductsHeader>

          <SectionSubtitle>You´ve never seen it before!</SectionSubtitle>

          <FlatList
            data={[1, 2, 3, 4, 5, 6]}
            keyExtractor={(item) => String(item)}
            renderItem={({ item }) => <ProductCard />}
            horizontal
            showsHorizontalScrollIndicator={false}
          />
        </ContainerNewProducts>
      </ContainerScroll>
    </Container>
  );
}
