import React from 'react';
import { Provider } from 'react-redux';
import { Route, Switch } from 'react-router-dom';

import store from './redux/store';
import { NavBar } from './components/Navbar/NavBar';
import { CalendarContainer } from './components/Calendar/CalendarContainer';
import { TaskContainer } from './components/Tasks/TaskContainer';

const App: React.FC = () => {
  return (
    <Provider store={store}>
      <NavBar />
      <Switch>
        <Route path='/task' component={TaskContainer} />
        <Route path='/home' component={CalendarContainer} />
      </Switch>
    </Provider>
  );
};

export default App;
