import styled from 'styled-components';
import { darken } from 'polished';

export const Container = styled.div`
  max-width: 940px;
  margin: 50px auto;

  .loading {
    display: flex;
    justify-content: center;
    margin-top: 30px;
  }

  form {
    display: flex;
    flex-direction: column;

    input {
      background: rgba(0, 0, 0, 0.2);
      border: 0;
      border-radius: 4px;
      height: 50px;
      padding: 0 15px;
      color: #fff;
      margin: 0 0 10px;
      font-size: 18px;

      &::placeholder {
        color: rgba(255, 255, 255, 0.5);
      }
    }

    textarea {
      background: rgba(0, 0, 0, 0.2);
      border: 0;
      height: 200px;
      border-radius: 4px;
      padding: 15px;
      color: #fff;
      resize: none;
      margin: 0 0 10px;
      font-size: 18px;

      &::placeholder {
        color: rgba(255, 255, 255, 0.5);
      }
    }

    .react-datepicker-wrapper {
      .react-datepicker__input-container {
        display: flex;

        input {
          flex-grow: 1;
        }
      }
    }

    > span {
      color: #f94d6a;
      align-self: flex-start;
      margin: 0 5px 10px;
      font-weight: bold;
      opacity: 0.8;
      font-size: 14px;
    }

    > button {
      margin: 10px 0 0;
      height: 44px;
      padding: 0 20px 0 20px;
      background: #f94d6a;
      font-weight: bold;
      color: #fff;
      border: 0;
      border-radius: 4px;
      font-size: 18px;
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
`;
