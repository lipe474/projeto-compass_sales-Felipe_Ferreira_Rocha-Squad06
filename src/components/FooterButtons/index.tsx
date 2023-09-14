import { ImageSourcePropType } from "react-native";
import { ContainerIcon, IconImage } from "./styles";

type Props = {
  source: ImageSourcePropType;
};

export function FooterButtons({ source }: Props) {
  return (
    <ContainerIcon>
      <IconImage source={source} />
    </ContainerIcon>
  );
}
