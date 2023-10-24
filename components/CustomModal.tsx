"use client"

import React, { PropsWithChildren } from 'react';
import { Fragment } from 'react';
import { Dialog, Transition } from '@headlessui/react';

interface CustomModalProps extends PropsWithChildren {
  isOpen: boolean;
  closeModal: () => void;  // function that does not return anything
  // closeModal: any;
  content?: any;
}

const CustomModal = (props: CustomModalProps) => {
  return (
    // <>
    <Transition 
    appear show={props.isOpen} 
    as={Fragment}>
      <Dialog 
      as="div" 
      className='z-50 relative' 
      onClose={props.closeModal}>
        <Transition.Child 
        as={Fragment} 
        enter='ease-out duration-300'
        enterFrom='opacity-0'
        enterTo='opacity-100'
        leave='ease-in duration-200'
        leaveFrom='opacity-100'
        leaveTo='opacity-0'>
          <div className='fixed inset-0 bg-black bg-opacity-80'></div>
        </Transition.Child>

        {/* *** CONTENT *** */}
        <div className='fixed inset-0 overflow-hidden overflow-y-auto'>
          <Transition.Child 
          as={Fragment} 
          enter='ease-out duration-300'
          enterFrom='opacity-0 scale-95'
          enterTo='opacity-100 scale-100'
          leave='ease-in duration-200'
          leaveFrom='opacity-100 scale-100'
          leaveTo='opacity-0 scale-95'>
            <Dialog.Panel className='relative w-2/3 p-4 h-screen overflow-hidden bg-blue-300 mx-auto'>
              <button
              className='text-red-900'
              type='button'
              onClick={props.closeModal}>close</button>
              <div>{props.content}</div>
            </Dialog.Panel>
          </Transition.Child>
        </div>
      </Dialog>
    </Transition>
    // </>
  );
}

export default CustomModal;
