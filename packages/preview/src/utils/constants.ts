export const BRAND_TITLE = "React With Native Icons";
export const BRAND_TITLE_MONO = "react-with-native-icons";
export const BRAND_DESCRIPTION =
  "Include popular icons in your React projects easly with react-icons.";
export const BRAND_KEYWORDS = "React, Icons, Tree Shaking, SVG";

export const HOME_USAGE = `
import { Svg } from "react-with-native";
import Icon from "../assets/icons/GiPartyPopper.svg"; 

class Question extends React.Component {
  render() {
    return <h3> Lets go for a <Svg src={Icon} className="w-8 h-8"/>? </h3>
  }
}`;
