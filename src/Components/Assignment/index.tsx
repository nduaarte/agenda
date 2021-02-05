import React, { useState, useEffect } from 'react';
import { AntDesign } from '@expo/vector-icons';

import checkAssignment from '../../utils/checkAsignment';
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

const Assignment: React.FC<PropsTypes> = ({ titleName, description = '(sem descrição)', schedulingData }) => {
  const { year, month, day, hours, minutes } = schedulingData;
  const [hasExpired, setHasExpired] = useState(true);


  useEffect(() => {
    // um loop deve correr com essa funcao em todos os assignments
    setHasExpired(checkAssignment(year, month, day, hours, minutes));
  }, []);
    

  return (
    <Container color={hasExpired}>
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