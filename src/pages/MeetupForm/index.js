import React from 'react';
import { Form, Input } from '@rocketseat/unform';
import { MdAddCircleOutline } from 'react-icons/md';

import BannerInput from './BannerInput';

import { Container } from './styles';

export default function MeetupForm() {
  function handleSubmit(data) {
    console.tron.log(data);
  }

  return (
    <Container>
      <Form onSubmit={handleSubmit}>
        <BannerInput name="file_id" />

        <Input name="title" placeholder="Título do Meetup" />
        <Input multiline name="description" placeholder="Descrição completa" />
        <Input name="date" placeholder="Data do meetup" />
        <Input name="location" placeholder="Localização" />

        <button type="submit">
          <MdAddCircleOutline />
          Salvar meetup
        </button>
      </Form>
    </Container>
  );
}
