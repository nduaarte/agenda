import React from 'react';
import { AntDesign } from '@expo/vector-icons';

import { Container, Row, TitleName, Description, SchedulingData, Hours } from './styles';

interface PropsTypes {
  titleName: string;
  description?: string;
  schedulingData: ObjectTypes;
}

interface ObjectTypes {
  day: number;
  month: number;
  year: number;
  hours: number;
  minutes: number;
}

const Assignment: React.FC<PropsTypes> = ({ titleName, description='(sem descrição)', schedulingData }) => {
  const { day, month, year, hours, minutes } = schedulingData;

  const currentDay = new Date().getDay();
  const currentMonth = new Date().getMonth();
  const currentYear = new Date().getFullYear();
  const currentHour = new Date().getHours();
  const currentMinutes = new Date().getMinutes();


  return (
    <Container>
      <TitleName>{titleName}</TitleName>
      <Description>{description}</Description>
      <Row>
        <AntDesign name='pushpino' size={11} />
        <SchedulingData>{`${day}/${month}/${year}`}</SchedulingData>
        <Hours>{`-  ${hours}h${minutes}min`}</Hours>
      </Row>
    </Container>
  );
}

export default Assignment;