import { Button, ButtonSizes, ButtonTypes } from "@/components/button/button";
import { useTranslation } from "@/hooks/use-translation.hook";
import { useEffect, useState } from "react";
import { createPortal } from "react-dom";

interface ModalProps {
  title: string;
  isOpen: boolean;
  closeOnClickOutside?: boolean;
  onAction?: () => void;
  onClose: () => void;
}

export const Modal = ({
  title,
  isOpen,
  closeOnClickOutside = true,
  onAction,
  onClose,
}: ModalProps) => {
  const [target, setTarget] = useState<HTMLElement | null>(null);

  useEffect(() => {
    setTarget(document.getElementById("modal"));
  }, []);

  const translate = useTranslation("components.modal");
  return (
    isOpen &&
    target &&
    createPortal(
      <>
        <div
          className="fixed inset-0 dark:bg-white bg-black opacity-40 z-10"
          onClick={closeOnClickOutside ? onClose : undefined}
        />
        <div className="fixed inset-1/3 dark:bg-blue-950 bg-blue-100 z-20 rounded-2xl">
          <p
            className="absolute top-2 right-4 cursor-pointer"
            onClick={onClose}
          >
            X
          </p>
          <div className="flex flex-col items-center justify-between w-full h-full pt-15 pb-10">
            <h1 className="dark:text-yellow-400 text-blue-950">{title}</h1>
            {onAction && (
              <Button
                type={ButtonTypes.primary}
                size={ButtonSizes.small}
                text={translate("buttons.ok")}
                onClick={onAction}
              />
            )}
            <Button
              type={ButtonTypes.secondary}
              size={ButtonSizes.small}
              text={translate("buttons.close")}
              onClick={onClose}
            />
          </div>
        </div>
      </>,
      target
    )
  );
};
