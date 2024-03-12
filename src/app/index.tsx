import { BrowserRouter } from "react-router-dom";

import { AppRoutes } from "./constants";
import { RouterProvider, ThemeProvider } from "./providers";

export default function App() {
  return (
    <ThemeProvider>
      <BrowserRouter basename={AppRoutes.ghPages}>
        <RouterProvider />
      </BrowserRouter>
    </ThemeProvider>
  );
}
