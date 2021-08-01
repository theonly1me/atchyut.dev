import styled from 'styled-components';

export const Img = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  overflow: hidden;
`;

export const GridContainer = styled.section`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(400px, 1fr));
  padding: 3rem;
  place-items: center;
  column-gap: 2rem;
  row-gap: 3rem;
  @media ${props => props.theme.breakpoints.sm} {
    display: flex;
    flex-direction: column;
    padding: 2rem;
    padding-bottom: 0;
  }
`;
export const BlogCard = styled.div`
  border-radius: 20px;
  background-color: #1e272e;
  box-shadow: 3px 3px 20px rgba(0, 0, 0, 0.5);

  text-align: center;
  width: 400px;
  @media ${props => props.theme.breakpoints.sm} {
    width: 100%;
  }
`;
export const TitleContent = styled.div`
  text-align: center;
  z-index: 20;
  width: 100%;
`;

export const HeaderThree = styled.h3`
  font-weight: 500;
  letter-spacing: 2px;
  color: #9cc9e3;
  padding: 0.5rem 0;
  font-size: ${props => (props.title ? '3rem' : '2rem')};
`;

export const Hr = styled.hr`
  width: 50px;
  height: 3px;
  margin: 20px auto;
  border: 0;
  background: linear-gradient(to right, #e96443, #904e95);
`;

export const Intro = styled.div`
  width: 170px;
  margin: 0 auto;
  color: #dce3e7;
  font-family: 'Droid Serif', serif;
  font-size: 13px;
  font-style: italic;
  line-height: 18px;
`;

export const CardInfo = styled.p`
  width: 100%;
  padding: 0 50px;
  color: #e4e6e7;
  font-style: 2rem;
  line-height: 24px;
  text-align: justify;
  @media ${props => props.theme.breakpoints.sm} {
    padding: 0.3rem;
  }
`;

export const UtilityList = styled.ul`
  list-style-type: none;
  padding: 0;
  display: flex;
  justify-content: space-around;
  margin: 2.5rem 0;
`;

export const ExternalLinks = styled.a`
  color: #fff;
  font-size: 1.6rem;
  padding: 1rem 1.5rem;
  font-weight: 600;
  background: linear-gradient(to right, #ff416c, #ff4b2b);
  border-radius: 15px;
  box-shadow: 0 3px 8px rgb(0 0 0 / 0.3);

  transition: all 0.2s;
  &:hover {
    background: linear-gradient(to left, #ff416c, #ff4b2b);
    transform: translateY(-3px);
    box-shadow: 0 5px 10px rgb(0 0 0 / 0.2);
  }
  &:active {
    background: linear-gradient(to right, #ff416c, #ff4b2b);
    transform: translateY(1px);
    box-shadow: 0 2px 10px rgb(0 0 0 / 0.2);
  }
`;

export const TagList = styled.ul`
  display: flex;
  justify-content: space-around;
  padding: 2rem;
`;
export const Tag = styled.li`
  color: #d8bfbf;
  font-size: 1.5rem;
`;
