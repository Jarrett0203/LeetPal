import { Dialog, Transition } from "@headlessui/react";
import React, { Fragment } from "react";

type AlertProps = {
  message: string;
  hidden: boolean;
  setHide: (value: boolean) => void;
  green?: boolean;
};

const Alert: React.FC<AlertProps> = ({ message, hidden, setHide, green }) => {
  return (
    <Transition.Root show={hidden} as={Fragment}>
      <Dialog
        as="div"
        className="fixed inset-0 z-10 w-screen pointer-events-none"
        onClose={setHide}
      >
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="translate-y-full"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="translate-y-full"
        >
          <div
            className={`fixed bottom-0 left-0 p-4 ml-4 mb-4 font-regular  rounded-lg ${green ? "bg-green-500" :"bg-red-500"} text-base leading-5 text-white opacity-100`}
            role="alert"
          >
            {message}
          </div>
        </Transition.Child>
      </Dialog>
    </Transition.Root>
  );
};
export default Alert;