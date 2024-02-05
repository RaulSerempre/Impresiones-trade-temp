import { cn } from "@/src/lib/utils";
import { Button } from "@nextui-org/react";
import { HiOutlineArrowNarrowLeft } from "react-icons/hi";
import { HiOutlineArrowNarrowRight } from "react-icons/hi";

import { TbCircle } from "react-icons/tb";
import { TbCircleFilled } from "react-icons/tb";

/** DotsButton Component */

interface ISliderDotsProps {
  selected: boolean;
  onClick: () => void;
}
export const DotButtonSlide = (props: ISliderDotsProps) => {
  return (
    <Button
      className="text-utility-blue h-4 w-10 justify-center contents"
      type="button"
      onPress={() => props.onClick()}
    >
      {props.selected ? (
        <TbCircleFilled className="text-lg" />
      ) : (
        <TbCircle className="text-lg" />
      )}
    </Button>
  );
};

/** Prev Next Button Component */
interface ISliderButonsProps {
  type: "prev" | "next";
  disabled: boolean;
  onClick: () => void;
}

export const NavButtonSlide = (props: ISliderButonsProps) => {
  return (
    <div className={cn("absolute top-2/4" , (props.type === 'prev' ? 'left-4' : 'right-4'))}>
      <Button
        type="button"
        onPress={() => props.onClick()}
        className={cn("bg-white text-2xl flex p-0 min-w-10 justify-center items-center text-[#C6C6C6] rounded-full border-solid border-2 border-[#C6C6C6] w-10 h-10", (props.disabled ? 'hidden': ''))}
      >
        {props.type === "prev" ? (
          <HiOutlineArrowNarrowLeft />
        ) : (
          <HiOutlineArrowNarrowRight />
        )}
      </Button>
    </div>
  );
};
