import React from 'react';
import { Calendar, momentLocalizer } from 'react-big-calendar';
import moment from 'moment';

interface CalendarProps {
  events: any;
  onSelectEvent: any;
  eventPropGetterConfig: any;
}

const localizer = momentLocalizer(moment);

export const CustomCalendar: React.FC<CalendarProps> = ({ events, onSelectEvent, eventPropGetterConfig }) => {
  return (
    <Calendar
      selectable
      localizer={localizer}
      events={events}
      defaultDate={new Date()}
      messages={{ agenda: 'Agenda' }}
      views={{ month: true, day: true, week: true, agenda: true }}
      defaultView='month'
      startAccessor='scheduled_at'
      endAccessor='scheduled_at'
      onSelectEvent={onSelectEvent}
      eventPropGetter={eventPropGetterConfig}
      style={{ height: '50rem' }}
    />
  );
};
