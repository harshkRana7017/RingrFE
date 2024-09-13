import { Dialog, Transition } from '@headlessui/react';
import { MdOutlineCancel } from 'react-icons/md';
import useEscapeKeyDetector from 'hooks/useEscapeKeyDetector';
import useOutsideClickDetector from 'hooks/useOutsideClickDetector';
import React, { Fragment } from 'react';

interface ModalProps {
  children: React.ReactNode;
  visible: boolean;
  handleVisibility: (value: boolean) => void;
  title?: React.ReactNode | string;
  closeOnOutsideClick?: boolean;
}

const Modal: React.FC<ModalProps> = (props: ModalProps) => {
  const { children, visible, handleVisibility, title, closeOnOutsideClick } =
    props;

  const closeModal = () => {
    if (closeOnOutsideClick) {
      handleVisibility(false);
    }
  };

  const wrapperRef = useOutsideClickDetector<HTMLDivElement>(closeModal);
  const wrap = useEscapeKeyDetector<HTMLDivElement>(closeModal);

  return (
    <Transition appear show={visible} as={Fragment}>
      <Dialog
        as='div'
        className='fixed inset-0 z-10 overflow-y-auto'
        onClose={() => null}
      >
        <div className='min-h-screen px-4 text-center'>
          <Transition.Child
            as={Fragment}
            enter='ease-out duration-300'
            enterFrom='opacity-0'
            enterTo='opacity-100'
            leave='ease-in duration-200'
            leaveFrom='opacity-100'
            leaveTo='opacity-0'
          >
          </Transition.Child>

          {/* This element is to trick the browser into centering the modal contents. */}
          <span
            className='inline-block h-screen align-middle'
            aria-hidden='true'
          >
            &#8203;
          </span>
          <Transition.Child
            as={Fragment}
            enter='ease-out duration-300'
            enterFrom='opacity-0 scale-95'
            enterTo='opacity-100 scale-100'
            leave='ease-in duration-200'
            leaveFrom='opacity-100 scale-100'
            leaveTo='opacity-0 scale-95'
          >
            <div
              ref={wrap}
              className='inline-block w-full max-w-md p-6 my-8 overflow-hidden text-left align-middle transition-all transform bg-white shadow-xl rounded-2xl'
            >
              <div ref={wrapperRef}>
                <div className='flex justify-between'>
                  {title &&
                    (typeof title === 'string' ? (
                      <Dialog.Title
                        as='h3'
                        className='text-lg font-medium leading-6 text-gray-900'
                      >
                        {title}
                      </Dialog.Title>
                    ) : (
                      title
                    ))}
                  <MdOutlineCancel
                    onClick={() => handleVisibility(false)}
                    className='w-5 h-5 text-gray-400 cursor-pointer'
                    aria-hidden='true'
                  />
                </div>
                {children}
              </div>
            </div>
          </Transition.Child>
        </div>
      </Dialog>
    </Transition>
  );
};

export default React.memo(Modal);
