"use client";

import { Modal } from "@/components/modal/modal";
import { Screen } from "@/components/screen/screen";
import { useEffect, useState } from "react";

export default function Home() {
  const [isOpen, setIsOpen] = useState(false);
  useEffect(() => {
    console.log("togglou papai, e dessa vez pra " + isOpen);
  }, [isOpen]);
  return (
    <Screen className="gap-8">
      <h1>Welcome to the React playground!</h1>
      <button
        className="bg-amber-900 w-40"
        onClick={() => setIsOpen((prev) => !prev)}
      >
        Open modal
      </button>

      <Modal
        isOpen={isOpen}
        title="This is a modal"
        closeOnClickOutside={false}
        onClose={() => setIsOpen(false)}
      />
    </Screen>
  );
}
