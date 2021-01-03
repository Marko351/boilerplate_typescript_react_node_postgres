import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import moment from 'moment'
import { NavLink, RouteComponentProps } from 'react-router-dom'

import { getAllEvents } from './redux/eventsActions'
import { RootState } from '../../redux/reducers'
import { TStateEvents } from './redux/eventReducer'

import { CustomCard } from '../../common/CustomCard/CustomCard'
import { CustomTable, DEFAULT_LIMIT, DEFAULT_SKIP } from '../../common/CustomTable/CustomTable'
import { IEvent } from '../../types/Event'

type IEventTable = RouteComponentProps

export const EventsTable: React.FC<IEventTable> = ({ history }) => {
  const dispatch = useDispatch()
  const EventReducer = useSelector<RootState, TStateEvents>((state) => state.eventReducer)
  const [data, setData] = useState<IEvent[]>([])
  const [options, setOptions] = useState({
    limit: DEFAULT_LIMIT,
    skip: DEFAULT_SKIP,
  })
  useEffect(() => {
    setData(EventReducer.events)
  }, [EventReducer.events])

  useEffect(() => {
    getTasks()
  }, [options])

  const getTasks = async () => {
    await dispatch(getAllEvents(options))
  }

  const onSkipAndLimitChange = (name: string, value: number) => {
    setOptions({
      ...options,
      [name]: value,
    })
  }

  const dateBody = (rowData: any, name: string) => {
    return moment(rowData.data[name]).utc().local().format('MM-DD-YYYY')
  }

  const createdByBody = (rowData: any) => {
    return rowData.data.createdByObj && rowData.data.createdByObj.username
  }

  const nameBody = (rowData: any) => {
    return (
      <NavLink to={`/events/${rowData.data.id}`} className='color-link'>
        {rowData.data.name}
      </NavLink>
    )
  }

  const onCreateNewEventClick = () => {
    history.push('/events/new')
  }

  const columns = [
    { name: 'name', header: 'Name', minWidth: 100, defaultFlex: 1, render: nameBody },
    {
      name: 'creationDate',
      header: 'Creation Date',
      minWidth: 100,
      defaultFlex: 1,
      render: (rowData: any) => dateBody(rowData, 'creationDate'),
    },
    {
      name: 'startDate',
      header: 'Start Date',
      minWidth: 100,
      defaultFlex: 1,
      render: (rowData: any) => dateBody(rowData, 'startDate'),
    },
    {
      name: 'endDate',
      header: 'End Date',
      minWidth: 100,
      defaultFlex: 1,
      render: (rowData: any) => dateBody(rowData, 'endDate'),
    },
    { name: 'location', header: 'Location', minWidth: 100, defaultFlex: 1 },
    { name: 'createdBy', header: 'Created By', minWidth: 100, defaultFlex: 1, render: createdByBody },
  ]
  return (
    <div className='wrapper'>
      <CustomCard
        headerText='Event Table'
        isButtonShowed={true}
        buttonText={'Create New Event'}
        onButtonClick={onCreateNewEventClick}>
        <CustomTable
          columns={columns}
          data={data}
          onSkipAndLimitChange={onSkipAndLimitChange}
          totalRecords={EventReducer.options.totalRecords}
        />
      </CustomCard>
    </div>
  )
}
