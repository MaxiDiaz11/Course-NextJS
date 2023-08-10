import { useEffect, useState } from "react";
import { customTheme, darkTheme, lightTheme } from "@/theme";
import { CssBaseline, Theme, ThemeProvider } from "@mui/material";
import type { AppContext, AppProps } from "next/app";
import Cookies from "js-cookie";

interface Props extends AppProps {
  theme: string;
}

export default function App({ Component, pageProps, theme }: Props) {
  const [currentTheme, setCurrentTheme] = useState(lightTheme);

  useEffect(() => {
    const cookieTheme = Cookies.get("theme") || "light";
    const selectedTheme: Theme =
      cookieTheme === "dark"
        ? darkTheme
        : cookieTheme === "light"
        ? lightTheme
        : customTheme;

    setCurrentTheme(selectedTheme);
  }, []);

  return (
    <ThemeProvider theme={currentTheme}>
      <CssBaseline />
      <Component {...pageProps} />
    </ThemeProvider>
  );
}

// App.getInitialProps = async ({ Component, ctx }: AppContext) => {
//   const { theme } = ctx.req ? (ctx.req as any).cookies : { theme: "light" };

//   console.log(theme);
//   const validTheme = ["light", "dark", "custom"];

//   return {
//     theme: validTheme.includes(theme) ? theme : "light",
//   };
// };
