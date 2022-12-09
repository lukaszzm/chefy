import { useState } from "react";

export const useLoginModal = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalType, setModalType] = useState<"login" | "register">("login");

  const openLoginModal = () => {
    setIsModalOpen(true);
    setModalType("login");
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const openRegisterModal = () => {
    setIsModalOpen(true);
    setModalType("register");
  };

  const switchModal = () => {
    modalType === "login" ? setModalType("register") : setModalType("login");
  };

  return {
    isModalOpen,
    modalType,
    openLoginModal,
    openRegisterModal,
    switchModal,
    closeModal,
  };
};
