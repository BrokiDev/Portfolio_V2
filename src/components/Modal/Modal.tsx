import { useEffect, useState } from "react";

const Modal = ({ isOpen, toogleClose, content }: ModalProps) => {
  const [modal, setModal] = useState(false);

  useEffect(() => {
    setModal(isOpen);
  }, [isOpen]);

  return modal ? (
    <div className="fixed inset-0 z-50 flex items-center justify-center transition-all">
      {/* Fondo desenfocado */}
      <div className="absolute inset-0 backdrop-filter backdrop-blur-sm bg-opacity-50 "></div>

      {/* Contenido del modal */}
      <div className="w-[80%] max-w-xl dark:bg-gradient-to-b from-gray-900 via-gray-700 to-gray-500 dark:text-white bg-white p-6 rounded-md relative transform scale-110 transition-transform">
        <button
          onClick={toogleClose}
          className="absolute top-[10px] right-4 flex justify-center items-center  p-[0px_7px]  bg-blue-700 text-white  rounded-full"
        >
          X
        </button>
        {content}
      </div>
    </div>
  ) : null;
};

export default Modal;
