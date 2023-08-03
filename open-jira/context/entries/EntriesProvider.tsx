import React, { FC, useEffect, useReducer } from "react";
import { EntriesContext, EntriesReducer } from "./";
import { Entry } from "@/interfaces";
import { entriesApi } from "@/api";
import { useSnackbar } from "notistack";

export interface EntriesState {
  entries: Entry[];
}

interface Props {
  children?: JSX.Element | JSX.Element[];
}

const Entries_INITIAL_STATE: EntriesState = {
  entries: [],
};

const EntriesProvider: FC<Props> = ({ children }) => {
  const { enqueueSnackbar } = useSnackbar();

  const refreshEntries = async () => {
    const { data } = await entriesApi.get<Entry[]>("/entries");
    console.log(data);
    dispatch({ type: "[Entry] Refresh-Entry", payload: data });
  };

  useEffect(() => {
    refreshEntries();
  }, []);

  const [state, dispatch] = useReducer(EntriesReducer, Entries_INITIAL_STATE);

  const addNewEntry = async (description: string) => {
    const { data } = await entriesApi.post<Entry>("/entries", {
      description,
    });

    dispatch({ type: "[Entry] Add-Entry", payload: data });
  };

  const updateEntry = async (
    { _id, description, status }: Entry,
    showSnackbar = false
  ) => {
    try {
      const { data } = await entriesApi.put<Entry>(`/entries/${_id}`, {
        description,
        status,
      });

      dispatch({ type: "[Entry] Update-Entry", payload: data });

      if (showSnackbar) {
        enqueueSnackbar("Entrada actualizada", {
          variant: "success",
          autoHideDuration: 1500,
          anchorOrigin: {
            vertical: "bottom",
            horizontal: "left",
          },
        });
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <EntriesContext.Provider
      value={{
        ...state,
        //Methods
        addNewEntry,
        updateEntry,
      }}
    >
      {children}
    </EntriesContext.Provider>
  );
};

export default EntriesProvider;
