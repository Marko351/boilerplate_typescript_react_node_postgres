import React, { ChangeEvent, useState } from 'react';
import { connect, ConnectedProps } from 'react-redux';

import { CustomInput } from '../../common/CustomInput/CustomInput';
import { CustomTextarea } from '../../common/CustomTextarea/CustomTextarea';
import { Comment } from '../Comments/Comment';

import { RootState } from '../../redux/reducers';
import { IEvent } from '../../types/Event';

const mapStateToProps = (state: RootState) => ({
  eventReducer: state.eventReducer,
  commentsReducer: state.commentsReducer,
});

const connector = connect(mapStateToProps, {});

type PropsFromRedux = ConnectedProps<typeof connector>;

type EventProps = PropsFromRedux;

export const EventsComponentDefault: React.FC<EventProps> = ({ commentsReducer, eventReducer }) => {
  const [event, setEvent] = useState<IEvent>({
    id: null,
    eventName: '',
    description: '',
    startDate: '',
    endDate: '',
    location: '',
  });

  const handleEventChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setEvent({ ...event, [name]: value });
  };

  return (
    <>
      <div className='event'>
        <div className='event__left'>
          <CustomInput
            customClass={'mb-tiny'}
            value={event.eventName}
            placeholder='Event Name'
            onChange={handleEventChange}
            name='eventName'
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
          <Comment comments={commentsReducer.comments} />
        </div>
      </div>
      <div className='separate-line'></div>
      <div className='footer-buttons'>{/* <CustomButton text='Save' onClick={() => {}} color='success' /> */}</div>
    </>
  );
};

export const EventsComponent = connector(EventsComponentDefault);
