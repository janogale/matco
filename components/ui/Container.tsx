import React from "react";

export default function Container({ children }: any) {
  return (
    <section className={`flex justify-center items-center`}>
      <div className="max-w-6xl flex-1">{children}</div>
    </section>
  );
}
