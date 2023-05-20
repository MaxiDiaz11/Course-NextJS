import React, { FC, useReducer } from "react";
import { UIContext, UIReducer } from "./";

export interface UIState {
  sidemenuOpen: boolean;
}

interface Props {
  children?: JSX.Element | JSX.Element[];
}

const UI_INITIAL_STATE: UIState = {
  sidemenuOpen: false,
};

const UIProvider: FC<Props> = ({ children }) => {
  const [state, dispatch] = useReducer(UIReducer, UI_INITIAL_STATE);

  const openSideMenu = () => {
    dispatch({ type: "UI-OpenSidebar" });
  };

  const closeSideMenu = () => {
    dispatch({ type: "UI-CloseSidebar" });
  };

  return (
    <UIContext.Provider
      value={{
        ...state,
        openSideMenu,
        closeSideMenu
      }}
    >
      {children}
    </UIContext.Provider>
  );
};

export default UIProvider;
