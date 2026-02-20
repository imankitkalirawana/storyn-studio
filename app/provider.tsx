"use client";
import NextTopLoader from "nextjs-toploader";
import { Toast } from "@heroui/react";

export default function Provider({ children }: { children: React.ReactNode }) {
  return (
    <>
      <NextTopLoader
        height={4}
        showSpinner={false}
        shadow="false"
        easing="ease"
        color="var(--accent)"
      />
      {children}
      <Toast.Provider />
    </>
  );
}
