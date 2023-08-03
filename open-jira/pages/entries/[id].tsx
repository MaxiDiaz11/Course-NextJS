import React, { ChangeEvent, FC, useContext, useMemo, useState } from "react";
import { GetServerSideProps } from "next";
import Layout from "@/components/layouts/Layout";
import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  FormLabel,
  Grid,
  FormControl,
  TextField,
  RadioGroup,
  FormControlLabel,
  Radio,
  capitalize,
  IconButton,
} from "@mui/material";
import { Entry, EntryStatus } from "@/interfaces";
import SaveAltOutlinedIcon from "@mui/icons-material/SaveAltOutlined";
import DeleteOutlinedIcon from "@mui/icons-material/DeleteOutlined";
import { dbEntries } from "@/database";
import { EntriesContext } from "@/context/entries";
import { getFormatdistanceToNow } from "@/utils/dateFunctions";

const validStatus: EntryStatus[] = ["pending", "in-progress", "finished"];

interface Props {
  entry: Entry;
}

export const EntryPage: FC<Props> = ({ entry }) => {
  const { updateEntry } = useContext(EntriesContext);
  const [inputValue, setinputValue] = useState(entry.description);
  const [status, setstatus] = useState<EntryStatus>(entry.status);
  const [touched, setTouched] = useState(false);
  const isNotValid = useMemo(
    () => inputValue.length <= 0 && touched,
    [inputValue, touched]
  );

  const onTextFieldChange = (event: ChangeEvent<HTMLInputElement>) => {
    setinputValue(event.target.value);
  };

  const onStatusChenged = (event: ChangeEvent<HTMLInputElement>) => {
    setstatus(event.target.value as EntryStatus);
  };

  const onSave = () => {
    if (inputValue.trim().length === 0) return;
    const entryToUpdate: Entry = {
      ...entry,
      description: inputValue,
      status,
    };
    updateEntry(entryToUpdate, true);
  };

  return (
    <Layout title={inputValue.substring(0, 20) + "..."}>
      <Grid container justifyContent={"center"} sx={{ marginTop: 2 }}>
        <Grid item xs={12} sm={8} md={6}>
          <Card>
            <CardHeader
              title={`Entrada: `}
              subheader={`Creada ${getFormatdistanceToNow(entry.createdAt)}`}
            ></CardHeader>
            <CardContent>
              <TextField
                sx={{ marginBottom: 1 }}
                fullWidth
                placeholder="Nueva entrada"
                autoFocus
                multiline
                label="Nueva entrada"
                value={inputValue}
                onChange={onTextFieldChange}
                helperText={isNotValid && "Ingrese un valor"}
                onBlur={() => setTouched(true)}
                error={isNotValid && touched}
              ></TextField>
              <FormControl>
                <FormLabel>Estado:</FormLabel>
                <RadioGroup row value={status} onChange={onStatusChenged}>
                  {validStatus.map((opt) => (
                    <FormControlLabel
                      key={opt}
                      value={opt}
                      control={<Radio></Radio>}
                      label={capitalize(opt)}
                    ></FormControlLabel>
                  ))}
                </RadioGroup>
              </FormControl>
            </CardContent>
            <CardActions>
              <Button
                variant="contained"
                fullWidth
                startIcon={<SaveAltOutlinedIcon></SaveAltOutlinedIcon>}
                onClick={onSave}
                disabled={inputValue.length <= 0}
              >
                Guardar
              </Button>
            </CardActions>
          </Card>
        </Grid>
      </Grid>

      <IconButton
        sx={{
          position: "fixed",
          bottom: 30,
          right: 30,
          backgroundColor: "error.dark",
          //   backgroundColor: "red",
        }}
      >
        <DeleteOutlinedIcon></DeleteOutlinedIcon>
      </IconButton>
    </Layout>
  );
};

export const getServerSideProps: GetServerSideProps = async ({ params }) => {
  const { id } = params as { id: string };

  const entry = await dbEntries.getEntryByID(id);

  if (!entry) {
    return {
      redirect: {
        destination: "/",
        permanent: false,
      },
    };
  }

  return {
    props: { entry },
  };
};

export default EntryPage;
