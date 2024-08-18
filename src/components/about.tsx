import { cn } from "@/lib/utils";
import MeJPEG from "../assets/me.jpeg";
import MyCarousel from "./my-carousel";
import useScreen from "@/hooks/useScreen";

export default (): React.ReactElement => {
  const { width } = useScreen();

  return (
    <div
      className={cn({
        "grid overflow-hidden": true,
        "grid-cols-2": width > 768,
        "grid-rows-2": width < 768,
      })}
    >
      <div className="flex flex-col justify-center items-center">
        <img
          className="border-b-4 border-secondary h-52 w-52 object-cover rounded-full"
          src={MeJPEG.src}
          alt="me"
        />
        <p className="mt-4 mb-2 text-2xl border-b-2 border-secondary font-inter">
          Alexandru Groza
        </p>
        <span className="w-96">
          <p className="mt-2 font-inter">
            With over 2 years of experience as a 3D Artist and Modeler, I've had
            the opportunity to bring a wide range of projects to life, from
            gaming to animation and virtual reality.
          </p>
          <p className="mt-2 font-inter">
            My passion lies in creating detailed and realistic 3D models using
            tools like Blender and ZBrush.
          </p>
          <p className="mt-2 font-inter">
            I also have a solid background in texturing, rigging, and animation,
            which helps me develop characters and environments that feel dynamic
            and alive
          </p>
          <p className="mt-2 font-inter">
            I’m known for my attention to detail and strong sense of aesthetics,
            and I love collaborating with teams to turn creative ideas into
            reality.
          </p>
        </span>
      </div>
      <MyCarousel />
    </div>
  );
};
