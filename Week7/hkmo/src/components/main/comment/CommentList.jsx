import React, { useEffect } from "react";
import { useState } from "react";
import CommentEditor from "./CommentEditor";
import * as S from "../Main.style";
import CommentItem from "./CommentItem";

export default function CommentList() {
  const [CommentList, setCommentList] = useState([]);
  const [inputText, setInputText] = useState("");

  const addComment = () => {
    if (inputText.trim() === "") return;
    const newComment = {
      id: Date.now(),
      text: inputText,
    };
    setCommentList([...CommentList, newComment]); // CommentList 배열에 할일텍스트를 넣는다
    setInputText(""); // 입력창 초기화
  };

  return (
    <S.CommentSection>
      <S.SectionTitle>✍ 댓글 작성</S.SectionTitle>
      <CommentEditor
        inputText={inputText}
        setInputText={setInputText}
        addComment={addComment}
      />
      <S.CommentlistWrapper>
        {CommentList.map((comment, index) => (
          <CommentItem
            key={comment.id}
            index={index}
            commentText={comment.text}
            commentList={CommentList}
            setCommentList={setCommentList}
          />
        ))}
      </S.CommentlistWrapper>
    </S.CommentSection>
  );
}
