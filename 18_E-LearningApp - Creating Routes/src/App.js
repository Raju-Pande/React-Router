import Hero from "./pages/app/hero/Hero";
import Nav from "./components/nav/Nav";
import Courses from "./pages/app/courses/Courses";
import Details from "./pages/app/details/Details"
import { createBrowserRouter, RouterProvider } from "react-router-dom";
function App() {
  //  1st Task
  const browserRouter = createBrowserRouter([
    {
      path: "/",
      element: <Nav />,
      children: [
        { index: true, element: <Hero /> },
        { path: "courses", children: [
          { index: true, element: <Courses /> },
          {path:":id",element:<Details/>}
        ] },
      ],
    },
  ]);
  return (
    // 1st Task
    <>
      <RouterProvider router={browserRouter} />
    </>
  );
}

export default App;
