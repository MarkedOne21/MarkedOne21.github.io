import About from "./about";
import Socials from "./socials";

export default (): React.ReactElement => {
  return (
    <div className="grid grid-rows-[auto,1fr] h-full">
      <Socials />
      <About />
    </div>
  );
};
