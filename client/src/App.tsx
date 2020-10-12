import React from 'react';
import { Provider } from 'react-redux';
import { Route, Switch } from 'react-router-dom';

import store from './redux/store';
import { NavBar } from './layout/NavBar';
import { TaskComponent } from './components/Tasks/Tasks';
import { CalendarContainer } from './components/Calendar/CalendarContainer';

const App: React.FC = () => {
  return (
    <Provider store={store}>
      <NavBar />
      <Switch>
        <Route path='/task' component={TaskComponent} />
        <Route path='/' component={CalendarContainer} />
      </Switch>
    </Provider>
  );
};

export default App;
