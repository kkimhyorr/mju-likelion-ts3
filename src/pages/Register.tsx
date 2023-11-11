import { Formik, Field, Form, FormikHelpers } from "formik";

interface RegisterForm {
  email: string;
  password: string;
  username: string;
}

const Register = () => {
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
          setTimeout(() => {
            alert(JSON.stringify(values, null, 2));
            setSubmitting(false);
          }, 500);
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
