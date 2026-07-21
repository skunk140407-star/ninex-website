"use client";

export default function Glow() {
  return (
    <>
      <div className="absolute left-0 top-0 h-[450px] w-[450px] rounded-full bg-violet-700/20 blur-[180px]" />

      <div className="absolute right-0 bottom-0 h-[450px] w-[450px] rounded-full bg-fuchsia-700/20 blur-[180px]" />
    </>
  );
}