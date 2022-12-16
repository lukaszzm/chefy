import { useSession } from "next-auth/react";
import { useRouter } from "next/router";
import { LoadingScreen } from "../components/LoadingScreen";
import { LoginForm } from "../components/LoginForm";
import { Modal } from "../components/Modal";
import { NavBar } from "../components/Navbar";
import { Welcome } from "../components/Welcome";
import { useLoginModal } from "../hooks/useLoginModal";
import { unstable_getServerSession } from "next-auth";
import { authOptions } from "./api/auth/[...nextauth]";

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
        {isModalOpen ? (
          <Modal closeModal={closeModal} title={modalType}>
            <LoginForm type={modalType} switchModal={switchModal} />
          </Modal>
        ) : null}
        <NavBar openLoginModal={openLoginModal} />
        <Welcome openModal={openRegisterModal} />
      </>
    );
};

export async function getServerSideProps(context: any) {
  const session = await unstable_getServerSession(
    context.req,
    context.res,
    authOptions
  );

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
