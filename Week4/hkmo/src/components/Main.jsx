import styled from "styled-components";
import { About } from "./About";
import { Hobby } from "./Hobby";
import lol from "../assets/lol.svg";
import pingpong from "../assets/tabletennis.svg";
import bowling from "../assets/bowling.svg";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 4rem;
  background-color: #f3f5ff;
`;

const hobbys = [
  { title: "게임", img: lol },
  { title: "탁구 치기", img: pingpong },
  { title: "볼링 치기", img: bowling },
];

export const Main = () => {
  return (
    <Wrapper>
      <About />
      <Hobby first={hobbys[0]} seconds={hobbys[1]} third={hobbys[2]}/>
    </Wrapper>
  );
};
