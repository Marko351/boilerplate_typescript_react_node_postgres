import React from 'react';

import { Provider } from 'react-redux';
import store from './redux/store';
import { Wrapper } from './components/Wrapper';
import { NavBar } from './layout/NavBar';
import Tasks from './components/Tasks/Tasks';

const App: React.FC = () => {
  return (
    <Provider store={store}>
      <NavBar />
      <Wrapper>
        <Tasks />
      </Wrapper>
    </Provider>
  );
};

export default App;
