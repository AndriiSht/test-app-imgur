import { QueryClientProvider, QueryClient } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";
import { MemeListPage } from "pages";
import CssBaseline from "@mui/material/CssBaseline";
import { ThemeContextProvider } from "context";

export const queryClient = new QueryClient();

function App() {
  return (
    <ThemeContextProvider>
      <CssBaseline />
      <QueryClientProvider client={queryClient}>
        <MemeListPage />
        <ReactQueryDevtools initialIsOpen={false} position="bottom-right" />
      </QueryClientProvider>
    </ThemeContextProvider>
  );
}

export default App;
