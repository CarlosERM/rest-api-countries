import React, { Children } from "react";
import { ContainerBody } from "./style";

const Body = ({ children }: React.ReactNode) => {
  return <ContainerBody> {...children}</ContainerBody>;
};

export default Body;
