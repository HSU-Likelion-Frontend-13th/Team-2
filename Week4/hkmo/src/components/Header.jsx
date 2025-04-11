import styled from "styled-components";

const Wrapper = styled.div`
  margin: 1.8rem;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 25vw;
`;

const LinkWrapper = styled.div`
  display: flex;
  gap: 2rem;
`;

const Logo = styled.a`
  text-decoration: none;
  font-size: 2rem;
  color: #ff804a;
  font-weight: bold;
  padding: 1rem;
  &:hover {
    text-decoration: none;
  }
`;

const LinkText = styled.a`
  font-size: 1.5rem;
  color: black;
  font-weight: 400;
  &:hover {
    text-decoration: underline;
  }
`;

export const Header = () => {
  return (
    <Wrapper>
      <Logo>PORTFOLIO.</Logo>
      <LinkWrapper>
        <LinkText>ABOUT</LinkText>
        <LinkText>HOBBY</LinkText>
        <LinkText>CONTACT</LinkText>
      </LinkWrapper>
    </Wrapper>
  );
};
