import React from 'react';
import { Provider } from 'react-redux';
import { Route, Switch } from 'react-router-dom';

import store from './redux/store';
import { NavBar } from './components/Navbar/NavBar';
import { CalendarContainer } from './components/Calendar/CalendarContainer';
import { TaskContainer } from './components/Tasks/TaskContainer';
import { EventsContainer } from './components/Events/EventsContainer';
import { Login } from './components/Login/Login';

const App: React.FC = () => {
  return (
    <Provider store={store}>
      <NavBar />
      <Switch>
        <Route path='/login' component={Login} />
        <Route path='/home' component={CalendarContainer} />
        <Route path='/task' component={TaskContainer} />
        <Route path='/event' component={EventsContainer} />
      </Switch>
    </Provider>
  );
};

export default App;
