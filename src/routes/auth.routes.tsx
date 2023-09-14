import {
  createNativeStackNavigator,
  NativeStackNavigationProp
} from "@react-navigation/native-stack";
import { ForgotPassword } from "@screens/ForgotPassword";
import { Login } from "@screens/Login";
import { SignUp } from "@screens/SignUp";

type AuthRoutes = {
  login: undefined;
  signUp: undefined;
  forgotPassword: undefined;
};

export type AuthProps = NativeStackNavigationProp<AuthRoutes>;

const { Navigator, Screen } = createNativeStackNavigator<AuthRoutes>();

export function AuthRoutes() {
  return (
    <Navigator screenOptions={{ headerShown: false }}>
      <Screen name="login" component={Login} />
      <Screen name="signUp" component={SignUp} />
      <Screen name="forgotPassword" component={ForgotPassword} />
    </Navigator>
  );
}
