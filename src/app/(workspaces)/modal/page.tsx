"use client";

import { Button, ButtonSizes, ButtonTypes } from "@/components/button/button";
import { Modal } from "@/components/modal/modal";
import { Screen } from "@/components/screen/screen";
import { useTranslation } from "@/hooks/use-translation.hook";
import { useState } from "react";

const ModalPage = () => {
  const [isOpen, setIsOpen] = useState(false);

  const translate = useTranslation("pages.modal");

  const handleClose = () => setIsOpen(false);

  const handleOpen = () => setIsOpen(true);

  const handleGoBack = () => history.back();

  return (
    <Screen>
      <div className="mb-10">
        <Button
          onClick={handleOpen}
          size={ButtonSizes.medium}
          type={ButtonTypes.primary}
          text={translate("buttons.open")}
        />
      </div>
      <Button
        onClick={handleGoBack}
        size={ButtonSizes.medium}
        type={ButtonTypes.secondary}
        text={translate("buttons.goBack")}
      />

      <Modal
        isOpen={isOpen}
        onClose={handleClose}
        title={translate("modal.title")}
        closeOnClickOutside
      />
    </Screen>
  );
};

export default ModalPage;
