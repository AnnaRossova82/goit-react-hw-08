import { Formik, Form, Field, ErrorMessage } from 'formik';
import { useDispatch } from 'react-redux';
import { login } from '../../redux/auth/operations'
import css from "./LoginForm.module.css";


const LoginForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = (values, { setSubmitting }) => {
    dispatch(login(values));
    setSubmitting(false);
  };

  return (
    <Formik
      initialValues={{ email: '', password: '' }}
      onSubmit={handleSubmit}
    >
      {({ isSubmitting }) => (
        <Form className={css.form}>
          <div>
            <label className={css.label} htmlFor="email">Email</label>
            <Field type="email" name="email" />
            <ErrorMessage name="email" component="div" />
          </div>
          <div>
            <label className={css.label} htmlFor="password">Password</label>
            <Field type="password" name="password" />
            <ErrorMessage name="password" component="div" />
          </div>
          <button type="submit" disabled={isSubmitting}>
            Login
          </button>
        </Form>
      )}
    </Formik>
  );
};

export default LoginForm;