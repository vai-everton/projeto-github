import React, { FormEvent, useState, useEffect } from 'react'
import {Title, Form, Repositorie, Error}  from './styles'

import { Link } from 'react-router-dom'

import Logo from '../../assets/1587379765556-attachment.svg'

import api from '../../services/api'


interface Repositorie {
    full_name:string;
    description:string;
    owner: {
        login:string;
        avatar_url: string;
    };
}

const Dashboard:React.FC = () => {

    const [newRepo, setNewRepo] = useState('');

    const [repositories, setRepositories] = useState<Repositorie[]> (() => {
        const storagedRepositories = localStorage.getItem('@GitHubExplorer:repositories');

        if (storagedRepositories) {
            return JSON.parse(storagedRepositories);
        } 
        return [];
    })

    const [inputError, setInputError] = useState('');

    useEffect(() => {

    })

    useEffect(() => {
        localStorage.setItem('@GitHubExplorer:repositories', JSON.stringify(repositories));
    }, [repositories])

    async function handleRepositoryRequest(
        event:FormEvent<HTMLFormElement>
    ):Promise<void> {

        event.preventDefault();



        if(!newRepo) {
            setInputError('Digite o autor/nome do repositório');
        }
        else {
            try {
                const response = await api.get<Repositorie>(`/repos/${newRepo}`)

                const repository = response.data;


                setRepositories([...repositories, repository])
                setNewRepo(newRepo);
                setInputError('');
            } catch(err) { 
                setInputError('Erro na busca. Não encontrado')
            }
        }
    }

    return (
        <>
            <img src={ Logo } alt="GitHub Explorer" />
            <Title>Explore repositórios no github</Title>

            <Form hasError={!!inputError} onSubmit={handleRepositoryRequest}>
                <input
                    value={newRepo}
                    onChange={(e) => setNewRepo(e.target.value)}
                    placeholder="Digite o nome do repositório" 
                />

                <button type="submit" >Pesquisar</button>
            </Form>

            { inputError && <Error>{inputError}</Error> }

            <Repositorie>
                <>
                {repositories.map(repository => (
                    <Link key={repository.full_name} to={`/repository/${repository.full_name}`}>
                        <img
                            src={repository.owner.avatar_url}
                            alt={repository.owner.login}
                        />
                        <div>
                            <strong>{repository.full_name}</strong>
                            <p>{repository.description}</p>
                        </div>
                    </Link>
                ))}
                </>
            </Repositorie>
        </>
    )
}

export default Dashboard;
