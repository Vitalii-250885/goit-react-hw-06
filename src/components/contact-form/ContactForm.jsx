import { useId } from "react";
import { useDispatch } from "react-redux";

import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

import css from "./ContactForm.module.css";
import { addContact } from "../../redux/contactsSlice";

const FormSchema = Yup.object().shape({
  name: Yup.string()
    .min(3, "Too Short!")
    .max(50, "Too Long!")
    .required("Required"),
  number: Yup.string()
    .min(3, "Too Short!")
    .max(50, "Too Long!")
    .required("Required"),
});

const initialValues = {
  name: "",
  number: "",
};

const ContactForm = () => {
  const dispatch = useDispatch();

  const nameFieldId = useId();
  const numberFieldId = useId();

  const handleAddContact = (values, actions) => {
    dispatch(addContact(values));

    actions.resetForm();
  };

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={handleAddContact}
      validationSchema={FormSchema}>
      <Form className={css.form}>
        <div>
          <label htmlFor={nameFieldId}>Name</label>
          <Field
            type="text"
            name="name"
            id={nameFieldId}
            className={css.input}
          />
          <ErrorMessage name="name">
            {(msg) => <span className={css["error-message"]}>{msg}</span>}
          </ErrorMessage>
        </div>
        <div>
          <label htmlFor={numberFieldId}>Number</label>
          <Field
            type="text"
            name="number"
            id={numberFieldId}
            className={css.input}
          />
          <ErrorMessage name="number">
            {(msg) => <span className={css["error-message"]}>{msg}</span>}
          </ErrorMessage>
        </div>

        <button type="submit" className={css.button}>
          Add contact
        </button>
      </Form>
    </Formik>
  );
};

export default ContactForm;
