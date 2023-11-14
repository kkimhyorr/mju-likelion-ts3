import { Formik, Field, Form, FormikHelpers } from "formik";
import { useNavigate } from "react-router-dom";

interface RegisterForm {
  email: string;
  password: string;
  username: string;
}

const fetchData = async (url: string, data: RegisterForm) => {
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

const Register = () => {
  const navigate = useNavigate();
  const handleGoLogin = () => {
    navigate("/api/auth/login");
  };
  return (
    <>
      <Formik
        initialValues={{
          email: "",
          password: "",
          username: "",
        }}
        onSubmit={(
          values: RegisterForm,
          { setSubmitting }: FormikHelpers<RegisterForm>
        ) => {
          fetchData("/api/auth/register", values)
            .then((result) => {
              // 처리된 결과에 따른 작업 수행
              console.log(result);
              alert(result);
            })
            .catch((error) => {
              // 에러 처리
              console.error(error);
              alert(error);
            })
            .finally(() => {
              setSubmitting(false);
            });
        }}
      >
        <Form>
          <Field id="email" name="email" placeholder="email"></Field>
          <Field id="password" name="password" placeholder="password"></Field>
          <Field id="username" name="username" placeholder="username"></Field>
          <button type="submit" onClick={handleGoLogin}>
            Register
          </button>
        </Form>
      </Formik>
    </>
  );
};

export default Register;
