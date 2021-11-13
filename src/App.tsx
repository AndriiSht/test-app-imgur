import { QueryClientProvider, QueryClient } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";
import { MemeList } from "pages";
import CssBaseline from "@mui/material/CssBaseline";
import { ThemeContextProvider } from "context";
import { GlobalStyles } from "@mui/material";

const queryClient = new QueryClient();

function App() {
  return (
    <ThemeContextProvider>
      <CssBaseline />
      <GlobalStyles styles={{ "*": { boxSizing: "border-box" } }} />
      <QueryClientProvider client={queryClient}>
        <MemeList />
        <ReactQueryDevtools initialIsOpen={false} position="bottom-right" />
      </QueryClientProvider>
    </ThemeContextProvider>
  );
}

export default App;
