import styled from "styled-components";

import profile from "../assets/profile.jpg";
import phone from "../assets/call.svg";
import email from "../assets/message.svg";
import mappin from "../assets/mappin.svg";

const Title = styled.h1`
  color: #ff804a;
  font-size: 4.5rem;
  font-weight: bold;
  margin-bottom: 4rem;
`;

const Wrapper = styled.div`
  max-width: 1184px;
  display: grid;
  grid-template-columns: 1fr 2fr;
  gap: 1.4rem;
  padding-bottom: 20vh;
  @media (max-width: 1240px) {
    grid-template-columns: 1fr;
  }
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const Profile = styled.div`
  background-color: white;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 1.5rem;
  border-radius: 1rem;
  padding: 2rem;
  width: 23.75rem;
  img {
    width: 12.5rem;
    height: 12.5rem;
    border-radius: 50%;
    border: none;
    background-color: #ebedf8;
  }
  p {
    color: #ff804a;
    font-size: 2.5rem;
    font-weight: bold;
  }
`;

const Contacts = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;

  img {
    background-color: white;
    width: 2.5rem;
    height: 2.5rem;
  }
`;

const ContactList = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;

const Details = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 3fr 1fr;
  gap: 1.4rem;
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    grid-template-rows: 1fr;
  }
`;

const MiniCard = styled.div`
  min-width: 380px;
  h3 {
    font-size: 2rem;
    margin-bottom: 1.5rem;
  }
  p {
    font-size: 1.2rem;
    color: #626682;
    font-weight: bold;
  }
`;

export const About = () => {
  return (
    <>
      <Title id="about">ABOUT</Title>
      <Wrapper>
        <Profile id="contact">
          <img src={profile} alt="" />
          <p>구혁모</p>
          <Contacts>
            <ContactList>
              <img src={phone} alt="" />
              010.6257.1161
            </ContactList>
            <ContactList>
              <img src={email} alt="" />
              gurah129@hansung.ac.kr
            </ContactList>
            <ContactList>
              <img src={mappin} alt="" />
              경기도 남양주시
            </ContactList>
          </Contacts>
        </Profile>
        <Details>
          <MiniCard>
            <h3>EDUCATION</h3>
            <p>
              한성대학교 컴퓨터공학부
              <br />
              2020.03~
            </p>
          </MiniCard>
          <MiniCard>
            <h3>SKILLS</h3>
            <p>
              Python
              <br />
              Java
              <br />
              C++
              <br />
              JavaScript
            </p>
          </MiniCard>
          <MiniCard>
            <h3>WORK</h3>
            <p>프론트엔드 개발자</p>
          </MiniCard>
          <MiniCard>
            <h3>ACTIVITIES</h3>
            <p>멋쟁이사자처럼 13기</p>
          </MiniCard>
        </Details>
      </Wrapper>
    </>
  );
};
