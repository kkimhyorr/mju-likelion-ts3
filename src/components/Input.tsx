import { styled } from "styled-components";
import { ErrorMessage } from "formik";

export const Input = ({ children, ...rest }: any) => {
  return (
    <Container>
      <TitleText>{children}</TitleText>
      <InputBox {...rest} />
      <ErrorMessage name={rest.name} component={HelperText} />
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 6px;
`;

const TitleText = styled.p`
  color: ${({ theme }) => theme.color.gray1};
  font-family: Pretendard;
  font-size: 16px;
  font-weight: 400;
  line-height: 20px;
`;

const InputBox = styled.input`
  width: 320px;
  padding: 14px 16px;
  border: 1px solid ${({ theme }) => theme.color.gray3};
  border-radius: 12px;
  color: ${({ theme }) => theme.color.gray1};
  font-family: Pretendard;
  font-size: 16px;
  font-weight: 400;
  line-height: 20px;

  &:focus {
    outline: none;
    border: 1px solid ${({ theme }) => theme.color.gray1};
  }
`;

const HelperText = styled.div`
  color: ${({ theme }) => theme.color.red};
  font-family: Pretendard;
  font-size: 16px;
  font-weight: 400;
  line-height: 20px;
`;
