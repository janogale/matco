import Image from "next/image";
import React from "react";
import { BiCaretDownCircle } from "react-icons/bi";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  imageSrc: string;
}

const Modal: React.FC<ModalProps> = ({ isOpen, onClose, imageSrc }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50 cursor-pointer">
      <div
        className="modal-overlay fixed inset-0 bg-black opacity-60"
        onClick={onClose}
      ></div>
      <div className="relative bg-white w-full max-w-3xl h-96">
        <div className="modal flex flex-col rounded-lg p-4">
         <div className="flex justify-between">
         <Image
            src={imageSrc}
            width={500}
            height={500}
            alt="Modal Image"
          />
        <BiCaretDownCircle
          onClick={onClose}
          className="absolute top-0 right-0 m-2 text-red-500 px-2 py-1 focus:outline-none w-20 h-20"
        />
         </div>
       <div className="my-10 flex justify-around">
       <button className="bg-gray-300 rounded-md py-1 px-2">Download Brochure</button>
        <button className="bg-gray-300 rounded-md py-1 px-2">Specification Sheet</button>
       </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
