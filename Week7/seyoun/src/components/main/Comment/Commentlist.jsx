import React from "react";
import {useState, useEffect} from "react";
import CommentEditor from "./CommentEditor";
import CommentItem from "./CommentlistItem";
import * as S from "../Main.style";
//할일 저장, 입력 텍스트 저장
export default function Commentlist() {

    const [commentlist, setCommentlist] = useState([]);
    const [inputText, setInputText] = useState("");

    const addComment = () => {
        if (inputText.trim() === "") 
            return;
        setCommentlist([
            ...commentlist,
            inputText
        ]); // commentlist 배열에 할일 텍스트를 넣는다.
        setInputText(""); // 입력창 초기화
    };

    useEffect(() => {
        console.log("할일 : " + commentlist);
    }, [commentlist]);

    return (
        <S.CommentListLayout>
            <S.SectionTitle>✍️ 댓글 작성</S.SectionTitle>
            <CommentEditor
                inputText={inputText}
                setInputText={setInputText}
                addComment={addComment}/>
            <S.CommentListWrapper>
                {
                    commentlist.map((comment, index) => (
                        <CommentItem
                            key={index}
                            commentText={comment}
                            commentlist={commentlist}
                            setCommentlist={setCommentlist}/>
                    ))
                }

            </S.CommentListWrapper>
        </S.CommentListLayout>
    );
}
