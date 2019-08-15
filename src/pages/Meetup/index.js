import React from 'react';
import {
  MdEdit,
  MdDeleteForever,
  MdInsertInvitation,
  MdPlace,
} from 'react-icons/md';

import history from '~/services/history';

import meetup from '~/assets/evento.png';

import { Container, Content } from './styles';

export default function Meetup() {
  function handleMeetup() {
    history.push('/form');
  }

  return (
    <Container>
      <header>
        <h1>Meetup de React Native</h1>
        <aside>
          <button type="button" onClick={handleMeetup}>
            <MdEdit />
            Editar
          </button>
          <button type="button">
            <MdDeleteForever />
            Cancelar
          </button>
        </aside>
      </header>
      <Content>
        <img src={meetup} alt="Evento" />
        <span>
          O meetup de React Native é um evento que reúne a comunidade mobile
          utilizando React a fim de compartilhar conhecimento. Todos são
          convidados.
          <br />
          <br />
          Caso queira participar como palestrante do meetupenvie um e-mail para
          organizacao@meetup.com.br
        </span>
        <div>
          <div>
            <MdInsertInvitation size={20} />
          </div>
          <span>24 de Junho, às 20h</span>
          <div>
            <MdPlace size={20} />
          </div>
          <span>Rua Guilherme Gembala, 260</span>
        </div>
      </Content>
    </Container>
  );
}
