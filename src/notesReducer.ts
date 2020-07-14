interface State {
  notes: string[];
}

interface Action {
  type: 'ADD_NOTE';
  payload: string;
}

const initialState: State = {
  notes: [],
}

const notesReducer = (state: State = initialState, action: Action) => {
  switch(action.type) {
    case 'ADD_NOTE':
      return { ...state, notes: [...state.notes, action.payload]};
    default:
      return state;
  }
}

export default notesReducer;