import React from "react";

export default function layout({ children }: {
     children: React.ReactNode 
    }) {
  return (
    <div>
      <div className="border-b p-1 text-center">hello</div>
      {children}
    </div>
  );
}
