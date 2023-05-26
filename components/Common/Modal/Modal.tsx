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
          {/* <!--Modal--> */}
          {/* <div className="modal fixed z-50 w-full h-full top-0 left-0">
            <div className="modal-overlay absolute w-full h-full bg-black opacity-40"></div>

            <div className="modal-container fixed w-full h-full z-50 overflow-y-auto">
              <div className="modal fixed w-full h-full top-0 left-0">
                <div className="modal-overlay absolute w-full h-full bg-black opacity-40"></div>

                {children}
              </div>
            </div>
          </div> */}
          <div className="h-full w-full overflow-x-hidden fixed z-50 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 inset-0 outline-none focus:outline-none">
            <div className="relative w-auto mx-auto lg:max-w-4xl h-full flex flex-col justify-center">
              {children}
            </div>
          </div>
          <div className="opacity-60 fixed inset-0 z-40 bg-black" onClick={onChange}></div>
          <div className="fixed z-50 top-4 right-4 cursor-pointer" onClick={onChange}>
            <AiOutlineClose color="white" size={35} />
          </div>
        </>
      ) : null}
    </div>
  );
}
