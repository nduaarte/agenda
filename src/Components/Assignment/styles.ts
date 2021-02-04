import styled from 'styled-components/native';
import { RectButton } from 'react-native-gesture-handler'

export const Container = styled(RectButton)`
  margin-top: 15px;
  padding: 5px;
  background-color: #aae6b0;
  align-items: center;
`;


export const TitleName = styled.Text`
  margin: 5px 0;

  font-size: 18px;
  font-weight: bold;
  color: #223324;
`;

export const Description = styled.Text`
  font-size: 12px;
  color: gray;
`;

export const Row = styled.View`
  margin-top: 6px;
  flex-direction: row;
  align-items: center;
  align-self: flex-end;
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