import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';

import data from '../../data';
import { Container, Title, AssignmentsContainer } from './styles';
import { ObjectTypes } from '../../Components/Assignment';
import { RootState } from '../../redux/reducers/showDisplayReducer';
import checkAssignment from '../../utils/checkAsignment';
import ButtonsSideBar from '../../Components/ButtonsSideBar';
import Assignment from '../../Components/Assignment';

interface TypesState {
  hasChecked: boolean;
  name: string;
  description: string;
  scheduling_date: ObjectTypes;
}

const SideBar: React.FC = () => {
  const [allAssignments, setAllAssignment] = useState<TypesState[]>([]);
  const [openAssignments, setOpenAssignment] = useState<TypesState[]>([]);
  const [closedAssignments, setClosedAssignment] = useState<TypesState[]>([]);
  const [currentAssignments, setCurrentAssignment] = useState<TypesState[]>([]);

  // Modifica quais assignments vão aparecer na tela. Cada número é um ID.
  // 1-Todos.
  // 2-Apenas abertos.
  // 3-Apenas fechados.
  const showDisplay = useSelector((state: RootState) => state.showDisplayReducer.showDisplay);
  
  useEffect(() => {
    for (let i = 0; i < data.length; i++) {
      const { name, description, scheduling_date } = data[i];
      const { year, month, day, hours, minutes } = scheduling_date;
      const hasChecked = checkAssignment(year, month, day, hours, minutes);

      if (hasChecked) {
        setClosedAssignment(oldArray => [...oldArray, { name, description, scheduling_date, hasChecked }]);
      } else {
        setOpenAssignment(oldArray => [...oldArray, { name, description, scheduling_date, hasChecked }]);
      }
      setAllAssignment(oldArray => [...oldArray, { name, description, scheduling_date, hasChecked }]);
    }
  }, []);

  useEffect(() => {
    if(showDisplay === 1)
      setCurrentAssignment(allAssignments);
    else if(showDisplay === 2)
      setCurrentAssignment(openAssignments);
    else if(showDisplay === 3)
      setCurrentAssignment(closedAssignments);
  }, [showDisplay]);

  return (
    <Container>
      <Title>Lembretes</Title>
      <ButtonsSideBar />

      <AssignmentsContainer>
        {
          currentAssignments.map(({ name, description, scheduling_date, hasChecked }, index) => (
            <Assignment
              key={index}
              expired={hasChecked}
              titleName={name}
              description={description}
              schedulingData={scheduling_date}
            />
          ))
        }
      </AssignmentsContainer>
    </Container>
  );
}

export default SideBar;