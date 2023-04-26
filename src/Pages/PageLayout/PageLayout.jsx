import React from "react";
import { Header } from "../../Components/Header/Header";
import { Container, Content } from "./components";
import { Footer } from "../../Components/Footer/Footer";

export const PageLayout = (props) => {
  return (
    <Container>
      <Header />
      <Content>{props.children}</Content>
      <Footer />
    </Container>
  );
};
