import React from 'react';
import {
  DiAngularSimple,
  DiAws,
  DiBrackets,
  DiCode,
  DiCss3,
  DiDjango,
  DiDocker,
  DiDotnet,
  DiFirebase,
  DiGithubBadge,
  DiHtml5,
  DiJavascript1,
  DiJenkins,
  DiMongodb,
  DiNodejs,
  DiPhotoshop,
  DiPostgresql,
  DiReact,
  DiSass,
  DiSqllite,
  DiTravis,
} from 'react-icons/di';
import {
  SiCassandra,
  SiCheckmarx,
  SiCsharp,
  SiFastly,
  SiFigma,
  SiFirebase,
  SiFlask,
  SiGraphql,
  SiJava,
  SiKubernetes,
  SiMaterialdesign,
  SiMaterialUi,
  SiNextDotJs,
  SiPython,
  SiRedis,
  SiSpring,
  SiStyledComponents,
  SiTypescript,
} from 'react-icons/si';
import { CgCloud, CgDatabase, CgScreen, CgServer } from 'react-icons/cg';
import {
  Section,
  SectionDivider,
  SectionText,
  SectionTitle,
} from '../../styles/GlobalComponents';
import {
  List,
  ListContainer,
  ListItem,
  ListParagraph,
  ListTitle,
} from './TechnologiesStyles';

import { BsLightning } from 'react-icons/bs';

const Technologies = () => (
  <Section id="tech">
    <SectionDivider />
    <SectionTitle main>Technical Skill-tree</SectionTitle>
    <SectionText>
      A programming language or framework is nothing but a tool. My goal as a
      Software Engineer is to become tech-stack agnostic and gain the ability to
      build enterprise grade web apps & microservices with a wide variety of
      technologies.
      <br />
      <br />
      Here are some of my current skills. However, I can confidently say that
      they will only keep growing.
    </SectionText>
    <List>
      <ListItem>
        <ListContainer>
          <DiCode size="3rem" />
          <ListTitle>Languages</ListTitle>
          <ListParagraph>
            <DiJavascript1 /> Javascript
          </ListParagraph>
          <ListParagraph>
            <SiTypescript /> Typescript
          </ListParagraph>
          <ListParagraph>
            <SiPython /> Python3
          </ListParagraph>
          <ListParagraph>
            <SiJava /> Java
          </ListParagraph>
          <ListParagraph>
            <SiCsharp /> C#
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <ListContainer>
          <CgScreen size="3rem" />
          <ListTitle>Front-End</ListTitle>
          <ListParagraph>
            <DiJavascript1 />
            <DiHtml5 />
            <DiCss3 /> HTML / CSS / JS
          </ListParagraph>
          <ListParagraph>
            <DiSass /> SCSS
          </ListParagraph>
          <ListParagraph>
            <DiReact /> ReactJS - Redux
          </ListParagraph>
          <ListParagraph>
            <SiNextDotJs /> NextJS
          </ListParagraph>
          <ListParagraph>
            <DiAngularSimple /> Angular
          </ListParagraph>
          <ListParagraph>
            <SiMaterialUi /> MaterialUI
          </ListParagraph>
          <ListParagraph>
            <SiStyledComponents /> Styled Components
          </ListParagraph>
          <ListParagraph>
            <DiReact /> React Native
          </ListParagraph>
          <ListParagraph>
            <SiGraphql /> GraphQL Clients
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <ListContainer>
          <CgServer size="3rem" />
          <ListTitle>Back-End</ListTitle>
          <ListParagraph>
            <DiNodejs /> NodeJS
          </ListParagraph>
          <ListParagraph>
            <DiBrackets />
            ExpressJS
          </ListParagraph>
          <ListParagraph>
            <DiBrackets />
            NestJS
          </ListParagraph>
          <ListParagraph>
            <DiBrackets />
            Fastify
          </ListParagraph>
          <ListParagraph>
            <DiDjango /> Django (RF)
          </ListParagraph>
          <ListParagraph>
            <SiFlask /> Flask
          </ListParagraph>
          <ListParagraph>
            <BsLightning /> FastAPI
          </ListParagraph>
          <ListParagraph>
            <SiSpring /> Spring Boot
          </ListParagraph>
          <ListParagraph>
            <DiDotnet /> .NET Core
          </ListParagraph>
          <ListParagraph>
            <SiGraphql /> GraphQL Servers
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <ListContainer>
          <CgCloud size="3rem" />
          <ListTitle>Cloud & DevOps</ListTitle>
          <ListParagraph>
            <DiDocker /> Docker
          </ListParagraph>
          <ListParagraph>
            <SiKubernetes /> Kubernetes
          </ListParagraph>
          <ListParagraph>
            <DiTravis /> TravisCI
          </ListParagraph>
          <ListParagraph>
            <DiGithubBadge /> GitHub Actions
          </ListParagraph>
          <ListParagraph>
            <DiAws /> AWS
          </ListParagraph>
          <ListParagraph>
            <DiFirebase /> Firebase
          </ListParagraph>
          <ListParagraph>
            <DiJenkins /> Jenkins
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <ListContainer>
          <CgScreen size="3rem" />
          <ListTitle>UI / UX</ListTitle>
          <ListParagraph>
            <SiFigma /> Figma
          </ListParagraph>
          <ListParagraph>
            <DiPhotoshop /> Photoshop
          </ListParagraph>
          <ListParagraph>
            <SiMaterialdesign /> Visual Design
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <ListContainer>
          <CgDatabase size="3rem" />
          <ListTitle>Databases</ListTitle>
          <ListParagraph>
            <SiRedis /> Redis
          </ListParagraph>
          <ListParagraph>
            <DiMongodb /> MongoDB
          </ListParagraph>
          <ListParagraph>
            <SiCassandra /> Cassandra
          </ListParagraph>
          <ListParagraph>
            <SiFirebase /> FireStore & RealtimeDB
          </ListParagraph>
          <ListParagraph>
            <DiSqllite /> SQLite
          </ListParagraph>
          <ListParagraph>
            <DiPostgresql /> PostgreSQL
          </ListParagraph>
        </ListContainer>
      </ListItem>
    </List>
  </Section>
);

export default Technologies;
