import * as S from './Header.style'; // Header 스타일 컴포넌트
import Check from '../../assets/check.png'; // 체크 아이콘 이미지

export default function Header() {
    return (
        <S.HeaderLayout>
            <S.CheckIcon src={Check}/>
            <S.Title>Comment</S.Title>
        </S.HeaderLayout>
    );
}