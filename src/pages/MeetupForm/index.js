import React, { useState, useEffect } from 'react';
import { MdAddCircleOutline } from 'react-icons/md';
import PropTypes from 'prop-types';
import { toast } from 'react-toastify';
import { parse } from 'date-fns';
import { Form, Input } from '@rocketseat/unform';
import * as Yup from 'yup';

import api from '~/services/api';
import history from '~/services/history';

import BannerInput from './BannerInput';
import DatePicker from './DatePicker';

import { Container } from './styles';

const schema = Yup.object().shape({
  banner_id: Yup.number().required('Informe o banner do meetup'),
  title: Yup.string().required('Como se chama o meetup?'),
  description: Yup.string().required('Uma descrição seria bem-vinda'),
  date: Yup.date().required('Quando?'),
  location: Yup.string().required('Onde será o meetup?'),
});

export default function MeetupForm({ match }) {
  const { id } = match.params;

  const [loading, setLoading] = useState(false);
  const [meetup, setMeetup] = useState({});

  useEffect(() => {
    async function loadMeetup() {
      try {
        setLoading(true);

        const response = await api.get(`/organizing/${id}`);
        const { data } = response;

        setMeetup({
          ...data,
          date: parse(data.date),
          // past: isBefore(parse(data.date), new Date()),
        });
      } catch (err) {
        console.tron.log(err);
        toast.error('Erro ao carregar meetup. Tente mais tarde.');
      } finally {
        setLoading(false);
      }
    }
    console.tron.log('e3');
    if (id) {
      loadMeetup();
    }
    // eslint-disable-next-line
  }, [id]);

  async function handleSubmit(data) {
    try {
      setLoading(true);

      console.tron.error(data);
      if (id) {
        await api.put(`/meetups/${id}`, data);
        toast.success('Meetup criado com successo');
      } else {
        await api.post('/meetups', data);
        toast.success('Meetup criado com successo');
      }
      history.goBack();
    } catch (err) {
      const { data: errData } = err.response;

      toast.error(
        errData && errData.error
          ? errData.error
          : 'Erro ao atualizar/cadastrar um meetup'
      );
    } finally {
      setLoading(false);
    }
  }

  return (
    <Container>
      {loading ? (
        <h1>123</h1>
      ) : (
        <Form
          schema={schema}
          initialData={meetup}
          onSubmit={handleSubmit}
          autoComplete="off"
        >
          <BannerInput name="banner_id" />

          <Input name="title" placeholder="Título do Meetup" />
          <Input
            multiline
            name="description"
            placeholder="Descrição completa"
          />
          <DatePicker name="date" placeholder="Data do meetup" />
          <Input name="location" placeholder="Localização" />

          <button type="submit">
            <MdAddCircleOutline />
            Salvar meetup
          </button>
        </Form>
      )}
    </Container>
  );
}

MeetupForm.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string,
    }).isRequired,
  }).isRequired,
};
