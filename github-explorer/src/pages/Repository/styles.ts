import styled from 'styled-components';
import { shade } from 'polished';

export const Header = styled.header`
  margin: 30px 0;
  display: flex;
  align-items: center;
  justify-content: space-between;

  a {
    display: flex;
    align-items: center;

    text-decoration: none;
    font-size: 16px;
    color: #a8a8b3;
    transition: 0.3s ease;

    &:hover {
      color: ${shade(0.4, '#a8a8b3')};
    }
  }

  svg {
    margin-right: 8px;
  }
`;

export const RepositoryInfo = styled.section`
  header {
    display: flex;
    align-items: center;
    margin: 80px 0 40px;

    img {
      width: 120px;
      height: 120px;
      border-radius: 50%;
    }

    div {
      flex: 1;
      margin-left: 20px;

      h2 {
        font-size: 36px;
        font-weight: bold;
        color: #3d3d4d;
      }
      p {
        font-size: 18px;
        color: #737380;
        margin-top: 4px;
      }
    }
  }
  ul {
    list-style: none;
    display: flex;

    li {
      &:not(:last-child) {
        margin-right: 80px;
      }

      h3 {
        font-size: 36px;
        color: #3d3d4d;
      }

      p {
        margin-top: 4px;
        font-size: 16px;
        color: #6c6c80;
      }
    }
  }
`;

export const Issues = styled.div`
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
