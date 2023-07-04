import React, { ChangeEvent, useState, useContext } from "react";
import { Box, Button, TextField } from "@mui/material";
import { EntriesContext } from "@/context/entries";
import { UIContext } from "@/context/ui";
import SaveAltOutlinedIcon from "@mui/icons-material/SaveAltOutlined";
import AddCircleOutlineOutlinedIcon from "@mui/icons-material/AddCircleOutlineOutlined";

export const NewEntry = () => {
  const [inputValue, setinputValue] = useState("");
  const [isTouched, setIsTouched] = useState(false);

  const { addNewEntry } = useContext(EntriesContext);
  const { isAddingEntry, setIsAddingEntry } = useContext(UIContext);

  const onTextChange = (event: ChangeEvent<HTMLInputElement>) => {
    setinputValue(event.target.value);
  };

  const onSave = () => {
    if (inputValue.length === 0) return;
    addNewEntry(inputValue);
    setIsAddingEntry(false);
    setIsTouched(false);
    setinputValue("");
  };

  return (
    <Box sx={{ marginBottom: 2, paddingX: 2 }}>
      {isAddingEntry ? (
        <>
          <TextField
            fullWidth
            sx={{ marginTop: 2, marginBottom: 2 }}
            placeholder="Nueva entreda"
            autoFocus
            multiline
            label="Nueva entrada"
            helperText={
              inputValue.length <= 0 && isTouched && "Ingrese un valor"
            }
            error={inputValue.length <= 0 && isTouched}
            value={inputValue}
            onChange={onTextChange}
            onBlur={() => setIsTouched(true)}
          ></TextField>
          <Box display={"flex"} justifyContent={"space-between"}>
            <Button
              variant="outlined"
              color="secondary"
              endIcon={<SaveAltOutlinedIcon />}
              onClick={onSave}
            >
              Guardar
            </Button>
            <Button
              variant="outlined"
              color="secondary"
              onClick={() => setIsAddingEntry(false)}
            >
              Cancelar
            </Button>
          </Box>
        </>
      ) : (
        <Button
          startIcon={
            <AddCircleOutlineOutlinedIcon></AddCircleOutlineOutlinedIcon>
          }
          fullWidth
          variant="outlined"
          onClick={() => setIsAddingEntry(true)}
        >
          Agregar tarea
        </Button>
      )}
    </Box>
  );
};
