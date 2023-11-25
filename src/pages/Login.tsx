import { Formik, Form } from "formik";
import { useNavigate } from "react-router-dom";
import useSWRMutation from "swr/mutation";
import { PostFetcher } from "../API/PostFetcher";
import { Input } from "../components/Input";
import Button from "../components/Button";
import { styled } from "styled-components";
import * as Yup from "yup";

const LoginSchema = () => {
  return Yup.object().shape({
    email: Yup.string()
      .email("이메일 형식이 올바르지 않습니다")
      .required("이메일을 입력해주세요"),
    password: Yup.string().required("비밀번호를 입력해주세요"),
  });
};

const Login = () => {
  const navigate = useNavigate();
  const { trigger } = useSWRMutation("/api/auth/login", PostFetcher, {
    onSuccess: async (data) => {
      const res: any = await data.json();
      if (data.status === 200) {
        alert(res.data.message);
        navigate("/");
      } else {
        alert(res.error.message);
      }
    },
  });

  return (
    <>
      <Formik
        initialValues={{
          email: "",
          password: "",
        }}
        onSubmit={(values: any) => {
          trigger(values);
        }}
        validationSchema={LoginSchema()}
        validateOnChange={true}
        validateOnBlur={true}
        validateOnMount={true}
      >
        {(props) => (
          <Form>
            <Container>
              <TitleText>로그인</TitleText>
              <InputContainer>
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
              <Button>로그인</Button>
            </Container>
          </Form>
        )}
      </Formik>
    </>
  );
};

export default Login;

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
