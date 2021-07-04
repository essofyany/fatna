import { HStack } from "@chakra-ui/react";
import {
  TiSocialFacebookCircular,
  TiSocialInstagramCircular,
  TiSocialPinterestCircular,
  TiSocialTwitterCircular,
  TiSocialYoutubeCircular,
} from "react-icons/ti";
import IconTap from "../Motions/IconTap";

function SocialIconsStack({ color = "white", size = "28" }) {
  return (
    <HStack color={color} alignItems="center">
      <IconTap>
        <TiSocialFacebookCircular size={size} />
      </IconTap>
      <IconTap>
        <TiSocialInstagramCircular size={size} />
      </IconTap>
      <IconTap>
        <TiSocialTwitterCircular size={size} />
      </IconTap>
      <IconTap>
        <TiSocialPinterestCircular size={size} />
      </IconTap>
      <IconTap>
        <TiSocialYoutubeCircular size={size} />
      </IconTap>
    </HStack>
  );
}

export default SocialIconsStack;
