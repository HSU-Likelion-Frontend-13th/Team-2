import styled from "styled-components";
import ProfileImg from "../assets/profile_image.png";
import CallIcon from "../assets/call.jpg";
import EmailIcon from "../assets/email.jpg";
import LocationIcon from "../assets/location.jpg";

export default function About() {
    return (
        <> 
        <ABOUT> ABOUT</ABOUT> 
        < IntroAbout > 
        <Profile>
            <ProfileImage src={ProfileImg}/>
            <Name>윤세연</Name>

            <ProfileItem>
                <img src={CallIcon}/>
                <div>010.3424.6401</div>
            </ProfileItem>

            <ProfileItem>
                <img src={EmailIcon}/>
                <div>2271394@hansung.ac.kr</div>
            </ProfileItem>

            <ProfileItem>
                <img src={LocationIcon}/>
                <div>서울특별시 성북구 삼선동 2가</div>
            </ProfileItem>
        </Profile>

        <Detail>
            <div>
                <Title>ECUCATION</Title>
                <Content>
                    <div>한성대 컴퓨터공학부</div>
                    <div>2022.03~2027.02</div>
                </Content>
            </div>

            <div>
                <Title>SKILLS</Title>
                <Content>학습중..</Content>
            </div>

            <div>
                <Title>WORK</Title>
                <Content>프론트엔드 개발자</Content>
            </div>

            <div>
                <Title>ACTIVITIES</Title>
                <Content>멋쟁이사자처럼 13기</Content>
            </div>
        </Detail>
    </IntroAbout>
</>
    );
}

const ABOUT = styled.div `
    color: #4A86FF;
    font-weight: 900;
    font-size: 4vw;
    margin-top: 2.4vw;
    margin-bottom: 3vw;
    text-align: center;
`;

const IntroAbout = styled.div `
    display: flex;
    justify-content: flex-start;
    align-items: flex-start;
    gap: 3vw;
`;

const Profile = styled.div `
    border: 0.1vw solid #EBEDF8;
    border-radius: 2vw;
    width: 22vw;
    margin-left: 19vw;
    padding: 1vw;
`;

const ProfileImage = styled.img `
    margin-top: 1vw;
    margin-left: 5.2vw;
    margin-bottom: 1vw;
    width: 9vw;
    height: 9vw;
    border-radius: 50%;
    object-fit: cover;
`;

const Name = styled.div `
    font-size: 2vw;
    margin-bottom: 1vw;
    text-align: center;
    color: #4A86FF;
`;

const ProfileItem = styled.div `
    display: flex;
    align-items: center;
    gap: 1vw;
    margin-bottom: 1vw;
    margin-left: 1.3vw;
    font-size: 1.3vw;

    img {
        width: 2vw;
        height: 2vw;
        object-fit: cover;
    }
`;

const Detail = styled.div `
    margin-top: 4vw;
    display: grid;
    grid-template-columns: 1fr 1fr;
    row-gap: 10vw;
    column-gap: 8vw;
    margin-bottom: 9vw;
`;

const Title = styled.div `
    font-size: 2vw;
    margin-bottom: 1.3vw;
`;

const Content = styled.div `
    font-size: 1.2vw;
`;
