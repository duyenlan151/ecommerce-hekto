import { ILoading } from '@components/Icons';
import { Modal } from './Modal';
import { ModalCommonProps } from './Modal.props';

export function ModalSuccess({ isShow, title, description, onClose }: ModalCommonProps) {
  return (
    <Modal isShow={isShow} onChange={onClose}>
      <div className="bg-white px-10 py-8 min-w-[500px] max-w-[95%] text-center w-fit mx-auto">
        <h4 className="text-2xl font-bold tracking-wider mb-4">{title}</h4>
        <p className="py-3">{description}</p>
        <div className="flex items-center justify-center mt-4">
          <button
            onClick={onClose}
            className="bg-red-500 text-white py-2 text-center w-[100px] capitalize border border-bg-red-500  ml-4 focus:outline-none"
          >
            Confirm
          </button>
        </div>
      </div>
    </Modal>
  );
}
