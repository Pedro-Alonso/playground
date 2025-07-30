"use client";

import { Button, ButtonSizes, ButtonTypes } from "@/components/button/button";
import { Modal } from "@/components/modal/modal";
import { Screen } from "@/components/screen/screen";
import { useTranslation } from "@/hooks/use-translation.hook";
import { useState } from "react";

export default function Home() {
  const [isOpen, setIsOpen] = useState(false);

  const translate = useTranslation("pages.home");

  return (
    <Screen className="gap-8">
      <h1>{translate("welcome")}</h1>
      <Button
        type={ButtonTypes.secondary}
        size={ButtonSizes.medium}
        onClick={() => setIsOpen(true)}
        text="Abrir modal"
      />

      <Modal
        isOpen={isOpen}
        title="Isso é um modal"
        closeOnClickOutside
        onAction={() => setIsOpen(false)}
        onClose={() => setIsOpen(false)}
      />
    </Screen>
  );
}
