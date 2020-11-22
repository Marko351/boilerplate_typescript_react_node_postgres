import React from 'react'
import { CustomCard } from '../../common/CustomCard/CustomCard'
import { EventsComponent } from './Events'

export const EventsContainer: React.FC = () => {
  return (
    <div className='wrapper'>
      <CustomCard headerText='Create Event'>
        <EventsComponent />
      </CustomCard>
    </div>
  )
}
