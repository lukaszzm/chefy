import { useState } from "react";
import { LoginForm } from "../components/LoginForm";
import { Modal } from "../components/Modal";
import { NavBar } from "../components/Navbar";
import { Welcome } from "../components/Welcome";

const Home = () => {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(true);
  const [modalType, setModalType] = useState<"login" | "register">("login");

  const openLoginModalHandler = () => {
    setIsModalOpen(true);
    setModalType("login");
  };

  const openRegisterModalHandler = () => {
    setIsModalOpen(true);
    setModalType("register");
  };

  const switchModalHandler = () => {
    modalType === "login" ? setModalType("register") : setModalType("login");
  };

  return (
    <>
      {isModalOpen ? (
        <Modal closeModal={() => setIsModalOpen(false)} title={modalType}>
          <LoginForm type={modalType} switchModal={switchModalHandler} />
        </Modal>
      ) : null}
      <NavBar openLoginModal={openLoginModalHandler} />
      <Welcome openModal={openRegisterModalHandler} />
    </>
  );
};

export default Home;
