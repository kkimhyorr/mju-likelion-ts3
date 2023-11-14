import { Formik, Field, Form, FormikHelpers } from "formik";
import { useNavigate } from "react-router-dom";

interface LoginForm {
  email: string;
  password: string;
}

const fetchData = async (url: string, data: LoginForm) => {
  const response = await fetch(
    `https://simple-login-server-one.vercel.app${url}`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    }
  );
  const result = await response.json();
  return result;
};

const Login = () => {
  const navigate = useNavigate();
  const handleGoUserList = () => {
    navigate("/api/users");
  };

  return (
    <>
      <Formik
        initialValues={{
          email: "",
          password: "",
        }}
        onSubmit={(
          values: LoginForm,
          { setSubmitting }: FormikHelpers<LoginForm>
        ) => {
          fetchData("/api/auth/register", values)
            .then((result) => {
              // 처리된 결과에 따른 작업 수행
              console.log(result);
            })
            .catch((error) => {
              // 에러 처리
              console.error(error);
            })
            .finally(() => {
              setSubmitting(false);
            });
        }}
      >
        <Form>
          <Field id="email" name="email" placeholder="email"></Field>
          <Field id="password" name="password" placeholder="password"></Field>
          <button type="submit" onClick={handleGoUserList}>
            login
          </button>
        </Form>
      </Formik>
    </>
  );
};

export default Login;
