import { ImageSourcePropType } from "react-native";
import { ContainerIcon, IconImage } from "./styles";

type Props = {
  source: ImageSourcePropType;
  onPress?: () => void;
};

export function FooterButtons({ source, onPress }: Props) {
  return (
    <ContainerIcon onPress={onPress}>
      <IconImage source={source} />
    </ContainerIcon>
  );
}
