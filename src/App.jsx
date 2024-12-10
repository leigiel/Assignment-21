import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";

function App() {
  const router = createBrowserRouter([
    {
      path:'/',
      element:
      // element:<div>this is from home component</div>
    },
    {
      path:'/about',
      element:<div>this is from about component</div>
    },
  ])
 
  return (
    <div>
      <RouterProvider router={router}></RouterProvider>
    {/* <Home></Home> */}
    </div>
  );
}

export default App;
