import React, { useRef, useEffect, useState } from 'react';
import { useField } from '@rocketseat/unform';
import ReactDatePicker from 'react-datepicker';
import pt from 'date-fns/locale/pt';
import PropTypes from 'prop-types';

export default function DatePicker({ name, placeholder }) {
  const ref = useRef(null);
  const { fieldName, registerField, defaultValue, error } = useField(name);
  const [selected, setSelected] = useState(defaultValue);

  useEffect(() => {
    registerField({
      name: fieldName,
      ref: ref.current,
      path: 'props.selected',
      clearValue: pickerRef => {
        pickerRef.clear();
      },
    });
  }, [ref.current, fieldName]); // eslint-disable-line

  return (
    <>
      <ReactDatePicker
        name={fieldName}
        selected={selected}
        onChange={date => setSelected(date)}
        minDate={new Date()}
        showTimeSelect
        timeIntervals={60}
        timeCaption="Hora"
        timeFormat="HH:mm"
        locale={pt}
        dateFormat="dd 'de' MMMM', às' HH'h'"
        ref={ref}
        placeholderText={placeholder}
      />
      {error && <span>{error}</span>}
    </>
  );
}

DatePicker.propTypes = {
  name: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
};
