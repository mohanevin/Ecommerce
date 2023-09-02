import './App.css';
import { RouterProvider } from 'react-router-dom';
import { router } from './routes/Router';
import Layout from './components/Layout/Layout';
import 'remixicon/fonts/remixicon.css'

function App() {
  return (
    <RouterProvider router={router} >
      <Layout/>
    </RouterProvider>
    
  );
}

export default App;
