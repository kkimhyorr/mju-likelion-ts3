import { Formik, Field, Form } from "formik";
import { useNavigate } from "react-router-dom";
import useSWRMutation from "swr/mutation";
import { PostFetcher } from "../API/PostFetcher";
import { Input } from "../components/Input";
import Button from "../components/Button";
import { styled } from "styled-components";

interface UserForm {
  email: string;
  password: string;
  username: string;
}

const Register = () => {
  const navigate = useNavigate();
  const { trigger } = useSWRMutation("/api/auth/register", PostFetcher, {
    onSuccess: async (data) => {
      const res: any = await data.json();

      if (data.status === 200) {
        alert(res.data.message);
        navigate("/api/auth/login");
      } else {
        alert(res.error.message);
      }
    },
  });

  return (
    <>
      <Formik
        initialValues={{
          username: "",
          email: "",
          password: "",
        }}
        onSubmit={(values: UserForm) => {
          trigger(values);
          console.log(values);
        }}
      >
        {(props) => (
          <Form onSubmit={props.handleSubmit}>
            <Container>
              <TitleText>회원가입</TitleText>
              <InputContainer>
                <Input
                  value={props.values.username}
                  onChange={props.handleChange}
                  name="username"
                  type="text"
                >
                  이름
                </Input>
                <Input
                  value={props.values.email}
                  onChange={props.handleChange}
                  name="email"
                  type="text"
                >
                  이메일
                </Input>
                <Input
                  value={props.values.password}
                  onChange={props.handleChange}
                  name="password"
                  type="password"
                >
                  비밀번호
                </Input>
              </InputContainer>
              <Button type="submit">가입하기</Button>
            </Container>
          </Form>
        )}
      </Formik>
    </>
  );
};

export default Register;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 70px;
  align-items: center;
  margin-top: 100px;
`;
const TitleText = styled.p`
  color: ${({ theme }) => theme.color.gray1};
  font-family: Pretendard;
  font-size: 20px;
  font-weight: 700;
  line-height: 26px;
`;

const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 26px;
`;
