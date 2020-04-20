import styled, { css } from 'styled-components';
import { shade } from 'polished';

interface FormProps {
  hasError: boolean;
}

export const Header = styled.header`
  margin: 50px 0 40px;
`;
export const Title = styled.h1`
  font-size: 48px;
  line-height: 56px;
  max-width: 450px;
  color: #3a3a3a;
  margin-top: 70px;
`;

export const Form = styled.form<FormProps>`
  max-width: 700px;
  display: flex;

  input {
    flex: 1;
    border: 0;
    border-radius: 5px 0 0 5px;
    padding: 26px 24px;
    color: #3a3a3a;
    border: 2px solid #fff;
    border-right: 0;

    ${(props) =>
    props.hasError &&
    css`
        border-color: #c53030;
      `}

    &::placeholder {
      color: #a8a8b3;
    }
  }

  button {
    border: 0;
    color: #fff;
    font-weight: bold;
    width: 210px;
    padding: 26px 24px;
    border-radius: 0 5px 5px 0;
    background-color: #04d361;
    transition: 0.3s ease;

    &:hover {
      background-color: ${shade(0.2, '#04d361')};
    }
  }
`;

export const Error = styled.span`
  display: block;
  color: #c53030;
  margin-top: 8px;
`;

export const Repositories = styled.div`
  margin-top: 70px;

  a {
    display: block;
    background-color: #fff;
    text-decoration: none;
    border-radius: 5px;
    padding: 24px;
    width: 100%;
    transition: 0.3s ease;

    display: flex;
    align-items: center;

    &:hover {
      transform: translateX(10px);
    }

    &:not(:last-child) {
      margin-bottom: 16px;
    }

    img {
      width: 64px;
      height: 64px;
      border-radius: 50%;
    }

    div {
      margin: 0 16px;
      flex: 1;
      h2 {
        font-size: 20px;
        font-weight: bold;
        color: #3d3d4d;
      }

      p {
        font-size: 18px;
        color: #a8a8b3;
        margin-top: 4px;
      }
    }

    svg {
      margin-left: auto;
      color: #cbcbd6;
    }
  }
`;
