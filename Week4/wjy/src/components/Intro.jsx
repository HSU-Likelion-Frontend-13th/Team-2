import React from 'react';
import styled from 'styled-components';

const Section = styled.section`
  background-color: #4A86FF;
  color: #fff;
  width: 100%;
  aspect-ratio: 1920 / 800;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  box-sizing: border-box;
`;

const TextContainer = styled.div`
  max-width: 60rem;
  margin: 0 auto;
  font-size: clamp(2rem, 4vw, 5rem);
  line-height: 1.0;
`;

const Line = styled.p`
  font-size: clamp(1.5rem, 3vw, 3.5rem);
  margin: 0;
  margin-bottom: 1.0rem;
  line-height: 1.1;
  font-weight: 800;

  &:last-child {
    margin-bottom: 0;
  }
`;

export default function Intro() {
  return (
    <Section>
      <TextContainer>
        <Line>안녕하세요!</Line>
        <Line>제 이름은 원준영 입니다.</Line>
        <Line>소통하는 개발자가 되고 싶어요.</Line>
      </TextContainer>
    </Section>
  );
}