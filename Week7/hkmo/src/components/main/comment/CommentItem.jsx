// components > main > Todolist > TodoItem.jsx
import * as S from "../Main.style";

export default function CommentItem({ commentText, commentList, setCommentList }) {
  const deleteComment = () => {
    setCommentList(commentList.filter((comment) => comment !== commentText));
  };

  return (
    <S.CommentItemLayout>
      <S.CommentText>
        <S.CommentText>{commentText}</S.CommentText>
      </S.CommentText>
      <S.DeleteButton onClick={deleteComment}>삭제</S.DeleteButton>
    </S.CommentItemLayout>
  );
}
