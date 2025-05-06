// components > main > Todolist > TodoItem.jsx
import { useState } from "react";
import * as S from "../Main.style";

export default function CommentItem({
  commentText,
  commentList,
  setCommentList,
}) {
  const [isEditing, setIsEditing] = useState(false);

  const deleteComment = () => {
    setCommentList(commentList.filter((comment) => comment !== commentText));
  };

  return (
    <S.CommentItemLayout>
      <S.CommentText>
        <S.CommentText>{commentText}</S.CommentText>
      </S.CommentText>
      <S.DeleteAndEdit>
        <S.DeleteButton onClick={deleteComment}>삭제</S.DeleteButton>
        <S.EditButton onClick={() => setIsEditing(!isEditing)}>
          {isEditing ? "완료" : "수정"}
        </S.EditButton>
      </S.DeleteAndEdit>
    </S.CommentItemLayout>
  );
}
