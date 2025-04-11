import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;
  background-color: #ff804a;
  color: white;
  align-items: center;
  justify-content: center;
  font-size: 5rem;
  font-weight: bold;
  text-align: center;
  padding: 13vw;
`;

export const Frist = () => {
  return (
    <Wrapper>
      안녕하세요!
      <br />제 이름은 구혁모 입니다.
      <br />
      소통하는 개발자가 되고 싶어요.
    </Wrapper>
  );
};
