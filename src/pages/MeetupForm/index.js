import React, { useState, useEffect } from 'react';
import { Form, Input } from '@rocketseat/unform';
import ReactDatePicker from 'react-datepicker';
import pt from 'date-fns/locale/pt';

import { MdAddCircleOutline } from 'react-icons/md';

import 'react-datepicker/dist/react-datepicker.css';
import history from '~/services/history';
import api from '~/services/api';

import BannerInput from './BannerInput';

import { Container } from './styles';
import { toast } from 'react-toastify';

export default function MeetupForm({ match }) {
  const [meetup, setMeetup] = useState();
  const [id, setId] = useState(0);

  useEffect(() => {
    async function loadMeetup() {
      const { data } = await api.get(`/meetups/${match.params.id}`);

      setMeetup(data);
    }

    loadMeetup();
    setId(match.params.id);
  }, [match.params.id]);

  async function handleSubmit(data) {
    if (id === 0) {
      const response = await api.post('/meetups', data);
      toast.success('Meetup cadastrado com sucesso');
    } else {
      const response = await api.put(`/meetups/${id}`, data);
      toast.success('Meetup atualizado com sucesso');
    }
  }

  return (
    <Container>
      <Form initialData={meetup} onSubmit={handleSubmit}>
        <BannerInput name="file_id" />

        <Input name="title" placeholder="Título do Meetup" />
        <Input
          multiline
          type="text"
          name="description"
          placeholder="Descrição completa"
        />
        <Input name="date" placeholder="Data do meetup" />
        <Input name="location" placeholder="Localização" />
        <ReactDatePicker showTimeSelect locale={pt} />

        <button type="submit">
          <MdAddCircleOutline />
          Salvar meetup
        </button>
      </Form>
    </Container>
  );
}
