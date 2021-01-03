import React, { ChangeEvent, useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { RouteComponentProps } from 'react-router-dom'
import moment from 'moment'

import { CustomInput } from '../../common/CustomInput/CustomInput'
import { CustomTextarea } from '../../common/CustomTextarea/CustomTextarea'
import { CustomCard } from '../../common/CustomCard/CustomCard'
import { Comment } from '../Comments/Comment'

import { RootState } from '../../redux/reducers'
import { IEvent } from '../../types/Event'
import { CustomButton } from '../../common/CustomButton/CustomButton'
import { TStateEvents } from './redux/eventReducer'
import { addNewEvent, clearAllEventData, deleteEvent, getEvent, updateEvent } from './redux/eventsActions'
import { clearComments, getComments } from '../Comments/redux/commentActions'

interface MatchParams {
  id: string
}

type EventProps = RouteComponentProps<MatchParams>

export const EventsComponent: React.FC<EventProps> = ({ match, history }) => {
  const dispatch = useDispatch()
  const EventReducer = useSelector<RootState, TStateEvents>((state) => state.eventReducer)
  const [event, setEvent] = useState<IEvent>({
    id: null,
    name: '',
    description: '',
    startDate: '',
    endDate: '',
    location: '',
  })

  useEffect(() => {
    if (match.params.id) {
      dispatch(getEvent(+match.params.id))
      dispatch(getComments(+match.params.id, 'event'))
    }
    return () => {
      dispatch(clearAllEventData())
      dispatch(clearComments())
    }
  }, [])

  useEffect(() => {
    if (Object.keys(EventReducer.event).length) {
      const { ...rest } = EventReducer.event
      const newEventData = {
        ...rest,
        startDate: moment(rest.startDate).utc().local().format('YYYY-MM-DD'),
        endDate: moment(rest.endDate).utc().local().format('YYYY-MM-DD'),
      }
      setEvent(newEventData)
    }
  }, [EventReducer.event])

  const handleEventChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setEvent({ ...event, [name]: value })
  }

  const onSaveClick = async () => {
    const eventData = {
      name: event.name,
      description: event.description,
      startDate: event.startDate,
      endDate: event.endDate,
      location: event.location,
    }
    await dispatch(addNewEvent(eventData, history))
  }

  const onUpdateClick = () => {
    const data = {
      id: event.id!,
      name: event.name,
      description: event.description,
      startDate: event.startDate,
      endDate: event.endDate,
      location: event.location,
    }
    dispatch(updateEvent(data))
  }

  const onDeleteClick = () => {
    dispatch(deleteEvent(+match.params.id, history))
  }

  return (
    <div className='wrapper'>
      <CustomCard headerText='Create Event' isButtonShowed={false}>
        <div className='event'>
          <div className='event__left'>
            <CustomInput
              customClass={'mb-tiny'}
              value={event.name}
              placeholder='Event Name'
              onChange={handleEventChange}
              name='name'
              label='Event Name'
            />
            <CustomInput
              customClass={'mb-tiny'}
              type='date'
              placeholder='Start Date'
              value={event.startDate}
              onChange={handleEventChange}
              name='startDate'
              label='Start Date'
            />
            <CustomInput
              customClass={'mb-tiny'}
              type='date'
              placeholder='End Date'
              value={event.endDate}
              onChange={handleEventChange}
              name='endDate'
              label='End Date'
            />
            <CustomInput
              customClass={'mb-tiny'}
              value={event.location}
              placeholder='Location'
              onChange={handleEventChange}
              name='location'
              label='Location'
            />
            <CustomTextarea
              customClass={'mb-tiny'}
              value={event.description}
              onChange={handleEventChange}
              placeholder='Description'
              name='description'
              label='Description'
            />
          </div>
          <div className='event__right'>
            <Comment eventId={null} />
          </div>
        </div>
        <div className='separate-line'></div>
        <div className='footer-buttons'>
          {match.params.id ? (
            <>
              <CustomButton text='Update' onClick={onUpdateClick} color='primary mr-tiny' />
              <CustomButton text='Delete' onClick={onDeleteClick} color='danger' />
            </>
          ) : (
            <CustomButton text='Save' onClick={onSaveClick} color='primary' />
          )}
        </div>
      </CustomCard>
    </div>
  )
}
