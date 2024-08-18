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
          "w-[85%]": width > 768,
          "w-[70%] mt-12": width < 768,
        })}
      >
        <CarouselContent>
          {items.map((item) => (
            <CarouselItem key={item.id}>
              <div className="flex justify-center">
                <img
                  // className="w-[48rem] h-[48rem] object-cover"
                  className={cn({
                    "object-cover": true,
                    "w-[48rem] h-[48rem]": width > 768,
                    "w-96 h-96": width < 768,
                  })}
                  src={item.media}
                  alt={item.title}
                />
              </div>
              <p className="mt-4 mb-4 flex justify-center font-inter">
                {item.description}
              </p>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="place-self-center" />
        <CarouselNext className="place-self-center" />
      </Carousel>
    </div>
  );
};
