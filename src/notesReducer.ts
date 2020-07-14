export interface NotesState {
  notes: string[];
}

interface Action {
  type: 'ADD_NOTE';
  payload: string;
}

const initialState: NotesState = {
  notes: [],
}

export const notesReducer = (state: NotesState = initialState, action: Action) => {
  switch(action.type) {
    case 'ADD_NOTE':
      return { ...state, notes: [...state.notes, action.payload]};
    default:
      return state;
  }
}