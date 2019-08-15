import React from 'react';
import { Link } from 'react-router-dom';
import { MdAddCircleOutline, MdChevronRight } from 'react-icons/md';

import history from '~/services/history';

import { Container, Meetup } from './styles';

export default function Dashboard() {
  function handleNewMeetup() {
    history.push('/meetup');
  }

  return (
    <Container>
      <header>
        <h1>Meus meetups</h1>
        <Link to="/meetup">
          <button type="button" onClick={handleNewMeetup}>
            <MdAddCircleOutline />
            Novo meetup
          </button>
        </Link>
      </header>

      <ul>
        <Meetup>
          <strong>Meetup de React Native</strong>
          <div>
            <span>24 de Julho, às 20h</span>
            <button type="button">
              <MdChevronRight size={24} />
            </button>
          </div>
        </Meetup>
        <Meetup>
          <strong>Meetup de React JS</strong>
          <div>
            <span>30 de Julho, às 19h</span>
            <button type="button">
              <MdChevronRight size={24} />
            </button>
          </div>
        </Meetup>
        <Meetup>
          <strong>Meetup de React JS</strong>
          <div>
            <span>30 de Julho, às 19h</span>
            <button type="button">
              <MdChevronRight size={24} />
            </button>
          </div>
        </Meetup>
        <Meetup>
          <strong>Meetup de React JS</strong>
          <div>
            <span>30 de Julho, às 19h</span>
            <button type="button">
              <MdChevronRight size={24} />
            </button>
          </div>
        </Meetup>
        <Meetup>
          <strong>Meetup de React JS</strong>
          <div>
            <span>30 de Julho, às 19h</span>
            <button type="button">
              <MdChevronRight size={24} />
            </button>
          </div>
        </Meetup>
        <Meetup>
          <strong>Meetup de React JS</strong>
          <div>
            <span>30 de Julho, às 19h</span>
            <button type="button">
              <MdChevronRight size={24} />
            </button>
          </div>
        </Meetup>
        <Meetup>
          <strong>Meetup de React JS</strong>
          <div>
            <span>30 de Julho, às 19h</span>
            <button type="button">
              <MdChevronRight size={24} />
            </button>
          </div>
        </Meetup>
        <Meetup>
          <strong>Meetup de React JS</strong>
          <div>
            <span>30 de Julho, às 19h</span>
            <button type="button">
              <MdChevronRight size={24} />
            </button>
          </div>
        </Meetup>
      </ul>
    </Container>
  );
}
