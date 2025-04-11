import styled from "styled-components";

const Title = styled.h1``;
const Wrapper = styled.div``;
const Profile = styled.div``;
const Img = styled.img``;
const ProfileTitle = styled.p``;
const Contacts = styled.div``;
const ContactList = styled.div``;
const ContactImg = styled.img``;
const Details = styled.div``;
const MiniCard = styled.div``;
const CardTitle = styled.h3``;
const CardText = styled.p``;

export const About = () => {
  return (
    <>
      <Title></Title>
      <Wrapper>
        <Profile>
          <Img />
          <ProfileTitle></ProfileTitle>
          <Contacts>
            <ContactList>
              <ContactImg />
            </ContactList>
            <ContactList>
              <ContactImg />
            </ContactList>
            <ContactList>
              <ContactImg />
            </ContactList>
          </Contacts>
        </Profile>
        <Details>
          <MiniCard>
            <CardTitle></CardTitle>
            <CardText></CardText>
          </MiniCard>
          <MiniCard>
            <CardTitle></CardTitle>
            <CardText></CardText>
          </MiniCard>
          <MiniCard>
            <CardTitle></CardTitle>
            <CardText></CardText>
          </MiniCard>
          <MiniCard>
            <CardTitle></CardTitle>
            <CardText></CardText>
          </MiniCard>
        </Details>
      </Wrapper>
    </>
  );
};
