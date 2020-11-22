import React, { ChangeEvent, useState } from 'react'
import { connect, ConnectedProps } from 'react-redux'

// import { RootState } from '../../redux/reducers'
import { CustomCard } from '../../common/CustomCard/CustomCard'
import { CustomCalendar } from './Calendar'
import { ICalendarEvent, IEventPropGetter } from '../../types/Calendar'
import { CalendarCheckbox } from '../../common/CalendarCheckbox/CalendarCheckbox'

const mapStateToProps = () => ({})

const connector = connect(mapStateToProps, {})

type PropsFromRedux = ConnectedProps<typeof connector>

type CalendarProps = PropsFromRedux

const CalendarContainerDefault: React.FC<CalendarProps> = () => {
  const [filters, setFilters] = useState({
    tasks: true,
    events: true,
  })

  const handleFiltersChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, checked } = e.target as HTMLInputElement
    console.log(name)
    setFilters({ ...filters, [name]: checked })
  }

  const eventPropGetterConfig = (event: ICalendarEvent): IEventPropGetter => {
    switch (event.referenceTo) {
      case 'tasks':
        return { style: { backgroundColor: '#2f855a', color: 'white' } }
      case 'events':
        return { style: { backgroundColor: '#c53030', color: 'white' } }
      default:
        return { style: { backgroundColor: '#3174ad', color: 'white' } }
    }
  }

  return (
    <div className='wrapper custom-calendar'>
      <CustomCard headerText='calendar'>
        <div className='custom-calendar--checkbox-container'>
          <CalendarCheckbox
            customClass='mr-small'
            name='tasks'
            value={filters.tasks}
            onChange={handleFiltersChange}
            label='Tasks'
          />
          <CalendarCheckbox name='events' value={filters.events} onChange={handleFiltersChange} label='Events' />
        </div>
        <CustomCalendar events={[]} onSelectEvent={''} eventPropGetterConfig={eventPropGetterConfig} />
      </CustomCard>
    </div>
  )
}

export const CalendarContainer = connector(CalendarContainerDefault)
