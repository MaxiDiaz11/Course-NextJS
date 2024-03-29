import React, { FC, useReducer } from "react";
import { UiContext, uiReducer } from "./";

export interface UiState {
  isMenuOpen: boolean;
}

interface Props {
  children?: JSX.Element | JSX.Element[];
}

const Ui_INITIAL_STATE: UiState = {
  isMenuOpen: false,
};

const UiProvider: FC<Props> = ({ children }) => {
  const [state, dispatch] = useReducer(uiReducer, Ui_INITIAL_STATE);

  const toggleSideMenu = () => {
    dispatch({ type: "UI-ToggleMenu" });
  };

  return (
    <UiContext.Provider
      value={{
        ...state,
        toggleSideMenu,
      }}
    >
      {children}
    </UiContext.Provider>
  );
};

export default UiProvider;
