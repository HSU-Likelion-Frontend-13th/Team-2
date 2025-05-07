import React from "react";
import * as S from "../Main.style";
import { useState } from "react";

export default function CommentItem({commentText, commentlist, setCommentlist}) {
    const [isChecked, setIschecked] = useState(false);

    //삭제 함수
    const deleteComment = () => {
        setCommentlist(commentlist.filter((comment) => comment !== commentText));
    };
    
    return (
        <S.CommentItemLayout>
                <S.CommentText>{commentText}</S.CommentText>
            <S.DeleteButton onClick={deleteComment}>삭제</S.DeleteButton>
        </S.CommentItemLayout>
    );
}
