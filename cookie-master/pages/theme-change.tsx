import React, { ChangeEvent, FC, useState } from "react";
import { GetServerSideProps } from "next";
import { Layout } from "@/components/layouts";
import {
  Button,
  Card,
  CardContent,
  FormControl,
  FormControlLabel,
  FormLabel,
  Radio,
  RadioGroup,
} from "@mui/material";
import Cookies from "js-cookie";
import axios from "axios";

interface Props {
  theme: string;
}

const ThemeChangePage: FC<Props> = (props) => {
  const theme = props.theme;

  const [currentTheme, setCurrentTheme] = useState(theme);

  const onThemeChange = (event: ChangeEvent<HTMLInputElement>) => {
    const selectedTheme = event.target.value;
    setCurrentTheme(selectedTheme);

    Cookies.set("theme", selectedTheme);
  };

  const onClick = async () => {
    const { data } = await axios.get("/api/hello");
    console.log(data);
  };

  return (
    <Layout>
      <Card>
        <CardContent>
          <FormControl>
            <FormLabel>Tema</FormLabel>
            <RadioGroup value={currentTheme} onChange={onThemeChange}>
              <FormControlLabel
                value={"light"}
                control={<Radio></Radio>}
                label="Light"
              ></FormControlLabel>
              <FormControlLabel
                value={"dark"}
                control={<Radio></Radio>}
                label="Dark"
              ></FormControlLabel>
              <FormControlLabel
                value={"custom"}
                control={<Radio></Radio>}
                label="Custom"
              ></FormControlLabel>
            </RadioGroup>
          </FormControl>
          <Button onClick={onClick}>Solicitud</Button>
        </CardContent>
      </Card>
    </Layout>
  );
};

export const getServerSideProps: GetServerSideProps = async ({ req }) => {
  const { theme = "light" } = req.cookies;

  const validTheme = ["light", "dark", "custom"];

  return {
    props: {
      theme: validTheme.includes(theme) ? theme : "dark",
    },
  };
};

export default ThemeChangePage;
