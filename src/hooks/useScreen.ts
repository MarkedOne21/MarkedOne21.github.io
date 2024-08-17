import React from "react";

type ScreenData = {
  width: number;
  height: number;
};

export default (): ScreenData => {
  const [screen, setScreen] = React.useState<ScreenData>({
    width: window.innerWidth,
    height: window.innerHeight,
  });

  const handleResize = (): void => {
    setScreen({
      width: window.innerWidth,
      height: window.innerHeight,
    });
  };

  React.useEffect(() => {
    window.addEventListener("resize", handleResize);

    return (): void => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return screen;
};
