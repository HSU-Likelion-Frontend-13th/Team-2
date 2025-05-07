import React, {useState} from "react";
import * as S from "../Main.style";

export default function CommentItem({commentText, commentlist, setCommentlist}) {
    const [isEditing, setIsEditing] = useState(false);
    const [editedText, setEditedText] = useState(commentText);

    // 삭제 함수
    const deleteComment = () => {
        setCommentlist(commentlist.filter((comment) => comment !== commentText));
    };

    // 수정 완료 함수
    const editComment = () => {
        if (editedText.trim() === "") 
            return;
        const edited = commentlist.map(
            (comment) => comment === commentText
                ? editedText
                : comment
        );
        setCommentlist(edited);
        setIsEditing(false);
    };

    return (
        <S.CommentItemLayout>
            {
                isEditing
                    ? (
                        <S.EditInput
                            type="text"
                            value={editedText}
                            onChange={(e) => setEditedText(e.target.value)}/>
                    )
                    : (<S.CommentText>{commentText}</S.CommentText>)
            }

            <S.DeleteButton onClick={deleteComment}>삭제</S.DeleteButton>

            {
                isEditing
                    ? (<S.EditButton onClick={editComment}>수정완료</S.EditButton>)
                    : (<S.EditButton onClick={() => setIsEditing(true)}>수정</S.EditButton>)
            }
        </S.CommentItemLayout>
    );
}
