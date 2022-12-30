import { BiHeart, BiGlobe, BiLogOut, BiSlider } from "react-icons/bi";
import { MenuItem } from "./Menu/MenuItem";
import { signOut } from "next-auth/react";

export const Menu = () => {
  return (
    <div className="h-screen max-w-xs bg-gray-100 flex flex-col justify-start items-center shadow-xl">
      <div className="w-full p-5 font-bold border-">
        <h1 className="font-bold text-4xl text-center">Chefy</h1>
      </div>
      <div className="w-56 flex flex-col pb-10 mx-2 border-b border-b-gray-400">
        <MenuItem text="explore" icon={<BiGlobe />} />
        <MenuItem isActive text="likes" icon={<BiHeart />} />
        <MenuItem text="settings" icon={<BiSlider />} />
      </div>
      <div className="w-56 flex flex-col pt-10">
        <MenuItem
          type="button"
          onClick={() => signOut()}
          text="log out"
          icon={<BiLogOut />}
        />
      </div>
    </div>
  );
};
