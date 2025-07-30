import { createPortal } from "react-dom";

interface ModalProps {
  title: string;
  isOpen: boolean;
  onClose: () => void;
  closeOnClickOutside?: boolean;
}

export const Modal = ({
  title,
  isOpen,
  closeOnClickOutside = true,
  onClose,
}: ModalProps) => {
  const content = (
    <>
      <div
        className="fixed inset-0 bg-white opacity-40 z-10"
        onClick={closeOnClickOutside ? onClose : undefined}
      />
      <div className="fixed inset-1/3 bg-blue-900 z-20">
        <div className="flex flex-col items-center justify-center w-full h-full gap-3">
          <h1 className="text-yellow-400">{title}</h1>
          <button className="border-2 border-yellow-400 p-2" onClick={onClose}>
            Close modal
          </button>
        </div>
      </div>
    </>
  );
  const target = document.getElementById("modal");
  const onRender = () => (target ? createPortal(content, target) : null);
  return <>{isOpen && onRender()}</>;
};
