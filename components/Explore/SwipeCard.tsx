import { PanInfo, motion, useMotionValue, useTransform } from "framer-motion";
import { useRef } from "react";

const DRAG_LIMIT = 300;

const bgColors = {
  like: "#4ade80",
  default: "#f3f4f6",
  dislike: "#f87171",
};

interface ISwipeCardProps {
  children: React.ReactNode;
  onSwipeRight: () => void;
  onSwipeLeft: () => void;
  isLike: boolean;
  setIsLike: (isLike: boolean) => void;
}

export const SwipeCard: React.FC<ISwipeCardProps> = ({
  children,
  onSwipeRight,
  onSwipeLeft,
  isLike,
  setIsLike,
}) => {
  const x = useMotionValue(0);
  const rotate = useTransform(x, [-DRAG_LIMIT, DRAG_LIMIT], [-22.5, 22.5]);
  const background = useTransform(
    x,
    [-DRAG_LIMIT, 0, DRAG_LIMIT],
    [bgColors.dislike, bgColors.default, bgColors.like]
  );

  const dragEndHandler = (
    event: MouseEvent | TouchEvent | PointerEvent,
    info: PanInfo
  ) => {
    console.log(info.offset.x);
    if (info.offset.x > 0.3 * DRAG_LIMIT) {
      onSwipeRight();
    } else if (info.offset.x < 0.3 * -DRAG_LIMIT) {
      onSwipeLeft();
    }
  };

  const dragHandler = (
    event: MouseEvent | TouchEvent | PointerEvent,
    info: PanInfo
  ) => {
    if (info.offset.x > 0) {
      setIsLike(true);
    } else {
      setIsLike(false);
    }
  };

  const dragConstraintsRef = useRef<HTMLDivElement>(null);

  return (
    <motion.div
      style={{ background }}
      className="w-full h-[calc(100svh-4rem)] sm:min-h-screen flex justify-center items-center fixed"
      exit={{ opacity: 0, transition: { duration: 0.4 } }}
      ref={dragConstraintsRef}
    >
      <motion.div
        drag="x"
        dragConstraints={dragConstraintsRef}
        dragSnapToOrigin={true}
        dragElastic={0.2}
        onDragEnd={dragEndHandler}
        onDrag={dragHandler}
        animate={{ scale: 1, opacity: 1 }}
        exit={{
          x: isLike ? 2 * DRAG_LIMIT : -2 * DRAG_LIMIT,
          opacity: 0,
          transition: { duration: 0.6 },
        }}
        style={{ x, rotate }}
        className="w-full sm:w-auto"
      >
        {children}
      </motion.div>
    </motion.div>
  );
};
