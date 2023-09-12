import { ContainerIcon, Icon } from "./styles";

import { FontAwesome5 } from "@expo/vector-icons";

type Props = {
  icon: keyof typeof FontAwesome5.glyphMap;
};

export function FooterButtons({ icon }: Props) {
  return (
    <ContainerIcon>
      <Icon name={icon} />
    </ContainerIcon>
  );
}
