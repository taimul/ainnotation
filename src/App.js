import { RouterProvider } from 'react-router-dom';
import './App.css';
import router from './Routes/Routes';
import { ThemeProvider } from 'next-themes'

function App() {
  return (
    <ThemeProvider enableSystem={true} attribute="class">
      <RouterProvider router={router}></RouterProvider>
    </ThemeProvider>
  );
}

export default App;
