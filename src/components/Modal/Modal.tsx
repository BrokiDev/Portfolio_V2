import { useEffect, useState } from "react";

const Modal = ({ isOpen, toogleClose, content }: ModalProps) => {
  const [modal, setModal] = useState(false);

  useEffect(() => {
    setModal(isOpen);
  }, [isOpen]);

  return modal ? (
    <div className="fixed inset-0 z-50 flex items-center justify-center transition duration-150 ease-in-out">
      {/* Fondo desenfocado */}
      <div className="absolute inset-0 backdrop-filter backdrop-blur-sm bg-opacity-50  "></div>

      {/* Contenido del modal */}
      <div className="w-[80%]  max-w-xl dark:bg-gradient-to-b from-gray-900 via-gray-700 to-gray-500 dark:text-white bg-white p-6 rounded-md relative transition duration-150 ease-in-out">
        <button
          onClick={toogleClose}
          className="absolute top-[10px] right-4 flex justify-center items-center transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)]  p-[0px_7px]  bg-blue-700 text-white  rounded-full"
        >
          X
        </button>
        {content}
      </div>
    </div>
  ) : null;
};

export default Modal;
