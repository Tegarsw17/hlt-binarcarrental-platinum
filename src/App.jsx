import { RouterProvider } from 'react-router-dom';

import { routeList } from './routes/routeList';

function App() {
  return <RouterProvider router={routeList} fallbackElement={<p>loading</p>} />;
}
export default App;
