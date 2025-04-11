import styled from "styled-components";
import { About } from "./About";
import { Hobby } from "./Hobby";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 4rem;
  background-color: #f3f5ff;
`;

export const Main = () => {
  return (
    <Wrapper>
      <About />
      <Hobby />
    </Wrapper>
  );
};
