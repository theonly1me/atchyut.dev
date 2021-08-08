import styled from 'styled-components';

export const LeftSection = styled.div`
  width: 100%;
  @media ${props => props.theme.breakpoints.sm} {
    width: 80%;
    display: flex;
    flex-direction: column;

    margin: 0 auto;
  }
  @media ${props => props.theme.breakpoints.md} {
    width: 100%;
    display: flex;
    flex-direction: column;
    margin: 0 auto;
  }
`;

export const HeroIcon = styled.img`
  max-width: 100px;

  @media ${props => props.theme.breakpoints.sm} {
    margin-left: 35%;
  }
  @media ${props => props.theme.breakpoints.md} {
    margin-left: 35%;
  }
`;