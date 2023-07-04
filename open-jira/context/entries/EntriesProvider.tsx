import React, { FC, useReducer } from "react";
import { v4 as uuidv4 } from "uuid";
import { EntriesContext, EntriesReducer } from "./";
import { Entry } from "@/interfaces";

export interface EntriesState {
  entries: Entry[];
}

interface Props {
  children?: JSX.Element | JSX.Element[];
}

const Entries_INITIAL_STATE: EntriesState = {
  entries: [
    {
      _id: uuidv4(),
      description:
        "PENDIENTE: Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo, laudantium?",
      createdAt: Date.now(),
      status: "pending",
    },
    {
      _id: uuidv4(),
      description:
        "EN PROGRESO: Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo, laudantium?",
      createdAt: Date.now(),
      status: "in-progress",
    },
    {
      _id: uuidv4(),
      description:
        "TERMINADA: Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo, laudantium?",
      createdAt: Date.now(),
      status: "finished",
    },
  ],
};

const EntriesProvider: FC<Props> = ({ children }) => {
  const [state, dispatch] = useReducer(EntriesReducer, Entries_INITIAL_STATE);

  const addNewEntry = (description: string) => {
    const newEntry: Entry = {
      _id: uuidv4(),
      description,
      createdAt: Date.now(),
      status: "pending",
    };
    dispatch({ type: "[Entry] Add-Entry", payload: newEntry });
  };

  const updateEntry = (entry: Entry) =>{
    dispatch({type:"[Entry] Update-Entry", payload: entry})
  }

  return (
    <EntriesContext.Provider
      value={{
        ...state,
        //Methods
        addNewEntry,
        updateEntry
      }}
    >
      {children}
    </EntriesContext.Provider>
  );
};

export default EntriesProvider;
