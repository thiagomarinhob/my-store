import { AppProps } from "next/app";
import { GlobalStyles } from "@/styles/global";
import { Container, Content, Box } from "@/styles/pages/app";
import defaultTheme from "@/styles/themes/default";
import { ThemeProvider } from "styled-components";
import Sidebar from "@/components/Sidebar";
import { AuthProvider } from "@/context/AuthContext";

export default function App({ Component, pageProps, router }: AppProps) {
  return (
    <ThemeProvider theme={defaultTheme}>
      <AuthProvider>
        <Container>
          <Content>
            {router.pathname !== "/login" && <Sidebar />}
            <Box>
              <Component {...pageProps} />
            </Box>
          </Content>
        </Container>
      </AuthProvider>
      <GlobalStyles />
    </ThemeProvider>
  );
}
