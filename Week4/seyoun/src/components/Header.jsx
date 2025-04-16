import styled from "styled-components";

export default function Header(){
    return (
        <HeaderLayout>
            <Logo>PORTFOLIO.</Logo>
            <Category>
                <div><strong>ABOUT</strong></div>
                <div><strong>HOBBY</strong></div>
                <div style={{ marginRight: "15vw"}}><strong>CONTACT</strong></div>
            </Category>
        </HeaderLayout>
    )
}

const HeaderLayout = styled.header`
    display: flex;
    justify-content: space-between;
`;

const Logo = styled.div`
color: #4A86FF;
    margin-top: 1vw;
    font-size: 2vw;
    margin-left: 6vw;
`;

const Category = styled.div`
    display: flex;
    gap: 4vw;
    font-size: 1vw;
    margin-top: 1.8vw;
`