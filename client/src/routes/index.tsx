import React from 'react'
import { Route, Switch } from 'react-router-dom'

import { CalendarContainer } from '../components/Calendar/CalendarContainer'
import { EventsComponent } from '../components/Events/Events'
import { EventsTable } from '../components/Events/EventsTable'
import { TaskComponent } from '../components/Tasks/Task'
import { TaskTable } from '../components/Tasks/TaskTable'

export const Homepage: React.FC = () => {
  return (
    <>
      <Switch>
        <Route path='/events/new' component={EventsComponent} />
        <Route path='/events/:id' component={EventsComponent} />
        <Route path='/events' component={EventsTable} />
        <Route path='/tasks/new' component={TaskComponent} />
        <Route path='/tasks/:id' component={TaskComponent} />
        <Route path='/tasks' component={TaskTable} />
        <Route path='/' component={CalendarContainer} />
      </Switch>
    </>
  )
}
