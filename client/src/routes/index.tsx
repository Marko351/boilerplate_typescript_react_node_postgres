import React from 'react'
import { Route, Switch } from 'react-router-dom'

import { CalendarContainer } from '../components/Calendar/CalendarContainer'
import { EventsContainer } from '../components/Events/EventsContainer'
import { TaskComponent } from '../components/Tasks/Task'
import { TaskTable } from '../components/Tasks/TaskTable'

export const Homepage: React.FC = () => {
  return (
    <>
      <Switch>
        <Route path='/events' component={EventsContainer} />
        <Route path='/tasks/new' component={TaskComponent} />
        <Route path='/tasks/:id' component={TaskComponent} />
        <Route path='/tasks' component={TaskTable} />
        <Route path='/' component={CalendarContainer} />
      </Switch>
    </>
  )
}
