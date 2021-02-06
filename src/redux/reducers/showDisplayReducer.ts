export interface RootState {
  showDisplayReducer: any;
  showDisplay: number;
}

const INITIAL_STATE = {
  showDiplay: 1,
};

function showDisplayReducer(state = INITIAL_STATE, action: { type: any; value: any; }) {
  switch (action.type) {
    case 'UPDATE_SHOW_DISPLAY':
      return { ...state, showDisplay: action.value};
    default:
      return state;
  }
}

export function UPDATE_SHOW_DISPLAY(value: number) {
  return { type: 'UPDATE_SHOW_DISPLAY', value };
};


export default showDisplayReducer;