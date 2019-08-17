import React, { useState, useEffect } from 'react';
import { parse, format } from 'date-fns';
import pt from 'date-fns/locale/pt';
import {
  MdEdit,
  MdDeleteForever,
  MdInsertInvitation,
  MdPlace,
} from 'react-icons/md';

import history from '~/services/history';
import api from '~/services/api';

import { Container, Content } from './styles';

export default function Meetup({ match }) {
  const [meetup, setMeetup] = useState(null);

  useEffect(() => {
    async function loadMeetup() {
      const { data } = await api.get(`/organizing/${match.params.id}`);

      setMeetup({
        ...data,
        formattedDate: format(parse(data.date), 'D [de] MMMM [às] H[h]', {
          locale: pt,
        }),
      });
    }

    loadMeetup();
  }, [match.params.id]);

  function handleEdit(id) {
    history.push(`/meetup-edit/${id}`);
  }

  async function handleCancel(id) {
    await api.delete(`/meetups/${id}`);

    history.push('/dashboard');
  }

  return (
    !!meetup && (
      <Container>
        <header>
          <h1>{meetup.title}</h1>

          {!meetup.past && (
            <aside>
              <button
                type="button"
                className="edit"
                onClick={() => handleEdit(meetup.id)}
              >
                <MdEdit />
                Editar
              </button>
              <button
                type="button"
                clas="cancel"
                onClick={() => handleCancel(meetup.id)}
              >
                <MdDeleteForever />
                Cancelar
              </button>
            </aside>
          )}
        </header>
        <Content>
          <img src={meetup.banner.url} alt={meetup.title} />
          <span>{meetup.description}</span>
          <div>
            <div>
              <MdInsertInvitation size={20} />
            </div>
            <span>{meetup.formattedDate}</span>
            <div>
              <MdPlace size={20} />
            </div>
            <span>{meetup.location}</span>
          </div>
        </Content>
      </Container>
    )
  );
}
