import Image from "next/image";
import React from "react";
import { AiOutlineDown, AiTwotoneFileMarkdown } from "react-icons/ai";
import { BiSortDown } from "react-icons/bi";

type ModalProps = {
  isOpen: boolean;
  onClose: () => void;
  imageSrc: string;
  brochure: string;
  specificationSheet:string;
};

const Modal = ({ isOpen, onClose, imageSrc, brochure, specificationSheet }: ModalProps) => {
  if (!isOpen) return null;

  const handleDownload = (fileUrl: string | null) =>{
    if(fileUrl){
      window.open(fileUrl, "_blank")
    } else {
      alert("File does not exist. Please contact Matco team.");
    }
  }
  return (
    <div className="fixed inset-0 flex items-center justify-center z-50 cursor-pointer">
      <div
        className="modal-overlay fixed inset-0 bg-black opacity-60"
        onClick={onClose}
      ></div>
      <div className="relative bg-white rounded-md shadow-md w-full max-w-3xl h-96">
        <div className="modal flex flex-col rounded-lg p-4">
          <div className="flex justify-between">
            <Image
              src={imageSrc}
              width={300}
              height={100}
              alt="Modal Image"
              className="rounded-lg w-full max-w-sm"
            />
            <AiOutlineDown
              onClick={onClose}
              className="absolute top-0 right-0 m-2 text-black hover:text-red-500 font-bold px-2 py-1 focus:outline-none w-10 h-10"
            />
          </div>
          <div className="mt-5 mb-3 flex">
            <button
             className="bg-gray-200 hover:bg-gray-300 rounded-md mr-5 flex justify-between items-center"
             onClick={() => handleDownload(brochure)}
             >
              <AiTwotoneFileMarkdown className="bg-red-500 text-white w-6 h-6" />
              <span className="text-xs mx-2 font-semibold">
                Download Brochure
              </span>
            </button>
            <button 
            className="bg-gray-200 hover:bg-gray-300 rounded-md flex justify-between items-center"
             onClick={() => handleDownload(specificationSheet)}
            >
              <BiSortDown className="bg-red-500 text-white w-6 h-6" />
              <span className="text-xs mx-2 font-semibold">
                Specification Sheet
              </span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
