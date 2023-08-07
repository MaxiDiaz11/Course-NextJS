import React, { ChangeEvent, useState } from "react";
import { Layout } from "@/components/layouts";
import {
  Card,
  CardContent,
  FormControl,
  FormControlLabel,
  FormLabel,
  Radio,
  RadioGroup,
} from "@mui/material";

const ThemeChangePage = () => {
  const [currentTheme, setCurrentTheme] = useState("light");

  const onThemeChange = (event: ChangeEvent<HTMLInputElement>) => {
    console.log(event.target.value);
    setCurrentTheme(event.target.value);
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
        </CardContent>
      </Card>
    </Layout>
  );
};

export default ThemeChangePage;
