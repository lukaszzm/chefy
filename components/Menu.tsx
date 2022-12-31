import { BiHeart, BiGlobe, BiLogOut, BiSlider } from "react-icons/bi";
import { MenuItem } from "./Menu/MenuItem";
import { signOut } from "next-auth/react";
import { useModal } from "../hooks/useModal";
import { Modal } from "./Modal";

export const Menu = () => {
  const { isModalOpen, openModal, closeModal } = useModal();

  return (
    <>
      <div className="h-screen overflow-y-auto overflow-x-hidden max-w-xs bg-gray-100 flex flex-col justify-start items-center shadow-xl">
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
            onClick={() => openModal()}
            text="log out"
            icon={<BiLogOut />}
          />
        </div>
      </div>
      <Modal isModalOpen={isModalOpen} closeModal={closeModal} title="Log out">
        <p className="text-center">Are you sure you want to log out?</p>
        <div className="flex justify-around mt-2">
          <button
            onClick={() => closeModal()}
            className="p-2 font-semibold text-md my-3 mx-6 px-10 rounded-xl border border-primary hover:bg-gray-100 hover:shadow-sm transition duration-150  ease-in-out flex justify-between items-center"
          >
            Cancel
          </button>
          <button
            onClick={() => signOut()}
            className="p-1 font-semibold text-md my-3 mx-6 px-10 rounded-xl border text-white border-red-400 bg-red-400 hover:bg-red-500 hover:shadow-sm transition duration-150  ease-in-out flex justify-between items-center"
          >
            Logout
          </button>
        </div>
      </Modal>
    </>
  );
};
