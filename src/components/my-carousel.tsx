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
              <div className="grid p-4">
                <p className="place-self-center text-2xl">{item.description}</p>
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
