import { useState, useEffect } from "react";
import { BrowserRouter } from "react-router-dom";
import AppRouter from "./components/AppRouter";
import Navbar from "./UI/nav/Navbar";
import { AuthContext } from "./context/context";

function App() {
  const [is_auth, setIsAuth] = useState(false);
  const [is_loading, setIsLoading] = useState(true);

  useEffect(() => {
    if (localStorage.getItem("is_auth")) {
      setIsAuth(true);
    }
    setIsLoading(false);
  }, []);

  return (
    <AuthContext.Provider
      value={{
        is_auth,
        setIsAuth,
        is_loading,
      }}
    >
      <BrowserRouter>
        <Navbar />
        <AppRouter />
      </BrowserRouter>
    </AuthContext.Provider>
  );
}

export default App;
