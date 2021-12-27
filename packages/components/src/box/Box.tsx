import React from "react";

interface BoxProps {
  background: string
  border: string
  children: JSX.Element
  display: string
  m: string
  p: string
}

const Box = ({
  background,
  border,
  children,
  display,
  m,
  p
}: BoxProps) => {
  return (
    <div style={{ background, border, display, padding: p, margin: m }}>
      {children}
    </div>
  );
};

export {
  Box
};