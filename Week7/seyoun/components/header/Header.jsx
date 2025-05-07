import * as S from './Header.style';
import Check from '../../../assets/check.svg'; 

export default function Header() {
    return (
        <S.HeaderLayout>
            <S.CheckIcon src={Check}/>
            <S.Title>useState 실습-투두리스트 & 댓글 기능 구현해보기</S.Title>
        </S.HeaderLayout>
    );
}