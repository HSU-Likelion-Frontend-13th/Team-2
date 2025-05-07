import styled from "styled-components";

export const SectionTitle = styled.div`
  font-size: larger;
  font-weight: 700;
`;

/* TodoComment */
export const CommentListLayout = styled.div`
  width: 60vw;
`;

export const AddCommentWrapper = styled.div`
  display: flex;
  gap: 0.5rem;
  justify-content: center;
  align-items: center;
`;

export const CommentListWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin: 1rem 0;
`;

export const CommentSection = styled.div`
  width: 60vw;
`;

export const InputLayout = styled.div`
  width: 100%;
  height: 3rem;
  border: 1px solid gray;
  margin: 0.5rem 0;
`;

export const InputContainer = styled.input`
  width: 100%;
  height: 100%;
`;

export const ButtonLayout = styled.button`
  min-width: 7rem;
  height: 3rem;
  text-align: center;
  background-color: #5664f5;
`;
export const ButtonContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
`;

export const ItemLayout = styled.div`
  width: 70%;
  height: 2.8rem;
  border: 1px solid gray;
  display: flex;
  justify-content: space-between;
  padding: 0.6rem;
`;

export const CheckboxAndTodoText = styled.div`
  display: flex;
  gap: 0.5rem;
  align-items: center;
`;

export const CheckboxImgContainer = styled.button``;

export const TodoText = styled.div``;

export const DeleteButton = styled.button`
  min-width: 4rem;
  height: 2rem;
  border: 1px solid #aaa;
  border-radius: 0.3rem;
  background-color: #ffffff;
  cursor: pointer;
  margin-left: 0.5rem;
`;

export const EditButton = styled.button`
  min-width: 4rem;
  height: 2rem;
  border: 1px solid #aaa;
  border-radius: 0.3rem;
  background-color: #ffffff;
  cursor: pointer;
`;

export const CommentlistWrapper = styled.div`
  width: 100%;
  margin: 1rem 0;
  display: flex;
  flex-direction: column;
  gap: 0.6rem;
`;

export const CommentItemLayout = styled.div`
  width: 85%;
  min-height: 4rem;
  border: 1px solid gray;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.6rem 1rem;
`;

export const CommentText = styled.div``;

export const DateText = styled.div``;

export const DeleteAndEdit = styled.div`
  display: flex;
  gap: 0.5rem;
  align-items: center;
  flex-direction: row-reverse;
`;

export const SaveButton = styled.button`
  width: 3.5rem;
  height: 2rem;
  border: 1px solid grey;
  background-color: #4caf50;
  color: white;
  cursor: pointer;
`;

export const ReplyInputWrapper = styled.div`
  padding-left: 2rem;
  margin-top: 0.5rem;
  display: flex;
  gap: 0.5rem;
  background-color: #f7f7f7;
  border-left: 3px solid #ccc;
  padding: 0.5rem 1rem;
  border-radius: 0.25rem;
`;

export const ReplyListWrapper = styled.div`
  padding-left: 2rem;
  margin-top: 0.5rem;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  background-color: #f9f9f9;
  border-left: 3px solid #ccc;
  border-radius: 0.25rem;
`;
