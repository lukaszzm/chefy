import { signOut } from "next-auth/react";
import { Modal } from "../Modal";

interface ILogoutModalProps {
  isModalOpen: boolean;
  closeModal: () => void;
}
export const LogoutModal: React.FC<ILogoutModalProps> = (props) => {
  const { isModalOpen, closeModal } = props;

  return (
    <Modal isModalOpen={isModalOpen} closeModal={closeModal} title="Log out">
      <p className="text-center">Are you sure you want to log out?</p>
      <div className="flex justify-around mt-2">
        <button
          onClick={() => closeModal()}
          className="p-2 font-semibold text-md my-3 mx-6 px-10 rounded-xl border border-primary text-primary hover:bg-primary hover:text-white hover:shadow-sm transition duration-150  ease-in-out flex justify-between items-center"
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
  );
};
