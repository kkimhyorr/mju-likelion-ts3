import { styled } from "styled-components";

const Button = ({ children }: any) => {
  return (
    <>
      <SubmitButton>{children}</SubmitButton>
    </>
  );
};

export default Button;

const SubmitButton = styled.button`
  display: flex;
  justify-content: center;
  width: 320px;
  padding: 14px 16px;
  border-radius: 12px;
  background: linear-gradient(93deg, #cf0 -3.88%, #40ffaf 103.41%);
  color: #fff;
  font-family: Pretendard;
  font-size: 20px;
  font-weight: 700;
  line-height: 26px;

  &:hover {
    background: linear-gradient(93deg, #beed04 -3.88%, #2ff19f 103.41%);
  }

  &:active {
    background: linear-gradient(93deg, #b1de00 -3.88%, #1de08e 103.41%);
  }
`;
