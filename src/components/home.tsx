import About from "./about";
import Socials from "./socials";

export default (): React.ReactElement => {
  return (
    <div style={{display: 'flex', flexDirection: 'column'}}>
      <Socials />
      <About />
    </div>
  );
};
