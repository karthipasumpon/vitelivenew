import React from "react";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import Create from "./components/Create";
import Read from "./components/Read";
import RootLayout from "./layout/RootLayout";
import Update from "./components/Update";
import List from "./components/List";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout />}>
      <Route path="create" element={<Create />} />
      <Route path="read" element={<Read />} />
      <Route path="update/:id"  element={<Update />} />
      <Route path="list" element={<List />} />

    </Route>
  )
);

function App() {
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
