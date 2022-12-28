import React from "react";
import {Formik, Form, Field} from 'formik';
import {Button, InputField} from "./ContactForm.styled";
import PropTypes from "prop-types";

const formicInitialValues = {
  name: '',
  number: '',
};

export const ContactForm = ({onSubmit}) => {

  const onFormicSubmit = (values, {resetForm}) => {
    onSubmit(values);
    resetForm();
  }

  return (
    <Formik
      initialValues={formicInitialValues}
      onSubmit={onFormicSubmit}
    >
      <Form>
        <InputField>Name
          <Field type="text"
                 name="name"
                 pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                 title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                 required
          />
        </InputField>
        <InputField>Number
          <Field type="tel"
                 name="number"
                 pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                 title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
                 required
          />
        </InputField>
        <Button type="text">Add contact</Button>
      </Form>
    </Formik>
  );

};

ContactForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
}
