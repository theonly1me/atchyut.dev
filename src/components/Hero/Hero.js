import React from 'react';

import {
  Section,
  SectionText,
  SectionTitle,
} from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = props => (
  <Section row nopadding>
    <LeftSection>
      <SectionTitle main center>
        Hi there, I'm Atchyut. 👋
      </SectionTitle>
      <SectionText>
        A result-oriented software developer with varied experience in building
        Cloud-first applications and the goal to become a language and framework
        agnostic technical expert carrying a zeal to optimize anything to it's
        best possible runtime.
      </SectionText>
      <Button
        onClick={() =>
          window.open('https://linkedin.com/in/atchyutpulavarthi', '_blank')
        }
      >
        Visit LinkedIn profile
      </Button>
    </LeftSection>
  </Section>
);

export default Hero;
