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
        <Modal title="Sign In">
          <LoginForm />
        </Modal>
      ) : null}
      <NavBar />
      <Welcome />
    </>
  );
};

export default Home;
