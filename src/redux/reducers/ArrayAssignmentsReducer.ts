export interface RootState {
  ArrayAssignmentReducer: any;
  allAssigments: Array<Object>;
  openAssigments: Array<Object>;
  closedAssigments: Array<Object>;
}

const INITIAL_STATE = {
  allAssigments: [],
  openAssigments: [],
  closedAssigments: []
};

export default function ArrayAssignmentReducer(state = INITIAL_STATE, action: { type: any; value: any; }) {
  switch (action.type) {
    case 'UPDATE_ALL_ASSIGNMENTS':
      return { ...state, allAssigments: action.value};
    case 'UPDATE_OPEN_ASSIGNMENTS':
      return { ...state, openAssigments: [ ...state.openAssigments, action.value]};
    case 'UPDATE_CLOSED_ASSIGNMENTS':
      return { ...state, closedAssigments: [ ...state.closedAssigments, action.value]};
    default:
      return state;
  }
}

export function UPDATE_ALL_ASSIGNMENTS(value: Array<Object>) {
  return { type: 'UPDATE_ALL_ASSIGNMENTS', value };
};

export function UPDATE_OPEN_ASSIGNMENTS(value: Array<Object>) {
  return { type: 'UPDATE_OPEN_ASSIGNMENTS', value };
};

export function UPDATE_CLOSED_ASSIGNMENTS(value: Array<Object>) {
  return { type: 'UPDATE_CLOSED_ASSIGNMENTS', value };
};