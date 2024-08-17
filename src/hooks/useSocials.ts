import {
  SiTiktok,
  SiInstagram,
  SiLinkedin,
  SiArtstation,
} from "@icons-pack/react-simple-icons";
import type { IconType } from "@icons-pack/react-simple-icons";
import { useState } from "react";
import CGTraderIconSVG from "../assets/cgtrader.svg";
import Cults3DIconSVG from "../assets/cults3d.svg";

type SocialsItemData = {
  id: string;
  label: string;
  link: string;
  icon: IconType | string;
};

type SocialsData = {
  socialsItems: SocialsItemData[];
  onSocialItemsButtonClick: (link: string) => void;
  isHidden: boolean;
  onArrowUpItemButtonClick: () => void;
  onArrowDownItemButtonClick: () => void;
};

export default (): SocialsData => {
  const [isHidden, setIsHidden] = useState<boolean>(false);

  return {
    socialsItems: [
      {
        label: "TikTok",
        link: "https://www.tiktok.com/@markedone21",
        icon: SiTiktok,
      },
      {
        label: "Instagram",
        link: "https://www.instagram.com/marked.one_/",
        icon: SiInstagram,
      },
      {
        label: "LinkedIn",
        link: "https://www.linkedin.com/in/alex-groza-26bb282bb/",
        icon: SiLinkedin,
      },
      {
        label: "ArtStation",
        link: "https://markedone.artstation.com/",
        icon: SiArtstation,
      },
      {
        label: "CGTrader",
        link: "https://www.cgtrader.com/designers/markedone",
        icon: CGTraderIconSVG.src,
      },
      {
        label: "Cults3D",
        link: "https://cults3d.com/en/users/MarkedOne/3d-models",
        icon: Cults3DIconSVG.src,
      },
    ].map((item) => ({ ...item, id: crypto.randomUUID().toString() })),
    onSocialItemsButtonClick: (link: string) => {
      window.open(link, "_blank");
    },
    onArrowUpItemButtonClick: () => {
      setIsHidden(true);
    },
    onArrowDownItemButtonClick: () => {
      setIsHidden(false);
    },
    isHidden,
  };
};
