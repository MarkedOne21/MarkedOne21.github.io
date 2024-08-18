import {Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious,} from "@/components/ui/carousel";
import useMyCarousel from "@/hooks/useMyCarousel";
import useScreen from "@/hooks/useScreen";
import {cn} from "@/lib/utils";

export default (): React.ReactElement => {
	const {width} = useScreen();
	const {items} = useMyCarousel();

	return (
		<Carousel
			style={{
				width: width > 768 ? "80%" : "70%",
			}}
		>
			<CarouselContent>
				{items.map((item) => (
					<CarouselItem key={item.id}>
						<div className="flex justify-center">
							<img
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
			<CarouselPrevious className="place-self-center"/>
			<CarouselNext className="place-self-center"/>
		</Carousel>
	);
};
