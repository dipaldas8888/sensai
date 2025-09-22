"use client";
import dynamic from "next/dynamic";

const LiquidEther = dynamic(() => import("./LiquidEther"), { ssr: false });

export default function GlobalBackground() {
  return (
    <div aria-hidden className="fixed inset-0 -z-10 pointer-events-none">
      <LiquidEther />
    </div>
  );
}
