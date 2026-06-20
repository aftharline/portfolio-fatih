"use client";
import React from "react";
import { cn } from "../../lib/utils";

export const BoxesCore = ({ className, ...rest }: { className?: string }) => {
  // Kurangi drastis: 150x100 jadi 20x10 biar enteng
  const rows = new Array(20).fill(1);
  const cols = new Array(10).fill(1);

  return (
    <div
      style={{
        transform: `translate(-40%,-60%) skewX(-48deg) skewY(14deg) scale(0.675) rotate(0deg) translateZ(0)`,
      }}
      className={cn("absolute left-1/4 p-4 -top-1/4 flex -translate-x-1/2 -translate-y-1/2 w-full h-full z-0 pointer-events-none", className)}
      {...rest}
    >
      {rows.map((_, i) => (
        <div key={`row` + i} className="w-16 h-8 border-l border-zinc-800 relative">
          {cols.map((_, j) => (
            <div
              key={`col` + j}
              // Hover pake CSS biasa, jauh lebih enteng daripada Framer Motion
              className="w-16 h-8 border-r border-t border-zinc-800 transition-colors duration-300 hover:bg-zinc-800/50"
            />
          ))}
        </div>
      ))}
    </div>
  );
};

export const Boxes = React.memo(BoxesCore);