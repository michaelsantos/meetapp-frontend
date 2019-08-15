import styled from 'styled-components';
import { darken } from 'polished';

export const Container = styled.div`
  max-width: 940px;
  margin: 50px auto;
  display: flex;
  flex-direction: column;

  header {
    display: flex;
    align-items: center;
    justify-content: space-between;

    h1 {
      color: #fff;
      font-weight: bold;
      font-size: 32px;
    }

    button {
      height: 42px;
      padding: 0 20px;
      background: #f94d6a;
      font-weight: bold;
      color: #fff;
      border: 0;
      border-radius: 4px;
      font-size: 16px;
      transition: background 0.2s;
      overflow: hidden;

      display: flex;
      align-self: flex-end;
      align-items: center;

      svg {
        margin-right: 10px;
      }

      &:hover {
        background: ${darken(0.05, '#f94d6a')};
      }
    }
  }

  ul {
    display: grid;
    grid-gap: 10px;
    margin-top: 50px;
  }
`;

export const Meetup = styled.li`
  padding: 20px 20px 20px 30px;
  border-radius: 4px;
  background: rgba(255, 255, 255, 0.1);
  display: flex;
  justify-content: space-between;
  align-items: center;

  strong {
    color: #fff;
    font-size: 18px;
    font-weight: bold;
  }

  div {
    display: flex;
    align-items: center;

    span {
      color: rgba(255, 255, 255, 0.6);
      margin-right: 30px;
    }

    button {
      border: 0;
      background: none;
      color: #fff;
    }
  }

  :hover {
    background: rgba(255, 255, 255, 0.15);
  }
`;
