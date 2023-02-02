import "./App.css";
import { RouterProvider } from "react-router-dom";
import Routes from "./router/Routes";
import UserContextProvider from "./contexts/UserContext";

function App() {
  return (
    <div className="max-w-6xl m-auto">
      <UserContextProvider>
        <RouterProvider router={Routes} />
      </UserContextProvider>
    </div>
  );
}

export default App;
