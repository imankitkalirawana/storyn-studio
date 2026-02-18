"use client";
import NextTopLoader from "nextjs-toploader";

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
    </>
  );
}
