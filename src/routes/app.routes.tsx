import { Platform } from "react-native";
import {
  createBottomTabNavigator,
  BottomTabNavigationProp
} from "@react-navigation/bottom-tabs";

import HomeSvg from "@assets/icons/home.svg";
import ShopSvg from "@assets/icons/cart-shop.svg";
import BagSvg from "@assets/icons/bag.svg";
import FavoritesSvg from "@assets/icons/favorites.svg";
import ProfileSvg from "@assets/icons/profile.svg";

import { Home } from "@screens/Home";
import { useTheme } from "styled-components/native";

type AppRoutes = {
  home: undefined;
  shop: undefined;
  bag: undefined;
  favorites: undefined;
  profile: undefined;
};

export type AppProps = BottomTabNavigationProp<AppRoutes>;

const { Navigator, Screen } = createBottomTabNavigator<AppRoutes>();

export function AppRoutes() {
  const { COLORS, FONT_FAMILY, FONT_SIZE } = useTheme();

  const iconSize = 30;

  return (
    <Navigator
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: true,
        tabBarActiveTintColor: COLORS.RED_200,
        tabBarInactiveTintColor: COLORS.GRAY_300,
        tabBarStyle: {
          backgroundColor: COLORS.WHITE,
          height: Platform.OS === "android" ? "auto" : 96,
          paddingTop: 24,
          paddingBottom: 5,
          position: "absolute",
          borderTopStartRadius: 12,
          borderTopEndRadius: 12
        },
        tabBarLabelStyle: {
          fontFamily: FONT_FAMILY.REGULAR,
          fontSize: FONT_SIZE.XS,
          lineHeight: 30,
          marginTop: 8,
          textTransform: "capitalize"
        }
      }}
    >
      <Screen
        name="home"
        component={Home}
        options={{
          tabBarLabel: "Home",
          tabBarIcon: ({ color, focused }) => (
            <HomeSvg
              color={color}
              fill={focused ? COLORS.RED_200 : COLORS.WHITE}
              width={iconSize}
              height={iconSize}
            />
          )
        }}
      />
      <Screen
        name="shop"
        component={Home}
        options={{
          tabBarLabel: "Shop",
          tabBarIcon: ({ color, focused }) => (
            <ShopSvg
              fill={focused ? COLORS.RED_200 : COLORS.WHITE}
              color={color}
              width={iconSize}
              height={iconSize}
            />
          )
        }}
      />
      <Screen
        name="bag"
        component={Home}
        options={{
          tabBarLabel: "Bag",
          tabBarIcon: ({ color, focused }) => (
            <BagSvg
              fill={focused ? COLORS.RED_200 : COLORS.WHITE}
              color={color}
              width={iconSize}
              height={iconSize}
            />
          )
        }}
      />
      <Screen
        name="favorites"
        component={Home}
        options={{
          tabBarLabel: "Favorites",
          tabBarIcon: ({ color, focused }) => (
            <FavoritesSvg
              color={color}
              fill={focused ? COLORS.RED_200 : COLORS.WHITE}
              width={iconSize}
              height={iconSize}
            />
          )
        }}
      />
      <Screen
        name="profile"
        component={Home}
        options={{
          tabBarLabel: "Profile",
          tabBarIcon: ({ color, focused }) => (
            <ProfileSvg
              color={color}
              fill={focused ? COLORS.RED_200 : COLORS.WHITE}
              width={iconSize}
              height={iconSize}
            />
          )
        }}
      />
    </Navigator>
  );
}
