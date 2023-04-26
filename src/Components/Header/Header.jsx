import React from "react";
import { HeaderContainer, HeaderSection, OrderLink } from "./components";

import { BsTelephoneOutboundFill } from "react-icons/bs";

export const Header = () => {
  return (
    <HeaderSection>
      <HeaderContainer>
        <h1>Mierea~albinei</h1>
        <OrderLink href="tel:0747788940">
          <span>Comanda</span>
          <BsTelephoneOutboundFill />
        </OrderLink>
      </HeaderContainer>
    </HeaderSection>
  );
};
