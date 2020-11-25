import React from 'react'
import { Route, Switch } from 'react-router-dom'

import { CalendarContainer } from '../components/Calendar/CalendarContainer'
import { EventsContainer } from '../components/Events/EventsContainer'
import { TaskContainer } from '../components/Tasks/TaskContainer'
import { TaskTable } from '../components/Tasks/TaskTable'

export const Homepage: React.FC = () => {
  return (
    <>
      <Switch>
        <Route path='/event' component={EventsContainer} />
        <Route path='/task' component={TaskTable} />
        <Route path='/' component={CalendarContainer} />
      </Switch>
    </>
  )
}
