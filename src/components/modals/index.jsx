import React from "react";
import modalData from "src/modals";
import { useModals } from "src/utils/modal";
const Modal = () => {
  const modals = useModals();
  return (
    <div className="fixed inset-0 bg-black/20 flex items-center justify-center ">
      {modals.map((modal) => {
        const m = modalData((m) => m.name === modal.name);
        return <m.element />;
      })}
    </div>
  );
};

export default Modal;
