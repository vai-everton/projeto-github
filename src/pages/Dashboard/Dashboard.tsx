import React, { FormEvent, useState } from 'react'
import {Title, Form, Repositorie}  from './styles'

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
    const [repositories, setRepositories] = useState<Repositorie[]>([])



    async function handleRepositoryRequest(
        event:FormEvent<HTMLFormElement>
    ):Promise<void> {
        event.preventDefault();
        console.log(newRepo);

        const response = await api.get<Repositorie>(`/repos/${newRepo}`)

        const repository = response.data;


        setRepositories([...repositories, repository])
        setNewRepo(newRepo);
    }

    return (
        <>
            <img src={ Logo } alt="GitHub Explorer" />
            <Title>Explore repositórios no github</Title>

            <Form onSubmit={handleRepositoryRequest}>
                <input
                    value={newRepo}
                    onChange={(e) => setNewRepo(e.target.value)}
                    placeholder="Digite o nome do repositório" 
                />

                <button type="submit" >Pesquisar</button>
            </Form>

            <Repositorie>
                <>
                {repositories.map(repository => (
                    <a key={repository.full_name} href="teste">
                        <img
                            src={repository.owner.avatar_url}
                            alt={repository.owner.login}
                        />
                        <div>
                            <strong>{repository.full_name}</strong>
                            <p>{repository.description}</p>
                        </div>
                    </a>
                ))}
                </>
            </Repositorie>
        </>
    )
}

export default Dashboard;
