import React from "react";
import {Contact, Title} from "./ContactsList.styled";
import {ContactsEl} from "../ContactEl/ContactsEl";
import PropTypes from "prop-types";

export const ContactsList = ({data, filter, onDelete}) => {

  function filteredData() {
    if (filter.length > 0) {
      return data.filter(el => el.name
        .toLowerCase()
        .includes(filter.toLowerCase()
          .trim()));
    }
    return data;
  }

  if (filteredData().length > 0) {
    return (
      <Contact>
        <Title>Contacts</Title>
        <ContactsEl data={filteredData()} onDelete={onDelete}></ContactsEl>
      </Contact>
    );
  }
  return (
    <Contact>
      <Title>There are no contacts, matching you query (</Title>
    </Contact>
  );
};

ContactsList.propTypes = {
  data: PropTypes.array,
  filter: PropTypes.string,
  onDelete: PropTypes.func.isRequired,
}

