import React, { useEffect, useState } from 'react'
import { useRouteMatch, Link } from 'react-router-dom';

import { Header, RepositoryInfo , Issues } from './styles';


import api from '../../services/api'

import { FiChevronLeft} from 'react-icons/fi'

import logoImg from '../../assets/logo.svg'

interface RepositoryParams {
    repository: string;
}

interface Repository {
    full_name:string;
    description:string;
    owner: {
        login:string;
        avatar_url: string;
    };
    stargazers_count:number;
    forks_count:number;
    open_issues_count:number;
    
}

interface Issue  {
    id: number;
    title: string;
    user: {
        login:string;
    }
    html_url:string;
}

const Repositories:React.FC = () => {

    const { params } = useRouteMatch<RepositoryParams>();

    const [repository, setRepository] = useState<Repository | null> (null);
    const [issues, setIssues] = useState<Issue[]>([]);

    useEffect (() => {
        // async function loadData(): Promise<void> {
        //     const repository = await api.get(`repos/${params.repository}`).then(response =>{
        //         console.log(response);
        //     })
        //     const issues = await api.get(`repos/${params.repository}/issues`).then(response =>{
        //         console.log(response);
        //     })
        // }
    

        // api.get(`repos/${params.repository}`).then(response =>{
        //         console.log(response);
        // })

        api.get(`repos/${params.repository}`).then((response) => {
            setRepository(response.data);
        });

        api.get(`repos/${params.repository}/issues`).then((response) => {
            setIssues(response.data);
        });
    }, [params.repository])

    

    return(
    <>
        <Header>
            <img src={ logoImg } alt="logo"/>
            <Link to="/">
                <FiChevronLeft size={16}/>
                Voltar
            </Link>
        </Header>

        { repository && (
            <RepositoryInfo>
            <>
            <header>
                <img src={repository.owner.avatar_url} alt="foto"/>
                <div>
                    <strong>{repository.owner.login}</strong>
                    <p>{repository.description}</p>
                </div>
            </header>
            <ul>
                <li>
                    <strong>{repository.stargazers_count}</strong>
                    <span>Stars</span>
                </li>
                <li>
                    <strong>{repository.forks_count}</strong>
                    <span>Forks</span>
                </li>
                <li>
                    <strong>{repository.open_issues_count}</strong>
                    <span>Issues</span>
                </li>
            </ul>
            </>
        </RepositoryInfo>
        )}

        <Issues>
            
            {issues.map(issue => (
                <a key={issue.id} href={issue.html_url} target="_blank" rel="noreferrer">
                    <div>
                        <strong>{issue.title}</strong>
                        <p>{issue.user.login}</p>
                    </div>
                </a>
            ))}
            
        </Issues>
    </>
    )
}

export default Repositories; 