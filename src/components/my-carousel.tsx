import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import useMyCarousel from "@/hooks/useMyCarousel";
import useScreen from "@/hooks/useScreen";
import { cn } from "@/lib/utils";

export default (): React.ReactElement => {
  const { width } = useScreen();
  const { items } = useMyCarousel();

  return (
    <div className="grid">
      <Carousel
        className={cn({
          "place-self-center": true,
          "w-[90%]": width > 768,
          "w-[70%]": width < 768,
        })}
      >
        <CarouselContent>
          {items.map((item) => (
            <CarouselItem className="grid" key={item.id}>
              <img
                className="h-96 w-96 place-self-center object-cover"
                src={item.media}
                alt={item.title}
              />
              <div className="grid grid-cols-2 p-4">
                <div
                  className={cn({
                    "place-self-center": width > 768,
                  })}
                >
                  <div className="grid">
                    <p
                      className={cn({
                        "text-xl": true,
                        "place-self-center": width > 768,
                      })}
                    >
                      Title:
                    </p>
                    <p
                      className={cn({
                        "text-md": true,
                        "place-self-center": width > 768,
                      })}
                    >
                      {item.title}
                    </p>
                  </div>
                </div>
                <div
                  className={cn({
                    "place-self-center": width > 768,
                  })}
                >
                  <div className="grid">
                    <p
                      className={cn({
                        "text-xl": true,
                        "place-self-center": width > 768,
                      })}
                    >
                      Skills:
                    </p>
                    <ul className="grid">
                      {item.skills.map((skill) => (
                        <li key={skill.id} className="text-md">
                          - {skill.label}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </div>
  );
};
