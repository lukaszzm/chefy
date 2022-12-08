import { useState } from "react";
import { LoginForm } from "../components/LoginForm";
import { Modal } from "../components/Modal";
import { NavBar } from "../components/Navbar";
import { Welcome } from "../components/Welcome";

const Home = () => {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(true);

  console.log(isModalOpen);
  return (
    <>
      {isModalOpen ? (
        <Modal closeModal={() => setIsModalOpen(false)} title="Sign In">
          <LoginForm />
        </Modal>
      ) : null}
      <NavBar openLoginModal={() => setIsModalOpen(true)} />
      <Welcome />
    </>
  );
};

export default Home;
