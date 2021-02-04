import React, { useState, useEffect } from 'react';
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

const Assignment: React.FC<PropsTypes> = ({ titleName, description = '(sem descrição)', schedulingData }) => {
  const { day, month, year, hours, minutes } = schedulingData;
  const [hasExpired, setHasExpired] = useState(false);

  const currentDay = new Date().getDay();
  const currentMonth = 1 + new Date().getMonth();
  const currentYear = new Date().getFullYear();
  const currentHours = new Date().getHours();
  const currentMinutes = new Date().getMinutes();

  useEffect(() => {
    if (currentYear > year)
      setHasExpired(true);
    else {
      if (currentMonth > month && currentYear === year)
        setHasExpired(true);
      else {
        if (currentDay > day && currentMonth === month)
          setHasExpired(true);
        else {
          if (currentHours > hours && currentDay === day)
            setHasExpired(true);
          else {
            if (currentMinutes > minutes && currentHours === hours)
              setHasExpired(true);
          }
        }
      }
    }
  }, []);

  return (
    <Container color={hasExpired}>
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