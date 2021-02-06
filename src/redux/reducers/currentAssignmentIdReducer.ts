export interface RootState {
  currentAssignmentIdReducer: any;
  currentId: number;
}

const INITIAL_STATE = {
  currentId: 0
};

export default function currentAssignmentIdReducer(state = INITIAL_STATE, action: { type: any; value: any; }) {
  switch (action.type) {
    case 'UPDATE_CURRENT_ID':
      return { ...state, currentId: action.value };
    default:
      return state;
  }
}

export function UPDATE_CURRENT_ID(value: number) {
  return { type: 'UPDATE_CURRENT_ID', value };
};