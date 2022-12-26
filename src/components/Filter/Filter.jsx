import React from "react";
import {Field, FilterStyled} from "./Filter.styled";
import PropTypes from "prop-types";


export const Filter = ({onSearch}) => {

  return (
    <FilterStyled>
      <Field> Find contacts by name
        <input
          type="text"
          name="filter"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          onChange={onSearch}
        />
      </Field>
    </FilterStyled>
  )
}

Filter.propTypes = {
  onSearch: PropTypes.func.isRequired,
}
