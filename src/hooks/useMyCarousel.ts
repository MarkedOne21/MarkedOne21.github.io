import GooseJPEG from "../assets/goose.jpeg";
import SchytePNG from "../assets/schyte.png";
import PerfumePNG from "../assets/perfume.png";
import HousePNG from "../assets/house.jpg";
import PBRPNG from "../assets/pbr.png";
import GooseGIF from "../assets/goose.gif";
import SPPGIF from "../assets/spp.gif";

type MyCarouselDataItem = {
  id: string;
  media: string;
  title: string;
  description: string;
};

type MyCarouselData = {
  items: MyCarouselDataItem[];
};

export default (): MyCarouselData => {
  return {
    items: [
      {
        media: GooseGIF.src,
        title: "Goose",
        description: "3D Modelling and Sculpting (Video)",
      },
      {
        media: GooseJPEG.src,
        title: "Goose",
        description: "3D Modelling and Sculpting (Image)",
      },
      {
        media: SPPGIF.src,
        title: "Redresour Advertising",
        description: "Animation and Rigging",
      },
      {
        media: SchytePNG.src,
        title: "Scythe",
        description: "UV Mapping and Unwrapping",
      },
      {
        media: PerfumePNG.src,
        title: "Perfume",
        description: "Substance Painter and Photoshop",
      },
      {
        media: HousePNG.src,
        title: "House",
        description: "Blender and ZBrush",
      },
      {
        media: PBRPNG.src,
        title: "PBR",
        description: "Knowledge of PBR Workflows",
      },
    ].map((item) => ({ ...item, id: crypto.randomUUID().toString() })),
  };
};
