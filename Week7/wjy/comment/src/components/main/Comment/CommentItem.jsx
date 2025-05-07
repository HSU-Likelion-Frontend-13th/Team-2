import * as S from "../Main.style";
import React, { useState } from "react";

export default function CommentItem({
  comment,
  commentlist,
  setCommentlist,
  index,
}) {
  const [isEditing, setIsEditing] = useState(false);
  const [editedText, setEditedText] = useState(comment.text);
  const [showReplyInput, setShowReplyInput] = useState(false);
  const [replyText, setReplyText] = useState("");

  const deleteComment = () => {
    const newList = [...commentlist];
    newList.splice(index, 1);
    setCommentlist(newList);
  };

  const saveComment = () => {
    const newList = [...commentlist];
    newList[index].text = editedText;
    setCommentlist(newList);
    setIsEditing(false);
  };

  const addReply = () => {
    if (!replyText.trim()) return;
    const newList = [...commentlist];
    newList[index].replies.push({ text: replyText, replies: [] });
    setCommentlist(newList);
    setReplyText("");
    setShowReplyInput(false);
  };

  return (
    <>
      <S.CommentItemLayout>
        {isEditing ? (
          <>
            <input
              value={editedText}
              onChange={(e) => setEditedText(e.target.value)}
            />
            <S.SaveButton onClick={saveComment}>저장</S.SaveButton>
          </>
        ) : (
          <>
            <S.CommentText>{comment.text}</S.CommentText>
            <S.DeleteAndEdit>
              <S.DeleteButton onClick={deleteComment}>삭제</S.DeleteButton>
              <S.EditButton onClick={() => setIsEditing(true)}>
                수정
              </S.EditButton>
              <S.EditButton onClick={() => setShowReplyInput(!showReplyInput)}>
                대댓글
              </S.EditButton>
            </S.DeleteAndEdit>
          </>
        )}
      </S.CommentItemLayout>
      {showReplyInput && (
        <S.ReplyInputWrapper>
          <input
            value={replyText}
            onChange={(e) => setReplyText(e.target.value)}
            placeholder="대댓글 입력"
          />
          <S.SaveButton onClick={addReply}>등록</S.SaveButton>
        </S.ReplyInputWrapper>
      )}
      {comment.replies && comment.replies.length > 0 && (
        <S.ReplyListWrapper>
          {comment.replies.map((reply, idx) => (
            <CommentItem
              key={idx}
              comment={reply}
              commentlist={comment.replies}
              setCommentlist={(newReplies) => {
                const newList = [...commentlist];
                newList[index].replies = newReplies;
                setCommentlist(newList);
              }}
              index={idx}
            />
          ))}
        </S.ReplyListWrapper>
      )}
    </>
  );
}
