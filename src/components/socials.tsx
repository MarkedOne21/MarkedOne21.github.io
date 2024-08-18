import useSocials from "@/hooks/useSocials";
import React from "react";
import { Button, buttonVariants } from "./ui/button";
import { cn } from "@/lib/utils";
import { ArrowUp, ArrowDown } from "lucide-react";
import useScreen from "@/hooks/useScreen";

export default (): React.ReactElement => {
  const {
    socialsItems,
    onSocialItemsButtonClick,
    onArrowUpItemButtonClick,
    onArrowDownItemButtonClick,
    isHidden,
  } = useSocials();

  const { width } = useScreen();

  return (
    <div className="relative z-20 grid h-32 p-2">
      {isHidden && (
        <div className="place-self-center">
          <Button
            className={cn(
              buttonVariants({ variant: "outline" }),
              "rounded-full"
            )}
            onClick={onArrowDownItemButtonClick}
          >
            <ArrowDown color="white" />
          </Button>
        </div>
      )}
      <div className="p-2 place-self-center">
        {!isHidden && (
          <div
            className={cn({
              "border-2 border-secondary place-self-center rounded-full p-2":
                true,
              "w-96 overflow-x-scroll whitespace-nowrap no-scrollbar":
                width < 768,
            })}
          >
            {socialsItems.map((socialItem) => (
              <React.Fragment key={socialItem.id}>
                <Button
                  className={cn(
                    buttonVariants({ variant: "outline" }),
                    "rounded-full mx-2"
                  )}
                  onClick={() => onSocialItemsButtonClick(socialItem.link)}
                >
                  {typeof socialItem.icon === "string" ? (
                    <img
                      src={socialItem.icon}
                      alt={socialItem.label}
                      className="w-6 h-6 rounded-full"
                    />
                  ) : (
                    <socialItem.icon color="white" />
                  )}
                </Button>
              </React.Fragment>
            ))}
            <Button
              className={cn(
                buttonVariants({ variant: "outline" }),
                "rounded-full mx-2"
              )}
              onClick={onArrowUpItemButtonClick}
            >
              <ArrowUp color="white" />
            </Button>
          </div>
        )}
      </div>
    </div>
  );
};
