import React, { useState, useEffect } from 'react';
import { Form, Input } from '@rocketseat/unform';
import PropTypes from 'prop-types';
import { parseISO } from 'date-fns';
import { toast } from 'react-toastify';
import Loader from 'react-loader-spinner';
import { MdAddCircleOutline } from 'react-icons/md';
import * as Yup from 'yup';

import api from '~/services/api';
import history from '~/services/history';

import BannerInput from './BannerInput';
import DatePicker from './DatePicker';

import { Container } from './styles';

const schema = Yup.object().shape({
  banner_id: Yup.number().required('Informe o banner do meetup'),
  title: Yup.string().required('Informe o nome do Meetup'),
  description: Yup.string().required('Informe a descrição'),
  date: Yup.date().required('Informe a data de realização'),
  location: Yup.string().required('Informe o local do meetup'),
});

export default function MeetupForm({ match }) {
  const [loading, setLoading] = useState(false);
  const [meetup, setMeetup] = useState(null);

  useEffect(() => {
    async function loadMeetup() {
      try {
        setLoading(true);

        const { data } = await api.get(`/organizing/${match.params.id}`);

        setMeetup({ ...data, date: parseISO(data.date) });
      } catch (err) {
        const error = err.response;

        toast.error(
          !!error && error.data.error
            ? `Ops! ${error.data.error}`
            : 'Ocorreu um erro, tente novamente'
        );
      } finally {
        setLoading(false);
      }
    }

    if (match.params.id) {
      loadMeetup();
    }
  }, [match.params.id]);

  async function handleSubmit(data) {
    try {
      if (meetup) {
        await api.put(`/meetups/${meetup.id}`, data);

        toast.success('Meetup atualizado com sucesso');
      } else {
        await api.post('/meetups', data);

        toast.success('Meetup cadastrado com sucesso');
      }

      history.push('/dashboard');
    } catch (err) {
      console.tron.log(err);
      const error = err.response;

      toast.error(
        !!error && error.data.error
          ? `Ops! ${error.data.error}`
          : 'Ocorreu um erro, tente novamente'
      );
    }
  }

  return (
    <Container>
      {loading ? (
        <div className="loading">
          <Loader type="ThreeDots" color="#f94d6a" width={64} height={64} />
        </div>
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
