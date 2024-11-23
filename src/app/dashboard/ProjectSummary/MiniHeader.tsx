import React from "react";

export const MiniHeader = ({ children }: { children: React.ReactNode }) => {
  return <h4 className="text-xs font-bold mt-2">{children}</h4>;
};
