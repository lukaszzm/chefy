import { useSession } from "next-auth/react";
import { useRouter } from "next/router";
import { LoadingScreen } from "../components/UI/LoadingScreen";
import { LoginForm } from "../components/Forms/LoginForm";
import { Modal } from "../components/UI/Modal";
import { NavBar } from "../components/Home/Navbar";
import { Welcome } from "../components/Home/Welcome";
import { useLoginModal } from "../hooks/useLoginModal";
import { getServerSession } from "next-auth";
import { authOptions } from "./api/auth/[...nextauth]";
import { RegisterForm } from "../components/Forms/RegisterForm";

const Home = () => {
  const {
    isModalOpen,
    modalType,
    switchModal,
    openLoginModal,
    openRegisterModal,
    closeModal,
  } = useLoginModal();
  const { status } = useSession();
  const router = useRouter();

  if (status === "loading") {
    return <LoadingScreen />;
  }

  if (status === "authenticated") {
    router.replace("/explore");
  }

  if (status === "unauthenticated")
    return (
      <>
        <Modal
          isModalOpen={isModalOpen}
          closeModal={closeModal}
          title={modalType}
        >
          {modalType === "login" ? (
            <LoginForm switchModal={switchModal} />
          ) : (
            <RegisterForm switchModal={switchModal} />
          )}
        </Modal>
        <NavBar openLoginModal={openLoginModal} />
        <Welcome openModal={openRegisterModal} />
      </>
    );
};

export async function getServerSideProps(context: any) {
  const session = await getServerSession(context.req, context.res, authOptions);

  if (session) {
    return {
      redirect: {
        destination: "/explore",
        permament: false,
      },
    };
  }
  return {
    props: {},
  };
}

export default Home;
