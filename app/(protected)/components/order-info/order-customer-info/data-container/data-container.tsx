import React from "react";

interface IProps {
  children: React.ReactNode;
}

export const DataContainer = ({ children }: IProps) => {
  return (
    <div className="border-solid border-t-1 border-gray-300">{children}</div>
  );
};
