import React, { FC, useReducer } from "react";
import { UIContext, UIReducer } from "./";

export interface UIState {
  sidemenuOpen: boolean;
  isAddingEntry: boolean;
  isDragging: boolean;
}

interface Props {
  children?: JSX.Element | JSX.Element[];
}

const UI_INITIAL_STATE: UIState = {
  sidemenuOpen: false,
  isAddingEntry: false,
  isDragging: false,
};

const UIProvider: FC<Props> = ({ children }) => {
  const [state, dispatch] = useReducer(UIReducer, UI_INITIAL_STATE);

  const openSideMenu = () => {
    dispatch({ type: "UI-OpenSidebar" });
  };

  const closeSideMenu = () => {
    dispatch({ type: "UI-CloseSidebar" });
  };

  const setIsAddingEntry = (entry: boolean) => {
    dispatch({ type: "UI-SetIsAddingEntry", payload: entry });
  };

  const startDragging = () => {
    dispatch({ type: "UI-StartDragging" });
  };

  const endDragging = () => {
    dispatch({ type: "UI-EndDragging" });
  };

  return (
    <UIContext.Provider
      value={{
        ...state,
        openSideMenu,
        closeSideMenu,
        setIsAddingEntry,
        startDragging,
        endDragging
      }}
    >
      {children}
    </UIContext.Provider>
  );
};

export default UIProvider;
