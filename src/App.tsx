import React from 'react';
import { BrowserRouter } from 'react-router-dom'
import GlobalStyle from './styles/global'
import Routes from './routes';

const App: React.FC = () => (
      <div>
        <BrowserRouter>
          <Routes />
        </BrowserRouter>
        <GlobalStyle />
      </div>

);

export default App;
