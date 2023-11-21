import { Formik, Field, Form } from "formik";
import { useNavigate } from "react-router-dom";
import useSWRMutation from "swr/mutation";
import { PostFetcher } from "../API/PostFetcher";

interface LoginForm {
  email: string;
  password: string;
}

const Login = () => {
  const navigate = useNavigate();
  const { trigger } = useSWRMutation("/api/auth/login", PostFetcher, {
    onSuccess: async (data) => {
      const res: any = await data.json();
      if (data.status === 200) {
        navigate("/");
        alert(res.data.message);
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
      >
        <Form>
          <Field id="email" name="email" placeholder="email"></Field>
          <Field id="password" name="password" placeholder="password"></Field>
          <button type="submit">login</button>
        </Form>
      </Formik>
    </>
  );
};

export default Login;
