import { Button, ButtonSizes, ButtonTypes } from "../button/button";

interface LinkProps {
  text: string;
  to: string;
  type: LinkTypes;
  size: LinkSizes;
}

export enum LinkTypes {
  primary,
  secondary,
  tertiary,
}
export enum LinkSizes {
  small,
  medium,
  large,
}

export const Link = ({ size, text, to, type }: LinkProps) => {
  const getSize = () => {
    const sizes = {
      [LinkSizes.small]: ButtonSizes.small,
      [LinkSizes.medium]: ButtonSizes.medium,
      [LinkSizes.large]: ButtonSizes.large,
    };
    return sizes[size];
  };
  const getType = () => {
    const types = {
      [LinkTypes.primary]: ButtonTypes.primary,
      [LinkTypes.secondary]: ButtonTypes.secondary,
      [LinkTypes.tertiary]: ButtonTypes.tertiary,
    };
    return types[type];
  };
  const onRedirect = () => {
    const a = document.createElement("a");
    a.href = to;
    a.click();
    a.remove();
  };
  return (
    <Button
      size={getSize()}
      type={getType()}
      text={text}
      onClick={onRedirect}
    />
  );
};
