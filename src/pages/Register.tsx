import { Formik, Field, Form } from "formik";
import { useNavigate } from "react-router-dom";
import useSWRMutation from "swr/mutation";
import { PostFetcher } from "../API/PostFetcher";

const Register = () => {
  const navigate = useNavigate();
  const { trigger } = useSWRMutation("/api/auth/register", PostFetcher, {
    onSuccess: async (data) => {
      const res: any = await data.json();

      if (data.status === 200) {
        navigate("/api/auth/login");
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
          username: "",
        }}
        onSubmit={(values: any) => {
          trigger(values);
        }}
      >
        <Form>
          <Field id="email" name="email" placeholder="email"></Field>
          <Field id="password" name="password" placeholder="password"></Field>
          <Field id="username" name="username" placeholder="username"></Field>
          <button type="submit">Register</button>
        </Form>
      </Formik>
    </>
  );
};

export default Register;
