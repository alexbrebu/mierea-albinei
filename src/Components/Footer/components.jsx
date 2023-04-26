import styled from "styled-components";

export const FooterSection = styled.footer`
  display: flex;
  width: 100%;
  height: 1000px;
  padding: 128px 24px 24px 24px;
`;

export const ContactContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  gap: 36px;
`;

export const SocialMediaContainer = styled.div`
  display: flex;
  width: 100%;
  padding: 24px;
`;

export const SocialsContainer = styled.div`
  display: flex;
  flex-direction: column;
  /* padding: 24px; */
  width: 100%;
  gap: 12px;
`;

export const ContactTitleContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 18px;
  padding: 24px;

  h3 {
    font-family: "Lora", serif;
    font-size: 20px;
    font-weight: 500;
    color: var(--color-dark-gray);
  }

  span {
    font-size: 16px;
    font-weight: 500;
    color: var(--color-dark-gray);
  }
`;

export const ContactInfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
  padding: 24px;

  a {
    display: flex;
    justify-content: center;
    gap: 12px;
    text-decoration: none;
    color: var(--color-dark-gray);
    cursor: pointer;
    font-size: 14px;
    font-family: "Lora", serif;
    font-weight: 600;

    svg {
      width: 20px;
      height: 20px;
    }
  }
`;

export const FacebookLink = styled.a`
  svg {
    width: 36px;
    height: 36px;
    cursor: pointer;
    color: black;
    transition: 0.6s;

    :hover {
      color: #1877f2;
      transform: scale(1.2);
    }
  }
`;
export const InstagramLink = styled.a`
  svg {
    width: 36px;
    height: 36px;
    cursor: pointer;
    color: black;
    transition: 0.6s;

    :hover {
      color: #c32aa3;
      transform: scale(1.2);
    }
  }
`;
export const WhatsappLink = styled.a`
  svg {
    width: 36px;
    height: 36px;
    cursor: pointer;
    color: black;
    transition: 0.6s;

    :hover {
      color: #25d366;
      transform: scale(1.2);
    }
  }
`;
export const MapsLink = styled.a`
  svg {
    width: 36px;
    height: 36px;
    cursor: pointer;
    color: black;
    transition: 0.6s;

    :hover {
      color: #ea4335;
      transform: scale(1.2);
    }
  }
`;
