import React from "react";

type BodyProps = {
  children?: React.ReactNode;
};

const Body = ({ children }: BodyProps) => {
  return <section>{children}</section>;
};

export default Body;
