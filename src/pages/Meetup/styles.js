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

    aside {
      display: flex;

      button {
        margin-left: 15px;
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
  }
`;

export const Content = styled.div`
  margin-top: 50px;

  img {
    border-radius: 4px;
    align-self: center;
    max-width: 940px;
    max-height: 300px;
  }

  span {
    display: block;
    margin: 25px 0 30px;
    color: #fff;
    line-height: 32px;
    font-size: 18px;
  }

  div {
    display: flex;
    align-content: center;

    span {
      margin: 0;
      font-size: 16px;
      color: rgba(255, 255, 255, 0.6);
      margin-right: 30px;
    }

    svg {
      align-self: center;
      margin-right: 10px;
      color: rgba(255, 255, 255, 0.6);
    }
  }
`;
