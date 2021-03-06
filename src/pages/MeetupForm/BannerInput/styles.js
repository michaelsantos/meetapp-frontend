import styled from 'styled-components';

export const Container = styled.div`
  margin-bottom: 20px;

  label {
    cursor: pointer;

    &:hover {
      opacity: 0.7;
    }

    img {
      height: 300px;
      width: 940px;
      border-radius: 4px;
    }

    input {
      display: none;
    }
  }

  span {
    color: #f94d6a;
    align-self: flex-start;
    margin: 0 5px 10px;
    font-weight: bold;
    opacity: 0.8;
    font-size: 14px;
  }
`;

export const Content = styled.div`
  height: 300px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  background: rgba(0, 0, 0, 0.4);
  color: rgba(255, 255, 255, 0.3);
  font-size: 20px;
  font-weight: bold;
  border-radius: 4px;

  &:hover {
    opacity: 0.7;
  }
`;
