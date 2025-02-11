import Container from "@components/@core/container";
import { getIconById } from "@utils/icon";
import React from "react";

import IconSetInfo from "./iconset-info";
import IconSetViewer from "./iconset-viewer";

export default function IconsPageComponent({ iconId }) {
  const icon = getIconById(iconId);

  return (
    <Container title={icon.name}>
      <IconSetInfo icon={icon} />
      <IconSetViewer icon={icon} />
    </Container>
  );
}
