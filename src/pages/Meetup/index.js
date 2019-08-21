import React, { useState, useEffect } from 'react';
import { parseISO, format } from 'date-fns';
import pt from 'date-fns/locale/pt';
import PropTypes from 'prop-types';
import { toast } from 'react-toastify';
import Loader from 'react-loader-spinner';
import nl2br from 'react-nl2br';
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
  const [loading, setLoading] = useState(true);
  const [meetup, setMeetup] = useState(null);

  useEffect(() => {
    async function loadMeetup() {
      try {
        const { data } = await api.get(`/organizing/${match.params.id}`);

        setMeetup({
          ...data,
          formattedDate: format(
            parseISO(data.date),
            "dd 'de' MMMM', às' H'h'",
            {
              locale: pt,
            }
          ),
        });
      } catch (err) {
        const error = err.response;

        toast.error(
          !!error && error.data.error
            ? `Ops! ${error.data.error}`
            : 'Ocorreu um erro, tente novamente'
        );

        history.push('/dashboard');
      } finally {
        setLoading(false);
      }
    }

    loadMeetup();
  }, [match.params.id]);

  function handleEdit(id) {
    history.push(`/meetup/edit/${id}`);
  }

  async function handleCancel(id) {
    try {
      await api.delete(`/meetups/${id}`);

      toast.success('Meetup cancelado com sucesso');

      history.push('/dashboard');
    } catch (err) {
      const error = err.response;

      toast.error(
        !!error && error.data.error
          ? `Ops! ${error.data.error}`
          : 'Ocorreu um erro, tente novamente'
      );

      history.push('/dashboard');
    }
  }

  return (
    <Container>
      {loading ? (
        <div className="loading">
          <Loader type="ThreeDots" color="#f94d6a" width={64} height={64} />
        </div>
      ) : (
        <>
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
                  className="cancel"
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
            <span>{nl2br(meetup.description)}</span>
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
        </>
      )}
    </Container>
  );
}

Meetup.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string.isRequired,
    }).isRequired,
  }).isRequired,
};
