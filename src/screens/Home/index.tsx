import { FlatList, TouchableOpacity } from "react-native";
import {
  AppTitle,
  Container,
  ContainerHeader,
  ContainerHeaderImage,
  ContainerLowerHeader,
  ContainerNewProducts,
  ContainerNewProductsHeader,
  ContainerScroll,
  GreetingText,
  LogoutIcon,
  SectionSubtitle,
  SectionTitle,
  SectionViewAll
} from "./styles";
import { CustomButton } from "@components/Button";
import { ProductCard } from "@components/ProductCard";
import { useAuth } from "@hooks/useAuth";
import { LogoutUser } from "@requests/index";

import Toast from "react-native-root-toast";
import { useTheme } from "styled-components/native";

export function Home() {
  const { user } = useAuth();
  const { COLORS } = useTheme();

  async function handleLogout() {
    try {
      await LogoutUser();
    } catch (error: any) {
      let message = "An error occurred while trying to log out";

      Toast.show(message, {
        duration: 3000,
        position: 30,
        backgroundColor: COLORS.RED_200,
        textColor: COLORS.WHITE
      });
    }
  }

  return (
    <Container>
      <ContainerScroll>
        <ContainerHeaderImage
          source={require("@assets/images/background.png")}
          resizeMode="cover"
        >
          <ContainerHeader>
            <GreetingText>Hello, {user?.displayName}</GreetingText>
            <TouchableOpacity onPress={handleLogout}>
              <LogoutIcon />
            </TouchableOpacity>
          </ContainerHeader>

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
