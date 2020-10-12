import React, { useState } from 'react';
import { connect, ConnectedProps } from 'react-redux';

import { RootState } from '../../redux/reducers';
import { Wrapper } from '../../common/Wrapper';
import { CustomCard } from '../../common/CustomCard';
import { CustomCalendar } from './Calendar';

const mapStateToProps = (state: RootState) => ({});

const connector = connect(mapStateToProps, {});

type PropsFromRedux = ConnectedProps<typeof connector>;

type CalendarProps = PropsFromRedux;

const CalendarContainerDefault: React.FC<CalendarProps> = ({}) => {
  return (
    <Wrapper>
      <CustomCard headerText='calendar'>
        <CustomCalendar events={[]} onSelectEvent={() => {}} eventPropGetterConfig={{}} onSelectSlot={() => {}} />
      </CustomCard>
    </Wrapper>
  );
};

export const CalendarContainer = connector(CalendarContainerDefault);
