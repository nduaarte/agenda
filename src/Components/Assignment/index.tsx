import React, { useState, useEffect } from 'react';
import { AntDesign } from '@expo/vector-icons';

import { Container, Row, TitleName, Description, SchedulingData, Hours } from './styles';

interface PropsTypes {
  titleName: string;
  description?: string;
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

const Assignment: React.FC<PropsTypes> = ({ titleName, description = '(sem descrição)', schedulingData, expired }) => {
  const { year, month, day, hours, minutes } = schedulingData;

  return (
    <Container color={expired}>
      <TitleName>{titleName}</TitleName>
      <Description>{description}</Description>

      <Row>
        <SchedulingData>{`${day}/${month}/${year}    `}</SchedulingData>
        <AntDesign name='clockcircleo' size={11} />
        <Hours>{`${hours}h${minutes}min`}</Hours>
      </Row>
    </Container>
  );
}

export default Assignment;