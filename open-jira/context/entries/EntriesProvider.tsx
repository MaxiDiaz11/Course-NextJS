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
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo, laudantium?",
      createdAt: Date.now(),
      status: "pending",
    },
    {
      _id: uuidv4(),
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo, laudantium?",
      createdAt: Date.now(),
      status: "pending",
    },
    {
      _id: uuidv4(),
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo, laudantium?",
      createdAt: Date.now(),
      status: "pending",
    },
  ],
};

const EntriesProvider: FC<Props> = ({ children }) => {
  const [state, dispatch] = useReducer(EntriesReducer, Entries_INITIAL_STATE);

  return (
    <EntriesContext.Provider
      value={{
        ...state,
      }}
    >
      {children}
    </EntriesContext.Provider>
  );
};

export default EntriesProvider;
