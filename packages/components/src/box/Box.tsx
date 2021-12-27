import React from "react";

interface BoxProps {
  border: string
  children: JSX.Element
  display: string
  m: string
  p: string
}

const Box = ({
  border,
  children,
  display,
  m,
  p
}: BoxProps) => {
  return (
    <div style={{ border, display, padding: p, margin: m }}>
      {children}
    </div>
  );
};

export {
  Box
};