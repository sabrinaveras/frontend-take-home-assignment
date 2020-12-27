import * as React from 'react';

import { useDispatch, useSelector } from 'react-redux';
import { DateState } from '../../redux/date/date.reducer';
import { DateTypes } from '../../redux/date/date.types';
import { increaseDate, decreaseDate } from '../../redux/date/date.actions';

// images
const arrow = require('../../icons/arrow.svg') as string;

// styled
import * as Styled from './date.styles';

const DateComponent: React.FunctionComponent = () => {
  const monthsOfTheYear = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December'
  ];

  const dispatch = useDispatch();
  const date = useSelector<DateState, DateTypes>(state => state.date);

  const handleDate = (
    event: React.MouseEvent<HTMLImageElement, MouseEvent>
  ) => {
    event.preventDefault();

    if (event.target.id === 'arrow-right') {
      dispatch(increaseDate(date));
    } else {
      dispatch(decreaseDate(date));
    }
  };

  return (
    <Styled.Date>
      <Styled.ArrowLeft src={arrow} id={'arrow-left'} onClick={handleDate} />
      <Styled.MonthYear>
        <h5>{monthsOfTheYear[date.date.month]}</h5>
        <h6>{date.date.year}</h6>
      </Styled.MonthYear>
      <Styled.ArrowRight src={arrow} id={'arrow-right'} onClick={handleDate} />
    </Styled.Date>
  );
};

export default DateComponent;
