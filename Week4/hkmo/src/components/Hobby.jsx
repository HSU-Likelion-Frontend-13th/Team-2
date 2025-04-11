import styled from "styled-components";
import lol from "../assets/lol.svg";
import pingpong from "../assets/tabletennis.svg";
import bowling from "../assets/bowling.svg";

const Title = styled.h1`
  color: #ff804a;
  font-size: 4.5rem;
  font-weight: bold;
  margin-bottom: 4rem;
`;

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 1.4rem;
  padding-bottom: 20vh;
`;

const Card = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 1rem;
  background-color: white;
  width: 23.75rem;
  img {
    padding: 2.5rem;
  }
`;

const Top = styled.div`
  background-color: #ff804a;
  border-radius: 1rem 1rem 0 0;
  color: white;
  padding: 1.3rem;
  font-size: 2rem;
  font-weight: bold;
  text-align: center;
  width: 100%;
`;

export const Hobby = () => {
  return (
    <>
      <Title>HOBBY</Title>
      <Wrapper>
        <Card>
          <Top>게임</Top>
          <img src={lol} alt="" />
        </Card>
        <Card>
          <Top>탁구 치기</Top>
          <img src={pingpong} alt="" />
        </Card>
        <Card>
          <Top>볼링 치기</Top>
          <img src={bowling} alt="" />
        </Card>
      </Wrapper>
    </>
  );
};
