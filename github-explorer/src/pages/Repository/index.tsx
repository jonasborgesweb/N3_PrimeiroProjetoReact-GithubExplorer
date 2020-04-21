import React, { useEffect, useState } from 'react';
import { useRouteMatch, Link } from 'react-router-dom';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';

import api from '../../services/api';

import logoImg from '../../assets/logo.svg';
// Importando o CSS
import { Header, RepositoryInfo, Issues } from './styles';

interface RepositoryParams {
  repository: string;
}

interface Repository {
  full_name: string;
  description: string;
  stargazers_count: number;
  forks_count: number;
  open_issues_count: number;
  owner: {
    login: string;
    avatar_url: string;
  };
}

interface Issue {
  id: number;
  title: string;
  html_url: string;
  user: {
    login: string;
  };
}

const Repository: React.FC = () => {
  const [repository, setRepository] = useState<Repository | null>(null);
  const [issues, setIssues] = useState<Issue[]>([]);

  const { params } = useRouteMatch<RepositoryParams>();

  useEffect(() => {
    api.get(`repos/${params.repository}`).then((reponse) => {
      setRepository(reponse.data);
    });
    api.get(`repos/${params.repository}/issues`).then((reponse) => {
      setIssues(reponse.data);
    });
  }, [params.repository]);
  return (
    <>
      <Header>
        <img src={logoImg} alt="Github Explorer" />
        <Link to="/">
          <FiChevronLeft size={20} />
          Voltar
        </Link>
      </Header>
      {repository && (
        <RepositoryInfo>
          <header>
            <img
              src={repository.owner.avatar_url}
              alt={repository.owner.login}
            />
            <div>
              <h2>{repository.full_name}</h2>
              <p>{repository.description}</p>
            </div>
          </header>
          <ul>
            <li>
              <h3>{repository.stargazers_count}</h3>
              <p>Stars</p>
            </li>
            <li>
              <h3>{repository.forks_count}</h3>
              <p>Forks</p>
            </li>
            <li>
              <h3>{repository.open_issues_count}</h3>
              <p>Issures abertas</p>
            </li>
          </ul>
        </RepositoryInfo>
      )}

      <Issues>
        {issues.map((issue) => (
          <a key={issue.id} href={issue.html_url}>
            <div>
              <h2>{issue.title}</h2>
              <p>{issue.user}</p>
            </div>
            <FiChevronRight size={30} />
          </a>
        ))}
      </Issues>
    </>
  );
};

export default Repository;
