import styled from "styled-components";

export const HeaderSection = styled.section`
  display: flex;
  justify-content: center;
  width: 100%;
  height: 100%;
  background-color: var(--color-white);
`;

export const HeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  max-width: 1400px;
  padding: 24px 24px 0 24px;

  h1 {
    font-size: 36px;
    letter-spacing: 2px;
    padding: 2px;
  }
`;

export const OrderLink = styled.a`
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 8px;
  text-decoration: none;
  border: 1px solid var(--color-light-gray);
  border-radius: 4px;
  transition: 0.5s;

  span {
    font-size: 14px;
    font-family: "Lora", serif;
    color: var(--color-light-gray);
  }

  svg {
    color: var(--color-dark-gray);
  }

  :hover {
    background-color: var(--color-dark-gray);

    span {
      color: var(--color-white);
    }

    svg {
      color: var(--color-white);
    }
  }
`;
