import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import About from "./pages/About";
import Items from "./pages/Items";
import ItemsDetails from "./pages/ItemsDetails";

import { createBrowserRouter, RouterProvider } from "react-router-dom";

function App() {
  // const routes = createRoutesFromElements(
  //   <>
  //     <Route path="/" element={<Home />} />
  //     <Route path="/about" element={<About />} />
  //     <Route path="/items" element={<Items />} />
  //   </>
  // );
  // const router = createBrowserRouter(routes);

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Navbar />,
      children: [
        { index: true, element: <Home /> },
        { path: "about", element: <About /> },
        { path: "items", element: <Items /> },
        { path: "items/:item-id", element: <ItemsDetails /> },
      ],
    },
  ]);
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;

// Absolute paths vs Relative paths

// Absolute paths start with a forward slash and represent the complete path from the root.
// Relative paths are based on the current location and don't include the parent route.

// const router = createBrowserRouter([
//   {
//   path: "/root",
//   element: <Navbar />,
//   children: [
//   {index: true, element: <Home /> },
//   { path: "/root/list", element: <List /> },
//   { path: "contact", element: <Contact /> }
//   }
//   });

// ans: The home page is an index route displayed on the “/root” path. The List page uses an absolute link with path /root/list, and the Contact page uses a relative path, appended to the “/root” path, and will be displayed on “/root/contact.”
