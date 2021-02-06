import React from 'react';
import { AntDesign } from '@expo/vector-icons';
import { useDispatch } from 'react-redux';

import { Container, Row, TitleName, SchedulingData, Hours } from './styles';

export interface PropsTypes {
  id: number;
  titleName: string;
  expired?: boolean;
  schedulingData: ObjectTypes;
}

export interface ObjectTypes {
  day: number;
  month: number;
  year: number;
  hours: number;
  minutes: number;
}

const Assignment: React.FC<PropsTypes> = ({ id, titleName, schedulingData, expired }) => {
  const { year, month, day, hours, minutes } = schedulingData;
  const dispatch = useDispatch();

  function dispatching() {
    dispatch({ type: 'UPDATE_CURRENT_ID', value: id});
  }

  return (
    <Container color={expired} onPress={() => dispatching()}>
      <TitleName>{titleName}</TitleName>

      <Row>
        <SchedulingData>{`${day}/${month}/${year}    `}</SchedulingData>
        <AntDesign name='clockcircleo' size={11} />
        <Hours>{`${hours}h${minutes}min`}</Hours>
      </Row>
    </Container>
  );
}

export default Assignment;