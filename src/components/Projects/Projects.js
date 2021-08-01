import React from 'react';

import {
  BlogCard,
  CardInfo,
  ExternalLinks,
  GridContainer,
  HeaderThree,
  Hr,
  Tag,
  TagList,
  TitleContent,
  UtilityList,
  Img,
} from './ProjectsStyles';
import {
  Section,
  SectionDivider,
  SectionTitle,
  SectionText,
} from '../../styles/GlobalComponents';
import { projects } from '../../constants/constants';
import Header from '../Header/Header';

const Projects = () => (
  <Section nopadding id="projects">
    <SectionDivider />
    <SectionTitle main>Side Projects</SectionTitle>
    <SectionText>
      Aside from the robust & cloud-ready enterprise apps and microservives I
      build at work, I take pleasuring in learning and working with a multitude
      of different technologies in my freetime.
      <br />
      <br />
      Here are some of the fun projects I've built in the process! 🧛🏼 You can
      find the rest on my GitHub.
    </SectionText>
    <GridContainer>
      {projects.map(
        ({ id, image, title, description, tags, source, visit }) => (
          <BlogCard key={id}>
            <Img src={image} />
            <TitleContent>
              <HeaderThree title={title}> {title} </HeaderThree>
              <Hr />
            </TitleContent>
            <CardInfo>{description}</CardInfo>
            <Hr />
            <div>
              <TitleContent>Technology Stack</TitleContent>
              <TagList>
                {tags.map((tag, i) => (
                  <Tag key={i}>{tag}</Tag>
                ))}
              </TagList>
            </div>
            <UtilityList>
              <ExternalLinks href={source} target="_blank">
                GitHub Repository
              </ExternalLinks>
              <ExternalLinks href={visit} target="_blank">
                Visit Website
              </ExternalLinks>
            </UtilityList>
          </BlogCard>
        )
      )}
    </GridContainer>
  </Section>
);

export default Projects;
