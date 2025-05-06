import { useState } from "react";
import * as S from "../Main.style";

export default function CommentItem({
  index,
  commentText,
  commentList,
  setCommentList,
}) {
  const [isEditing, setIsEditing] = useState(false);
  const [text, setText] = useState(commentText);

  const deleteComment = () => {
    const updated = [...commentList];
    updated.splice(index, 1); // 인덱스에 해당하는 댓글 삭제
    setCommentList(updated);
  };

  const updateComment = () => {
    if (text.trim() === "") return; // 빈 문자열이면 업데이트하지 않음
    setCommentList(
      commentList.map((comment) => (comment === commentText ? text : comment))
    );
    setIsEditing(false); // 수정 완료 후 편집 모드 종료
  };

  return (
    <S.CommentItemLayout>
        {isEditing ? (
          <S.EditInput
            type="text"
            value={text}
            onChange={(e) => setText(e.target.value)}
          />
        ) : (
          <S.CommentText>{text}</S.CommentText>
        )}
      <S.DeleteAndEdit>
        <S.DeleteButton onClick={deleteComment}>삭제</S.DeleteButton>
        <S.EditButton
          onClick={() => (!isEditing ? setIsEditing(true) : updateComment())}
          style={{ fontSize: isEditing ? "12px" : "14px" }}
        >
          {isEditing ? "수정 완료" : "수정"}
        </S.EditButton>
      </S.DeleteAndEdit>
    </S.CommentItemLayout>
  );
}
