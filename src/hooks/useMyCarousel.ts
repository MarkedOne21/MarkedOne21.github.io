import GoosePNG from "../assets/goose.png";
import SchytePNG from "../assets/schyte.png";
import PerfumePNG from "../assets/perfume.png";
import HousePNG from "../assets/house.jpg";
import PBRPNG from "../assets/pbr.png";

type MyCarouselDataItemSkill = {
  id: string;
  label: string;
};

type MyCarouselDataItem = {
  id: string;
  media: string;
  title: string;
  skills: MyCarouselDataItemSkill[];
};

type MyCarouselData = {
  items: MyCarouselDataItem[];
};

export default (): MyCarouselData => {
  return {
    items: [
      {
        media: GoosePNG.src,
        title: "Hydra Goose",
        skills: ["3D Modeling", "Sculpting"].map((label) => ({
          id: crypto.randomUUID().toString(),
          label,
        })),
      },
      {
        media: SchytePNG.src,
        title: "Schyte",
        skills: ["Texturing", "UV Mapping"].map((label) => ({
          id: crypto.randomUUID().toString(),
          label,
        })),
      },
      {
        media: PerfumePNG.src,
        title: "Perfume",
        skills: ["Blender", "ZBrush"].map((label) => ({
          id: crypto.randomUUID().toString(),
          label,
        })),
      },
      {
        media: HousePNG.src,
        title: "House",
        skills: ["Substance Painter", "Photoshop"].map((label) => ({
          id: crypto.randomUUID().toString(),
          label,
        })),
      },
      {
        media: PBRPNG.src,
        title: "PBR",
        skills: ["PBR Workflows"].map((label) => ({
          id: crypto.randomUUID().toString(),
          label,
        })),
      },
    ].map((item) => ({ ...item, id: crypto.randomUUID().toString() })),
  };
};
