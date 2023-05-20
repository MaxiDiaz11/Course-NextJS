import { UIState } from './';

type UIActionType = { type: 'UI-OpenSidebar' } | { type: 'UI-CloseSidebar' };

export const UIReducer = (state: UIState, action: UIActionType): UIState => {
  switch (action.type) {
    case 'UI-OpenSidebar':
      return {
        ...state,
        sidemenuOpen: true,
      };
    case 'UI-CloseSidebar':
      return {
        ...state,
        sidemenuOpen: false,
      };
    default:
      return state;
  }
};
