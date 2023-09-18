import { StatusBar, View } from "react-native";
import { useTheme } from "styled-components/native";
import { NavigationContainer } from "@react-navigation/native";

import { useAuth } from "@hooks/useAuth";

import { Loading } from "@components/Loading";

import { AppRoutes } from "./app.routes";
import { AuthRoutes } from "./auth.routes";

export function Routes() {
  const { user, isLoading } = useAuth();
  const { COLORS } = useTheme();

  const barStyle = user ? "light-content" : "dark-content";

  if (isLoading) {
    return <Loading />;
  }

  return (
    <View style={{ flex: 1, backgroundColor: COLORS.GRAY_300 }}>
      <StatusBar
        barStyle={barStyle}
        backgroundColor="transparent"
        translucent
      />
      <NavigationContainer>
        {user?.displayName ? <AppRoutes /> : <AuthRoutes />}
      </NavigationContainer>
    </View>
  );
}
