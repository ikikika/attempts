import React from "react";
import {
  Bookmark,
  Whatsapp,
  Telegram,
  Facebook,
  Twitter,
  Envelope,
  Linkedin,
} from "react-bootstrap-icons";

const styles = {
  socialMediaIconWrapper: {
    maxWidth: 280,
  },
  iconDefault: {
    width: 30,
    height: 30,
    overflow: "hidden",
  },
};

const SocialMediaIcon = ({
  extraStyle,
  url,
  Icon,
}: {
  extraStyle: { border?: string; backgroundColor?: string };
  url: string;
  Icon: JSX.Element;
}) => {
  return (
    <div
      className="rounded-circle d-flex justify-content-center align-items-center"
      style={{ ...styles.iconDefault, ...extraStyle }}
    >
      <a href={url}>{Icon}</a>
    </div>
  );
};

const SocialMediaWrapperComponent = () => {
  return (
    <div
      className="d-flex flex-row justify-content-between mt-3"
      style={styles.socialMediaIconWrapper}
    >
      <SocialMediaIcon
        extraStyle={{ border: "1px solid #000" }}
        url="/"
        Icon={<Bookmark size={18} />}
      />
      <SocialMediaIcon
        extraStyle={{ backgroundColor: "#25D366" }}
        url="https://www.addtoany.com/add_to/whatsapp?linkurl=https%3A%2F%2Fwww.todayonline.com%2Fsingapore%2Fspore-ready-female-pm-shanmugam-says-there-are-few-women-leadership-due-family-reasons&linkname=Is%20S%E2%80%99pore%20ready%20for%20a%20female%20PM%3F%20Shanmugam%20says%20there%20are%20few%20women%20in%20leadership%20due%20to%20family%20reasons&linknote="
        Icon={<Whatsapp size={20} color="#fff" />}
      />
      <SocialMediaIcon
        extraStyle={{ backgroundColor: "#fff" }}
        url="https://www.addtoany.com/add_to/telegram?linkurl=https%3A%2F%2Fwww.todayonline.com%2Fsingapore%2Fspore-ready-female-pm-shanmugam-says-there-are-few-women-leadership-due-family-reasons&linkname=Is%20S%E2%80%99pore%20ready%20for%20a%20female%20PM%3F%20Shanmugam%20says%20there%20are%20few%20women%20in%20leadership%20due%20to%20family%20reasons&linknote="
        Icon={<Telegram size={30} color="#0088CC" />}
      />
      <SocialMediaIcon
        extraStyle={{ backgroundColor: "#fff" }}
        url="https://www.addtoany.com/add_to/facebook?linkurl=https%3A%2F%2Fwww.todayonline.com%2Fsingapore%2Fspore-ready-female-pm-shanmugam-says-there-are-few-women-leadership-due-family-reasons&linkname=Is%20S%E2%80%99pore%20ready%20for%20a%20female%20PM%3F%20Shanmugam%20says%20there%20are%20few%20women%20in%20leadership%20due%20to%20family%20reasons&linknote="
        Icon={<Facebook size={30} color="#355F9F" />}
      />
      <SocialMediaIcon
        extraStyle={{ backgroundColor: "#2BA7DE" }}
        url="https://www.addtoany.com/add_to/twitter?linkurl=https%3A%2F%2Fwww.todayonline.com%2Fsingapore%2Fspore-ready-female-pm-shanmugam-says-there-are-few-women-leadership-due-family-reasons&linkname=Is%20S%E2%80%99pore%20ready%20for%20a%20female%20PM%3F%20Shanmugam%20says%20there%20are%20few%20women%20in%20leadership%20due%20to%20family%20reasons&linknote="
        Icon={<Twitter size={20} color="#fff" />}
      />
      <SocialMediaIcon
        extraStyle={{ backgroundColor: "#2D94B0" }}
        url="/"
        Icon={<Envelope size={18} color="#fff" />}
      />
      <SocialMediaIcon
        extraStyle={{ backgroundColor: "#fff" }}
        url="https://www.addtoany.com/add_to/linkedin?linkurl=https%3A%2F%2Fwww.todayonline.com%2Fsingapore%2Fspore-ready-female-pm-shanmugam-says-there-are-few-women-leadership-due-family-reasons&linkname=Is%20S%E2%80%99pore%20ready%20for%20a%20female%20PM%3F%20Shanmugam%20says%20there%20are%20few%20women%20in%20leadership%20due%20to%20family%20reasons&linknote="
        Icon={<Linkedin size={30} color="#096B9A" />}
      />
    </div>
  );
};

export default SocialMediaWrapperComponent;
