import React, { useState, useEffect } from 'react';
import { parseISO, format } from 'date-fns';
import pt from 'date-fns/locale/pt';
import { MdAddCircleOutline, MdChevronRight } from 'react-icons/md';

import history from '~/services/history';
import api from '~/services/api';

import { Container, Meetup } from './styles';

export default function Dashboard() {
  const [meetups, setMeetups] = useState([]);

  useEffect(() => {
    async function loadMeetups() {
      const { data } = await api.get('/organizer');

      setMeetups(data);
    }

    loadMeetups();
  }, []);

  function handleNewMeetup() {
    history.push('/meetup-register');
  }

  function handlViewMeetup(id) {
    history.push(`/meetup/${id}`);
  }

  return (
    <Container>
      <header>
        <h1>Meus meetups</h1>
        <button type="button" onClick={handleNewMeetup}>
          <MdAddCircleOutline />
          Novo meetup
        </button>
      </header>

      <ul>
        {meetups.map(meetup => (
          <Meetup key={meetup.id}>
            <strong>{meetup.title}</strong>
            <div>
              <span>
                {format(parseISO(meetup.date), "d 'de' MMMM', às 'H'h'", {
                  locale: pt,
                })}
              </span>
              <button
                type="button"
                alt="Ver detalhes"
                onClick={() => handlViewMeetup(meetup.id)}
              >
                <MdChevronRight size={24} />
              </button>
            </div>
          </Meetup>
        ))}
      </ul>
    </Container>
  );
}
