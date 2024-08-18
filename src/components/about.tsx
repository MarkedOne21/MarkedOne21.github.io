import { cn } from "@/lib/utils";
import MeJPEG from "../assets/me.jpeg";
import MyCarousel from "./my-carousel";
import useScreen from "@/hooks/useScreen";
import useAbout from "@/hooks/useAbout";

export default (): React.ReactElement => {
  const { width } = useScreen();
  const { name, descriptionSentences } = useAbout();

  return (
    <div
      className={cn({
        "grid overflow-hidden": true,
        "grid-cols-2": width > 768,
        "grid-rows-[auto,1fr] absolute z-10": width < 768,
      })}
    >
      <div className="h-[110%] flex flex-col justify-center items-center">
        <img
          className={cn({
            "border-b-4 border-secondary h-52 w-52 object-cover rounded-full":
              true,
            "h-48 w-48": width < 768,
          })}
          src={MeJPEG.src}
          alt="me"
        />
        <p
          className={cn({
            "mt-4 mb-2 text-2xl border-b-2 border-secondary font-inter": true,
            "text-2xl": width > 768,
            "text-xl": width < 768,
          })}
        >
          {name}
        </p>
        <span className="w-96">
          {descriptionSentences.map((descriptionSentence) => (
            <p
              key={descriptionSentence.id}
              className={cn({
                "mt-2 font-inter": true,
                "text-xs": width < 768,
              })}
            >
              {descriptionSentence.sentence}
            </p>
          ))}
        </span>
      </div>
      <MyCarousel />
    </div>
  );
};
