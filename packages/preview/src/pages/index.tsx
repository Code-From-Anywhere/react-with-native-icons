import CodeBlock from "@components/@core/code-block";
import Container from "@components/@core/container";
import Badges from "@components/pages/home/badges";
import { BRAND_TITLE, HOME_USAGE } from "@utils/constants";
import React from "react";

export default function HomePage() {
  return (
    <Container title={BRAND_TITLE}>
      <Badges />
      <p>
        Include popular icons in your React and React Native projects easily with react-with-native-icons.
      </p>

      <h2>Installation</h2>

      {/* <CodeBlock language="bash" code={`https://github.com/Code-From-Anywhere/react-with-native`} /> */}
      <span>Go to </span>
      <a href="https://github.com/Code-From-Anywhere/react-with-native">
        react-with-native &#8599;
      </a>

      <h2>Usage</h2>
      <CodeBlock language="jsx" code={HOME_USAGE} />

      <h2>More info</h2>
      <p>
        <a href="https://github.com/Code-From-Anywhere/react-with-native-icons">
          GitHub &#8599;
        </a>
      </p>
    </Container>
  );
}
