import React from "react";

export default function Container({ children, className = "" }: any) {
  return (
    <section className={`flex justify-center items-center ${className}`}>
      <div className="max-w-6xl flex-1">{children}</div>
    </section>
  );
}
