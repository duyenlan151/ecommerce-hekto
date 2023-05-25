import React, { ReactNode } from 'react';
import { AiOutlineClose } from 'react-icons/ai';

export interface ModalProps {
  isShow: boolean;
  onChange: () => void;
  children?: ReactNode;
}

export function Modal({ children, isShow, onChange }: ModalProps) {
  return (
    <div>
      {isShow ? (
        <>
          <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
            <div className="relative w-auto my-6 mx-auto lg:max-w-4xl">
              {/*content*/}
              {children}
            </div>
          </div>
          <div className="opacity-40 fixed inset-0 z-40 bg-black" onClick={onChange}></div>
          <div className="fixed z-50 top-4 right-4 cursor-pointer" onClick={onChange}>
            <AiOutlineClose color="white" size={35} />
          </div>
        </>
      ) : null}
    </div>
  );
}
