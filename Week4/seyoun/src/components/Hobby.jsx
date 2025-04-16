import styled from "styled-components";
import SleepImg from "../assets/sleep.jpg";
import CakeImg from "../assets/cake.jpg";
import AlcoholImg from "../assets/Alcohol.jpg";

export default function Hobby() {
    return (
        <>
        <Section>HOBBY</Section>
        <HobbyList>
        <div>
            <ListDetail>잠자기</ListDetail>
            <ImgBorder><img src={SleepImg}/></ImgBorder>
        </div>
        <div>
            <ListDetail>디저트 먹기</ListDetail>
            <ImgBorder><img src={CakeImg} /></ImgBorder>
        </div>
        <div>
            <ListDetail>막걸리 마시기</ListDetail>
            <ImgBorder><img src={AlcoholImg} /></ImgBorder>
        </div>
        </HobbyList>
    </>
    );
}

const Section = styled.div`
    color: #4A86FF;
    font-weight: 900;
    font-size: 4vw;
    margin-top: 2.4vw;
    margin-bottom: 3vw;
    text-align: center;
`;

const HobbyList = styled.div`
    display: flex;
    justify-content: center;
    gap: 1vw;
`;

const ListDetail = styled.div`
    background-color: #4A86FF;
    width: 20vw;
    height: 3.5vw;
    color: white;
    font-weight: 900;
    border-top-left-radius: 1vw;
    border-top-right-radius: 1vw;
    display: grid;
    place-items: center;
    font-size: 1.6vw;
`;

const ImgBorder = styled.div`
    width: 20vw;
    height: 17vw;
    border: 0.01vw solid #EBEDF8;
    border-bottom-left-radius: 1vw;
    border-bottom-right-radius: 1vw;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 20vw;

    img {
        border-radius: 1vw;
        width: 16vw;
        height: 13vw;
    }
`;
