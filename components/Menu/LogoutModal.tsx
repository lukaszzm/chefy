import { signOut } from "next-auth/react";
import { Modal } from "../UI/Modal";
import { Button } from "../UI/Button";

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
        <Button
          type="outline-danger"
          className="rounded-xl m-6"
          onClick={() => closeModal()}
        >
          Cancel
        </Button>
        <Button
          type="danger"
          className="rounded-xl m-6"
          onClick={() => signOut()}
        >
          Logout
        </Button>
      </div>
    </Modal>
  );
};
