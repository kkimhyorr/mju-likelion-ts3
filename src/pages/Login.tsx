import { Formik, Field, Form, FormikHelpers } from "formik";

interface LoginForm {
  email: string;
  password: string;
}

const Login = () => {
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
          setTimeout(() => {
            alert(JSON.stringify(values, null, 2));
            setSubmitting(false);
          }, 500);
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
