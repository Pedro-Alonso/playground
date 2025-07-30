import { Button, ButtonSizes, ButtonTypes } from "@/components/button/button";
import { useTranslation } from "@/hooks/use-translation.hook";
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
  const target = document.getElementById("modal");
  const translate = useTranslation("components.modal");
  return (
    isOpen &&
    target &&
    createPortal(
      <>
        <div
          className="fixed inset-0 bg-white opacity-40 z-10"
          onClick={closeOnClickOutside ? onClose : undefined}
        />
        <div className="fixed inset-1/3 bg-blue-900 z-20">
          <div className="flex flex-col items-center justify-center w-full h-full gap-3">
            <h1 className="text-yellow-400 mb-5">{title}</h1>
            {onAction && (
              <Button
                type={ButtonTypes.primary}
                size={ButtonSizes.medium}
                text={translate("buttons.ok")}
                onClick={onAction}
              />
            )}
            <Button
              type={ButtonTypes.secondary}
              size={ButtonSizes.medium}
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
