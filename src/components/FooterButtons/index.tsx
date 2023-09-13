import { ImageSourcePropType } from "react-native";
import { ContainerIcon, IconImage } from "./styles";

import { FontAwesome5 } from "@expo/vector-icons";

type Props = {
  source: ImageSourcePropType;
};

export function FooterButtons({ source }: Props) {
  return (
    <ContainerIcon>
      <IconImage source={source} />
      {/* <Icon name={icon} /> */}
    </ContainerIcon>
  );
}
