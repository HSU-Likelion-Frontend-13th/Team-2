import React from 'react';
import styled from 'styled-components';
import hobby1 from '../assets/hobby.jpeg';
import hobby2 from '../assets/hobby2.png';
import hobby3 from '../assets/hobby3.jpeg';

const Section = styled.section`
  padding: 4rem 2rem;
  background-color: #F3F5FF;
`;

const Title = styled.h2`
  text-align: center;
  font-size: 4rem;
  color: #4A86FF;
  font-weight: 800;
  margin-bottom: 4rem;
  margin-top: 0; 
`;

const HobbyList = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 2rem;
`;

const HobbyItem = styled.div`
  width: 23rem;
  height: 23rem;
  background-color: #ffffff;
  border-radius: 1rem;
  padding: 0;
  text-align: center;
  overflow: hidden;
  display: flex;
  flex-direction: column;
`;

const HobbyImage = styled.img`
  width: 18rem;
  height: 13rem;
  object-fit: cover;
  border-radius: 1rem;
  margin: 1.2rem auto 0;
`;

const ImageWrapper = styled.div`
  background-color: #ffffff;
  display: flex;
  justify-content: center;
  align-items: center;
  flex: 1;
`;

const HobbyLabel = styled.h3`
  font-family: 'Inter', sans-serif;
  font-weight: 700;
  font-size: 2rem;
  background-color: #4A86FF;
  color: #ffffff;
  padding: 0.75rem 0;
  margin: 0;
`;

export default function Hobby() {
  return (
    <Section id="hobby">
      <Title>HOBBY</Title>
      <HobbyList>
        <HobbyItem>
          <HobbyLabel>노래듣기</HobbyLabel>
          <ImageWrapper>
            <HobbyImage src={hobby1} alt="노래듣기" />
          </ImageWrapper>
        </HobbyItem>
        <HobbyItem>
          <HobbyLabel>먹기</HobbyLabel>
          <ImageWrapper>
            <HobbyImage src={hobby2} alt="먹기" />
          </ImageWrapper>
        </HobbyItem>
        <HobbyItem>
          <HobbyLabel>놀기</HobbyLabel>
          <ImageWrapper>
            <HobbyImage src={hobby3} alt="놀기" />
          </ImageWrapper>
        </HobbyItem>
      </HobbyList>
    </Section>
  );
}