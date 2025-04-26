import React from 'react';
import styled from 'styled-components';
import ContactInfo from './ContactInfo';

const Section = styled.section`
  background-color: #F3F5FF;
  padding: 5rem 1rem;
`;

const Title = styled.h2`
  text-align: center;
  font-size: 4rem;
  color: #4A86FF;
  font-weight: 800;
  margin-bottom: 4rem;
  margin-top: 0; 
`;

const ContentWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 2fr;
  gap: 6rem;
  max-width: 80rem;
  margin: 0 auto;
  align-items: start;
`;

const InfoGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, minmax(12rem, 1fr));
  gap: 3rem 4rem;
  flex: 1;
  align-items: start;
`;

const InfoBox = styled.div``;

const InfoTitle = styled.h3`
  font-size: 2rem;
  font-weight: 700;
`;

const InfoDetail = styled.p`
  font-size: 1.25rem;
  font-weight: 700;
  color: #626682;
`;

export default function About() {
  return (
    <Section id="about">
      <Title>ABOUT</Title>
      <ContentWrapper>
        <ContactInfo />
        <InfoGrid>
          <InfoBox>
            <InfoTitle>EDUCATION</InfoTitle>
            <InfoDetail>한성대학교 컴퓨터공학부</InfoDetail>
            <InfoDetail>2022.03~2026.02</InfoDetail>
          </InfoBox>
          <InfoBox>
            <InfoTitle>SKILLS</InfoTitle>
            <InfoDetail><strong>Python</strong></InfoDetail>
            <InfoDetail><strong>Java</strong></InfoDetail>
            <InfoDetail><strong>C++</strong></InfoDetail>
            <InfoDetail><strong>JavaScript</strong></InfoDetail>
          </InfoBox>
          <InfoBox>
            <InfoTitle>WORK</InfoTitle>
            <InfoDetail>프론트엔드 개발자</InfoDetail>
            <InfoDetail>백엔드 개발자</InfoDetail>
          </InfoBox>
          <InfoBox>
            <InfoTitle>ACTIVITIES</InfoTitle>
            <InfoDetail>멋쟁이사자처럼 13기</InfoDetail>
          </InfoBox>
        </InfoGrid>
      </ContentWrapper>
    </Section>
  );
}