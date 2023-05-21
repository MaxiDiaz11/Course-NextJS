import "@/styles/globals.css";
import { CssBaseline, ThemeProvider } from "@mui/material";
import type { AppProps } from "next/app";
import { lightTheme, darkTheme } from "../themes";
import UIProvider from "@/context/ui/UIProvider";
import EntriesProvider from "@/context/entries/EntriesProvider";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <EntriesProvider>
      <UIProvider>
        <ThemeProvider theme={lightTheme}>
          <CssBaseline></CssBaseline>
          <Component {...pageProps} />
        </ThemeProvider>
      </UIProvider>
    </EntriesProvider>
  );
}
