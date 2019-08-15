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

  &:hover {
    opacity: 0.7;
  }

  svg {
    margin-bottom: 4px;
  }
`;
