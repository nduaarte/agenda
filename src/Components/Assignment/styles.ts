import styled from 'styled-components/native';
import { RectButton } from 'react-native-gesture-handler'

interface PropsTypes {
  color: boolean | undefined;
}

export const Container = styled(RectButton)`
  margin: 3px;
  padding: 15px 5px;
  border-radius: 10px;
  background-color: ${({ color }: PropsTypes) => color ? '#e89292' : '#aae6b0'};
  align-items: center;
`;


export const TitleName = styled.Text`
  margin: 5px 0;
  font-size: 18px;
  font-weight: bold;
  color: #223324;
`;

export const Row = styled.View`
  margin-top: 6px;
  flex-direction: row;
  align-items: center;
`;

export const SchedulingData = styled.Text`
  font-size: 10px;
  font-weight: bold;
  margin-left: 5px;
`;

export const Hours = styled.Text`
  font-size: 10px;
  font-weight: bold;
  margin-left: 5px;
  color: #3d423d;
`;