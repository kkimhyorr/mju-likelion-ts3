import { Formik, Form } from "formik";
import { useNavigate } from "react-router-dom";
import useSWRMutation from "swr/mutation";
import { PostFetcher } from "../API/PostFetcher";
import { Input } from "../components/Input";
import Button from "../components/Button";
import { styled } from "styled-components";
import * as Yup from "yup";

interface UserForm {
  email: string;
  password: string;
  username: string;
}

const RegisterSchema = () => {
  return Yup.object().shape({
    username: Yup.string().required("이름을 입력해주세요"),
    email: Yup.string()
      .email("이메일 형식이 올바르지 않습니다")
      .max(255)
      .required("이메일을 입력해주세요"),
    password: Yup.string().max(255).required("비밀번호를 입력해주세요"),
  });
};

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
        validationSchema={RegisterSchema()}
        validateOnChange={true}
        validateOnBlur={true}
        validateOnMount={true}
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
                  onBlur={() => props.handleBlur("email")}
                  name="email"
                  type="text"
                >
                  이메일
                </Input>
                <Input
                  value={props.values.password}
                  onChange={props.handleChange}
                  onBlur={() => props.handleBlur("password")}
                  name="password"
                  type="password"
                >
                  비밀번호
                </Input>
              </InputContainer>
              <Button>가입하기</Button>
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
