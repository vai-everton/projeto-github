import React from 'react'
import { useRouteMatch, Link } from 'react-router-dom';

import { Header, RepositoryInfo , Issues } from './styles';

import foto from '../../assets/img-1.jpeg'

import { FiChevronLeft} from 'react-icons/fi'

import logoImg from '../../assets/1587379765556-attachment.svg'

interface RepositoryParams {
    repository: string;
}

const Repositories:React.FC = () => {

    const { params } = useRouteMatch<RepositoryParams>();

    return(
    <>
        <Header>
            <img src={ logoImg } alt="logo"/>
            <Link to="/">
                <FiChevronLeft size={16}/>
                Voltar
            </Link>
        </Header>

        <RepositoryInfo>
            <>
            <header>
                <img src={foto} alt="foto"/>
                <div>
                    <strong>rockeseat/unform</strong>
                    <p>descricao de respositorio</p>
                </div>
            </header>
            <ul>
                <li>
                    <strong>1808</strong>
                    <span>Stars</span>
                </li>
                <li>
                    <strong>48</strong>
                    <span>Forks</span>
                </li>
                <li>
                    <strong>57</strong>
                    <span>Issues</span>
                </li>
            </ul>
            </>
        </RepositoryInfo>

        <Issues>
            <Link to={`/uahsudhasud/`}>
                <div>
                    <strong>asdfasdf</strong>
                    <p>asdfasf</p>
                </div>
            </Link>
        </Issues>
    </>
    )
}

export default Repositories; 