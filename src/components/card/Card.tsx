import React from "react";

interface Props {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  handleClick: (e?: any) => void;
  children: React.ReactNode;
}

const Card = ({ handleClick, children }: Props) => {
  const onClick = () => {
    handleClick?.();
  };
  return (
    <div
      className="rounded-md bg-white border border-gray-100 shadow"
      onClick={onClick}
    >
      {children}
    </div>
  );
};

export default Card;
