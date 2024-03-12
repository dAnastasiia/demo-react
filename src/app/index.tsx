import { BrowserRouter } from "react-router-dom";

import { RouterProvider, ThemeProvider } from "./providers";

export default function App() {
  return (
    <ThemeProvider>
      <BrowserRouter>
        <RouterProvider />
      </BrowserRouter>
    </ThemeProvider>
  );
}
