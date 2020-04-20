import React from 'react';
import { FiChevronRight } from 'react-icons/fi';
import logoImg from '../../assets/logo.svg';
// Import CSS
import { Header, Title, Form, Repositories } from './styles';

const Dashboard: React.FC = () => {
  return (
    <>
      <Header>
        <img src={logoImg} alt="Github Explorer" />
        <Title>Explore repositórios no Github</Title>
      </Header>
      <Form>
        <input type="text" placeholder="Digite o nome do reposittório" />
        <button type="submit">Pesquisar</button>
      </Form>
      <Repositories>
        <a href="teste">
          <img
            src="https://avatars0.githubusercontent.com/u/54940847?s=460&u=41cd1b9e7b87472a9748a595961d9b3a8a293f5c&v=4"
            alt="Avatar"
          />
          <div>
            <h2>jonasborgesweb/github-explorer</h2>
            <p>Descrição do Repositório Descrição do Repositório </p>
          </div>
          <FiChevronRight size={30} />
        </a>
        <a href="teste">
          <img
            src="https://avatars0.githubusercontent.com/u/54940847?s=460&u=41cd1b9e7b87472a9748a595961d9b3a8a293f5c&v=4"
            alt="Avatar"
          />
          <div>
            <h2>jonasborgesweb/github-explorer</h2>
            <p>Descrição do Repositório Descrição do Repositório </p>
          </div>
          <FiChevronRight size={30} />
        </a>
        <a href="teste">
          <img
            src="https://avatars0.githubusercontent.com/u/54940847?s=460&u=41cd1b9e7b87472a9748a595961d9b3a8a293f5c&v=4"
            alt="Avatar"
          />
          <div>
            <h2>jonasborgesweb/github-explorer</h2>
            <p>Descrição do Repositório Descrição do Repositório </p>
          </div>
          <FiChevronRight size={30} />
        </a>
      </Repositories>
    </>
  );
};

export default Dashboard;
