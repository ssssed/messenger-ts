"use client";

import { SessionProvider } from "next-auth/react";
import { FC, ReactNode } from "react";

type ProviderType = {
  children: ReactNode;
};

const Providers: FC<ProviderType> = ({ children }) => {
  return <SessionProvider>{children}</SessionProvider>;
};

export default Providers;
