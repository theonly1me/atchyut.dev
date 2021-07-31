import Link from 'next/link';
import React from 'react';
import {
  AiFillGithub,
  AiFillInstagram,
  AiFillLinkedin,
  AiFillTwitterCircle,
} from 'react-icons/ai';
import { DiCssdeck } from 'react-icons/di';

import {
  Container,
  Div1,
  Div2,
  Div3,
  NavLink,
  SocialIcons,
  Span,
} from './HeaderStyles';

const Header = () => (
  <Container>
    <Div1>
      <Link href="/">
        <a style={{ display: 'flex', alignItems: 'center', color: 'white' }}>
          <DiCssdeck size="3rem" /> <Span>Atchyut.dev</Span>
        </a>
      </Link>
    </Div1>
    <Div2>
      <li>
        <Link href="#projects">
          <NavLink>Projects</NavLink>
        </Link>
      </li>
      <li>
        <Link href="#tech">
          <NavLink>Technologies</NavLink>
        </Link>
      </li>
      <li>
        <Link href="#about">
          <NavLink>About</NavLink>
        </Link>
      </li>
    </Div2>
    <Div3>
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
    </Div3>
  </Container>
);

export default Header;
