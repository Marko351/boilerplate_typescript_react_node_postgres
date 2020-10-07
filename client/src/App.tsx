import React from 'react';

import { Provider } from 'react-redux';
import store from './redux/store';
import { Wrapper } from './components/Wrapper';
import { NavBar } from './components/NavBar';
import Todos from './components/Todos/Todos';

const App: React.FC = () => {
  return (
    <Provider store={store}>
      <NavBar />
      <Wrapper>
        <Todos />
      </Wrapper>
    </Provider>
  );
};

export default App;
