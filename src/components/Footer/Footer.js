import React from 'react';
import {
  AiFillGithub,
  AiFillInstagram,
  AiFillLinkedin,
  AiFillTwitterCircle,
} from 'react-icons/ai';
import { BiCopyright } from 'react-icons/bi';
import { SocialIcons } from '../Header/HeaderStyles';
import {
  CompanyContainer,
  FooterWrapper,
  LinkColumn,
  LinkItem,
  LinkList,
  LinkTitle,
  Slogan,
  SocialContainer,
  SocialIconsContainer,
} from './FooterStyles';

import { SiNextDotJs } from 'react-icons/si';

const Footer = () => {
  return (
    <FooterWrapper>
      <LinkList>
        <LinkColumn>
          <LinkTitle>Email</LinkTitle>
          <LinkItem href="mailto:pulavarthi.preetham@gmail.com">
            pulavarthi.preetham@gmail.com
          </LinkItem>
        </LinkColumn>
      </LinkList>
      <SocialIconsContainer>
        <CompanyContainer>
          <Slogan>
            <SiNextDotJs /> Built using NextJS
          </Slogan>
        </CompanyContainer>
        <SocialContainer>
          <SocialIcons href="https://github.com/theonly1me" target="_blank">
            <AiFillGithub size="3rem" />{' '}
          </SocialIcons>
          <SocialIcons
            href="https://www.linkedin.com/in/atchyutpulavarthi"
            target="_blank"
          >
            <AiFillLinkedin size="3rem" />{' '}
          </SocialIcons>
          <SocialIcons
            href="https://www.instagram.com/pulavarthi.preetham"
            target="_blank"
          >
            <AiFillInstagram size="3rem" />{' '}
          </SocialIcons>
          <SocialIcons
            href="https://www.twitter.com/AtchyutPreetham"
            target="_blank"
          >
            <AiFillTwitterCircle size="3rem" />{' '}
          </SocialIcons>
        </SocialContainer>
      </SocialIconsContainer>
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <BiCopyright /> Atchyut Preetham Pulavarthi 2021
      </div>
    </FooterWrapper>
  );
};

export default Footer;
