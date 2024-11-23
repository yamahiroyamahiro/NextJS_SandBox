import React from "react";

export const SubHeader = ({ children }: { children: React.ReactNode }) => {
  return <h4 className="text-sm font-bold whitespace-nowrap">{children}</h4>;
};
