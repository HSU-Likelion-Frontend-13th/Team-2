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
  const [isReplying, setIsReplying] = useState(false); // 답글 작성 모드 상태
  const [replyText, setReplyText] = useState(""); // 답글 텍스트 상태
  const [replyList, setReplyList] = useState([]); // 답글 리스트 상태

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

  const addReply = () => {
    if (replyText.trim() === "") return; // 빈 문자열이면 답글 작성하지 않음
    const newReply = {
      id: Date.now(),
      text: replyText,
    };
    setReplyList([...replyList, newReply]); // 답글 리스트에 새 답글 추가
    setReplyText(""); // 답글 입력창 초기화
  };

  return (
    <S.CommentWrapper>
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
          <S.DeleteButton onClick={() => setIsReplying(!isReplying)}>
            답글
          </S.DeleteButton>
        </S.DeleteAndEdit>
      </S.CommentItemLayout>
      {isReplying && (
        <S.Reply>
          <S.ReplyWrapper>
            <S.InputLayout>
            <S.InputContainer
              type="text"
              value={replyText}
              onChange={(e) => setReplyText(e.target.value)}
              placeholder="답글을 입력하세요."
            />
            </S.InputLayout>
            <S.ReplyButton onClick={addReply}>답글 작성</S.ReplyButton>
          </S.ReplyWrapper>
          <S.ReplyListWrapper>
            {replyList.map((reply, index) => {
              return <S.ReplyItem key={index}>{reply.text}</S.ReplyItem>;
            })}
          </S.ReplyListWrapper>
        </S.Reply>
      )}
    </S.CommentWrapper>
  );
}
