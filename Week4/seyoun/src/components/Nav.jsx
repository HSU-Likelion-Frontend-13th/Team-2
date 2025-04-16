import styled from "styled-components";

export default function Nav() {
    return (
        <Introduction>
            <Word>
                <div><strong>안녕하세요!</strong></div>
                <div><strong>제 이름은 윤세연 입니다.</strong></div>
                <div><strong>빠르게 성장할 줄 아는 개발자가 되고 싶어요 :)</strong></div>
            </Word>
    </Introduction>
    )
}

const Introduction = styled.nav`
    font-weight: 900;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 1.2vw;
    margin-top: 1.5vw;
    background-color: #4A86FF;
    height: 28vw;
`;

const Word = styled.div`
    color: white;
    font-size: 2.7vw;
    font-family: "Jua", sans-serif;
    text-align : center;
`;
