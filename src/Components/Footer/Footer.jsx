import React from "react";
import {
  ContactContainer,
  ContactInfoContainer,
  ContactTitleContainer,
  FacebookLink,
  FooterSection,
  InstagramLink,
  MapsLink,
  SocialMediaContainer,
  SocialsContainer,
  WhatsappLink,
} from "./components";

import { FiMapPin } from "react-icons/fi";
import { BsFillTelephoneOutboundFill } from "react-icons/bs";
import { BiMailSend } from "react-icons/bi";
import { FaFacebookSquare } from "react-icons/fa";
import { BsInstagram } from "react-icons/bs";
import { TbMapSearch } from "react-icons/tb";
import { IoLogoWhatsapp } from "react-icons/io";

export const Footer = () => {
  return (
    <FooterSection>
      <ContactContainer>
        <ContactTitleContainer>
          <h3>Mierea Albinei</h3>
          <span>Cofetarie Artizanala</span>
        </ContactTitleContainer>
        <ContactInfoContainer>
          <a
            href="https://www.google.com/maps/place/COFETARIA+MIEREA+ALBINEI/@44.8592653,24.8781757,17z/data=!3m1!4b1!4m14!1m7!3m6!1s0x40b2bd375b5b8e05:0x2c65f1312f97106e!2sCOFETARIA+MIEREA+ALBINEI!8m2!3d44.8592615!4d24.8807506!16s%2Fg%2F11rzwpcfqt!3m5!1s0x40b2bd375b5b8e05:0x2c65f1312f97106e!8m2!3d44.8592615!4d24.8807506!16s%2Fg%2F11rzwpcfqt"
            target="_blank"
          >
            Str. Sfanta Vineri, Nr. 55A, Pitesti <FiMapPin />
          </a>
          <a href="tel: 0724720072">
            0724 720 072
            <BsFillTelephoneOutboundFill />
          </a>
          <a href="mailto:miereaalbinei@yahoo.com">
            miereaalbinei@yahoo.com
            <BiMailSend />
          </a>
        </ContactInfoContainer>
      </ContactContainer>
      <SocialMediaContainer>
        <SocialsContainer>
          <FacebookLink
            href="https://www.facebook.com/profile.php?id=100085022553812"
            target="_blank"
          >
            <FaFacebookSquare />
          </FacebookLink>
          <InstagramLink href="https://www.instagram.com/" target="_blank">
            <BsInstagram />
          </InstagramLink>
          <WhatsappLink
            href="https://wa.me/40724720072?text=Buna%20ziua!%20Sunt%20interesat%20de%20produsele%20cofetariei"
            target="_blank"
          >
            <IoLogoWhatsapp />
          </WhatsappLink>
          <MapsLink
            href="https://www.google.com/maps/place/COFETARIA+MIEREA+ALBINEI/@44.8592653,24.8781757,17z/data=!3m1!4b1!4m14!1m7!3m6!1s0x40b2bd375b5b8e05:0x2c65f1312f97106e!2sCOFETARIA+MIEREA+ALBINEI!8m2!3d44.8592615!4d24.8807506!16s%2Fg%2F11rzwpcfqt!3m5!1s0x40b2bd375b5b8e05:0x2c65f1312f97106e!8m2!3d44.8592615!4d24.8807506!16s%2Fg%2F11rzwpcfqt"
            target="_blank"
          >
            <TbMapSearch />
          </MapsLink>
        </SocialsContainer>
      </SocialMediaContainer>
    </FooterSection>
  );
};
