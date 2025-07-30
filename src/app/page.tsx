"use client";

import { Link, LinkSizes, LinkTypes } from "@/components/link/link";
import { Screen } from "@/components/screen/screen";
import { useTranslation } from "@/hooks/use-translation.hook";

type Page = {
  label: string;
  path: string;
};

export default function Home() {
  const translate = useTranslation("pages.home");

  const pages: Page[] = [
    {
      label: translate("menu.options.modal"),
      path: "modal",
    },
  ];

  const renderPages = () =>
    pages.map((page) => (
      <Link
        type={LinkTypes.primary}
        size={LinkSizes.medium}
        text={page.label}
        to={page.path}
        key={page.path}
      />
    ));
  return (
    <Screen className="gap-8">
      <h1 className="text-3xl font-bold">{translate("welcome")}</h1>
      <div className="flex flex-col justify-center items-center gap-4">
        <h2 className="text-xl">{translate("menu.title")}</h2>
        <div className="flex flex-col gap-10">{renderPages()}</div>
      </div>
    </Screen>
  );
}
