import React, { useEffect } from "react";
import * as S from "../Main.style";
import CommentEditor from "./CommentEditor";
import CommentItem from "./CommentItem";

export default function CommentList() {
  const [commentText, setCommentText] = React.useState("");
  const [commentlist, setCommentlist] = React.useState([]);

  const addComment = () => {
    if (commentText.trim() === "") {
      alert("댓글을 입력해주세요.");
      return;
    }
    setCommentlist([...commentlist, { text: commentText, replies: [] }]);
    setCommentText("");
  };

  useEffect(() => {
    console.log(commentlist);
  }, [commentlist]);

  return (
    <S.CommentListLayout>
      <S.SectionTitle>댓글 목록</S.SectionTitle>
      <CommentEditor
        inputText={commentText}
        setInputText={setCommentText}
        addComment={addComment}
      />
      <S.CommentListWrapper>
        {commentlist.map((comment, index) => (
          <CommentItem
            key={index}
            index={index}
            comment={comment}
            commentlist={commentlist}
            setCommentlist={setCommentlist}
          />
        ))}
      </S.CommentListWrapper>
    </S.CommentListLayout>
  );
}
