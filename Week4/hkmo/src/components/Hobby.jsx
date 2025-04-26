import styled from "styled-components";

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
  @media (max-width: 1240px) {
    grid-template-columns: 1fr 1fr;
  }
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
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

export const Hobby = (props) => {
  
  return (
    <>
      <Title id="hobby">HOBBY</Title>
      <Wrapper>
        <Card>
          <Top>{props.first.title}</Top>
          <img src={props.first.img} alt="" />
        </Card>
        <Card>
          <Top>{props.seconds.title}</Top>
          <img src={props.seconds.img} alt="" />
        </Card>
        <Card>
          <Top>{props.third.title}</Top>
          <img src={props.third.img} alt="" />
        </Card>
      </Wrapper>
    </>
  );
};
