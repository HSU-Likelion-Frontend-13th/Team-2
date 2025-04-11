import styled from "styled-components";

const Wrapper = styled.div`
  margin: 1.8rem;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 25vw;
  @media (max-width: 1240px) {
    gap: 15vw;
  }
  @media (max-width: 768px) {
    flex-direction: column;
    gap: 0;
  }
`;

const LinkWrapper = styled.div`
  display: flex;
  gap: 2rem;
  @media (max-width: 768px) {
    gap: 0;
  }
`;

const Logo = styled.a`
  text-decoration: none;
  font-size: 2rem;
  color: #ff804a;
  font-weight: bold;
  padding: 1rem;
`;

const LinkText = styled.a`
  text-decoration: none;
  font-size: 1.5rem;
  color: black;
  font-weight: 400;
  padding: 1rem;
  &:hover {
    text-decoration: underline;
  }
`;

export const Header = () => {
  return (
    <Wrapper>
      <Logo href="index.html">PORTFOLIO.</Logo>
      <LinkWrapper>
        <LinkText href="#about">ABOUT</LinkText>
        <LinkText href="#hobby">HOBBY</LinkText>
        <LinkText href="#contact">CONTACT</LinkText>
      </LinkWrapper>
    </Wrapper>
  );
};
