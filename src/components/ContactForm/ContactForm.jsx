import { ErrorMessage, Field, Form, Formik } from "formik";
import { nanoid } from "nanoid";
import * as Yup from "yup";
import css from "../../components/ContactForm/ContactForm.module.css";

export default function ContactForm({ onFormSubmit }) {
  const initialValues = {
    name: "",
    number: "",
    id: "",
  };

  const handelSubmit = ({ name, number, id }, actions) => {
    onFormSubmit({ name, number, id: nanoid() });
    actions.resetForm();
  };

  const validationSchema = Yup.object().shape({
    name: Yup.string().min(3).max(50).required(),
    number: Yup.string().min(3).max(50).required(),
  });

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={handelSubmit}
      validationSchema={validationSchema}
    >
      <Form className={css.form}>
        <label htmlFor="name">Name</label>
        <Field className={css.input} type="text" name="name" id="name" />
        <ErrorMessage name="name" component="p" className={css.error} />
        <label htmlFor="number">Number</label>
        <Field className={css.input} type="text" name="number" id="number" />
        <ErrorMessage name="number" component="p" className={css.error} />
        <button type="submit">Submit</button>
      </Form>
    </Formik>
  );
}
