import React from 'react';
import phoneIcon from '../assets/Phone.png';
import emailIcon from '../assets/EnvelopeSimple.png';
import locationIcon from '../assets/MapPin.png';
import profileImage from '../assets/my.png';
import styled from 'styled-components';

const Container = styled.div`
  background-color: #ffffff;
  padding: 2rem;
  border-radius: 1rem;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.05);
  width: 23.75rem;
  height: 31.125rem;
  text-align: left;
`;

const ProfileImageWrapper = styled.div`
  width: 12rem;
  height: 12rem;
  border-radius: 50%;
  overflow: hidden;
  margin: 0 auto 1rem;
  background-color: #EBEDF8;
`;

const ProfileImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const Name = styled.h3`
  color: #4A86FF;
  font-size: 2.5rem;
  font-weight: 700;
`;

const InfoItem = styled.div`
  display: flex;
  align-items: center;
  gap: 0.4rem;
  margin: 0.4rem 0;
  justify-content: flex-start;
`;

const Icon = styled.img`
  width: 2rem;
  height: 2rem;
`;

const InfoText = styled.p`
  font-family: 'Inter', sans-serif;
  font-weight: 500;
  font-size: 1rem;
  color: #000;
  margin: 0;
  text-align: left;
  word-break: keep-all;
  flex: 1;
  line-height: 1.5;
`;

export default function ContactInfo() {
  return (
    <Container>
      <ProfileImageWrapper>
        <ProfileImage src={profileImage} alt="프로필" />
      </ProfileImageWrapper>
      <Name style={{ textAlign: 'center' }}>원준영</Name>
      <div>
        <InfoItem>
          <Icon src={phoneIcon} alt="전화" />
          <InfoText>010-6275-1591</InfoText>
        </InfoItem>
        <InfoItem>
          <Icon src={emailIcon} alt="이메일" />
          <InfoText>junyeongwon872@gmail.com</InfoText>
        </InfoItem>
        <InfoItem>
          <Icon src={locationIcon} alt="위치" />
          <InfoText>경기도 양주시 고읍로 11-7 한양수자인이파트</InfoText>
        </InfoItem>
      </div>
    </Container>
  );
}