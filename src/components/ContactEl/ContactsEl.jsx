import React from "react";
import {ButtonOnDelete, ContactRow, ContactsList} from "./ContactsEl.styled";
import PropTypes from "prop-types";


export const ContactsEl = ({data, onDelete}) => {

  return (
    <ContactsList>
      {data.map(contact => (
          <ContactRow key={contact.id}>
            {contact.name}: {contact.number}
            <ButtonOnDelete onClick={() => onDelete(contact.id)}>delete</ButtonOnDelete>
          </ContactRow>
        )
      )}
    </ContactsList>
  );
};

ContactsEl.propTypes = {
  data: PropTypes.array,
  onDelete: PropTypes.func.isRequired,
}
