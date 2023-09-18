import React from "react";

import { FlatList, TouchableOpacity } from "react-native";
import { useTheme } from "styled-components/native";

import { useAuth } from "@hooks/useAuth";

import { LogoutUser, cardsData } from "@requests/index";

import Toast from "react-native-root-toast";
import { ProductCard } from "@components/ProductCard";
import { CustomButton } from "@components/Button";

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
            data={cardsData}
            keyExtractor={(item) => String(item.id)}
            renderItem={({ item }) => (
              <ProductCard
                key={item.id}
                rating={item.rating}
                category={item.category}
                productName={item.productName}
                price={item.price}
                favorite={item.favorite}
              />
            )}
            horizontal
            showsHorizontalScrollIndicator={false}
          />
        </ContainerNewProducts>
      </ContainerScroll>
    </Container>
  );
}
