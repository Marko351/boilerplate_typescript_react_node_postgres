import React from 'react'
import { Route, Switch } from 'react-router-dom'

import { CalendarContainer } from '../components/Calendar/CalendarContainer'
import { EventsContainer } from '../components/Events/EventsContainer'
import { TaskContainer } from '../components/Tasks/TaskContainer'

export const Homepage: React.FC = () => {
  return (
    <>
      <Switch>
        <Route path='/event' component={EventsContainer} />
        <Route path='/task' component={TaskContainer} />
        <Route path='/' component={CalendarContainer} />
      </Switch>
    </>
  )
}
