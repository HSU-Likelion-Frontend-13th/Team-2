import styled from "styled-components";

export const SectionTitle = styled.div`
  font-size: larger;
  font-weight: 700;
`;

export const AddCommentWrapper = styled.div`
  display: flex;
  gap: 0.5rem;
  justify-content: center;
  align-items: center;
`;

export const CommentSection = styled.div`
  width: 60vw;
`;

export const InputLayout = styled.div`
  width: 100%;
  height: 3rem;
  border: 1px solid gray;
  margin: 0.5rem 0;
  background-color: white;
  padding-left: 0.5rem;
`;

export const InputContainer = styled.input`
  width: 100%;
  height: 100%;
`;

export const ButtonLayout = styled.button`
  width: 100px;
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

export const DeleteButton = styled.button`
  width: 50px;
  height: 30px;
  border: 1px solid grey;
`;

export const CommentlistWrapper = styled.div`
  width: 100%;
  margin: 1rem 0;
  display: flex;
  flex-direction: column;
  gap: 0.6rem;
  height: 50vh;
  overflow: auto;
`;

export const CommentItemLayout = styled.div`
  width: 45vw;
  height: 50px;
  border: 1px solid gray;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.6rem;
  position: relative;
`;

export const CommentText = styled.div`
  display: flex;
  gap: 0.5rem;
  align-items: center;
`;

export const EditButton = styled.button`
  width: 50px;
  height: 30px;
  border: 1px solid grey;
`;

export const DeleteAndEdit = styled.div`
  display: flex;
  gap: 0.3rem;
`;

export const EditInput = styled.input`
  width: 100%;
  height: 100%;
`;

export const CommentWrapper = styled.div`
  width: 45vw;
`;

export const Reply = styled.div`
  display: flex;
  flex-direction: column;
`;

export const ReplyWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 0.3rem;
  padding: 0.6rem;
  border: 1px solid gray;
  background-color: rgba(0, 0, 0, 0.1);
`;

export const ReplyListWrapper = styled.div`
  background-color: rgba(0, 0, 0, 0.1);
`;

export const ReplyItem = styled.div`
  width: 100%;
  height: 30px;
  display: flex;
  align-items: center;
  border: 1px solid gray;
  font-size: 14px;
  padding-left: 0.5rem;
`;

export const ReplyButton = styled.button`
  width: 100px;
  height: 3rem;
  color: white;
  text-align: center;
  background-color: #5664f5;
`;
