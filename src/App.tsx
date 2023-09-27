import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { setTheme } from '@ui5/webcomponents-base/dist/config/Theme.js';
import { ThemingParameters } from '@ui5/webcomponents-react-base';
import '@ui5/webcomponents-react/dist/Assets';

import Home from './pages/Home';
import LoginForm from './pages/LoginForm';

const router = createBrowserRouter([
  { path: '/', element: <Home /> },
  { path: '/login', element: <LoginForm /> },
]);
setTheme('sap_horizon');

const App = () => {
  return (
    <div
      style={{ backgroundColor: ThemingParameters.sapBackgroundColor }}
      className="h-screen"
    >
      <RouterProvider router={router} />
    </div>
  );
};

export default App;
