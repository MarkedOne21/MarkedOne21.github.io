import {cn} from "@/lib/utils";
import MeJPEG from "../assets/me.jpeg";
import MyCarousel from "./my-carousel";
import useScreen from "@/hooks/useScreen";
import useAbout from "@/hooks/useAbout";

export default (): React.ReactElement => {
	const {width} = useScreen();
	const {name, descriptionSentences} = useAbout();

	return (
		<div
			style={{
				width: '100%',
				display: 'flex',
				flexWrap: 'wrap',
				justifyContent: 'center',
				alignItems: 'center',
				rowGap: '2rem',
				padding: '0 5rem',
				// backgroundColor: 'green'
			}}
		>
			<div style={{
				display: 'flex',
				flexDirection: 'column',
				width: '50%',
				minWidth: '25rem',
				justifyContent: 'center',
				alignItems: 'center',
				// background: 'blue'
			}}>
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
				<span style={{padding: '0 2rem'}}>
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
			<div style={{
				display: 'flex',
				width: '50%',
				minWidth: '25rem',
				alignItems: 'center',
				justifyContent: 'center',
				// background: 'red'
			}}>
				<MyCarousel/>
			</div>
		</div>
	);
};
