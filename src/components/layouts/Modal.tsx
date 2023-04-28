import React, { FC, ReactNode } from "react";

interface ModalProps {
  children: ReactNode;
}
const Modal: FC<ModalProps> = ({ children }) => {
  return <div>{children}</div>;
};

export default Modal;
