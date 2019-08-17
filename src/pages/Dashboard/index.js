import React, { useState, useEffect } from 'react';
import { parse, format } from 'date-fns';
import pt from 'date-fns/locale/pt';
import { toast } from 'react-toastify';
import Loader from 'react-loader-spinner';
import { MdAddCircleOutline, MdChevronRight } from 'react-icons/md';

import history from '~/services/history';
import api from '~/services/api';

import { Container, Meetup } from './styles';

export default function Dashboard() {
  const [loading, setLoading] = useState(true);
  const [meetups, setMeetups] = useState([]);

  useEffect(() => {
    async function loadMeetups() {
      try {
        const response = await api.get('/organizing');

        setMeetups(
          response.data.map(meetup => ({
            ...meetup,
            formattedDate: format(parse(meetup.date), 'D [de] MMMM [às] H[h]', {
              locale: pt,
            }),
          }))
        );
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

    loadMeetups();
  }, []);

  function handleNewMeetup() {
    history.push('/meetup');
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
      {loading ? (
        <div className="loading">
          <Loader type="ThreeDots" color="#f94d6a" width={64} height={64} />
        </div>
      ) : (
        <>
          {!meetups.length && (
            <div className="empty">Você não possuí nenhum meetup.</div>
          )}

          <ul>
            {meetups.map(meetup => (
              <Meetup key={meetup.id} past={meetup.past ? 1 : 0}>
                <strong>{meetup.title}</strong>
                <div>
                  <span>{meetup.formattedDate}</span>
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
        </>
      )}
    </Container>
  );
}
