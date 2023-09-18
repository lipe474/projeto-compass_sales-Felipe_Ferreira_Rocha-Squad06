import { StatusBar, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";

import { AuthRoutes } from "./auth.routes";
import { AppRoutes } from "./app.routes";
import { useAuth } from "@hooks/useAuth";
import { Loading } from "@components/Loading";
import { useTheme } from "styled-components/native";

export function Routes() {
  const { user, isLoading, isNewUser } = useAuth();
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
        {user ? isNewUser ? <AuthRoutes /> : <AppRoutes /> : <AuthRoutes />}
      </NavigationContainer>
    </View>
  );
}
