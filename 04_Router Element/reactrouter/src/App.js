import Home from "./pages/Home";
import About from "./pages/About";
import Items from "./pages/Items";

import {
  createBrowserRouter,
  RouterProvider,
  createRoutesFromElements,
  Route,
} from "react-router-dom";
function App() {
  const routes = createRoutesFromElements(
    <>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/items" element={<Items />} />
    </>
  );
  const router = createBrowserRouter(routes);

  // const router = createBrowserRouter([
  //   { path: "/", element: <Home /> },
  //   { path: "/about", element: <About /> },
  //   { path: "/items", element: <Items /> },
  // ]);
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
