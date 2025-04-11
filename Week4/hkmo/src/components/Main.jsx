import styled from "styled-components";
import { About } from "./About";

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
    </Wrapper>
  );
};
