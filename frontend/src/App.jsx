import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import LogInPage from "./pages/LogInPage";
import SignUpPage from "./pages/SignUpPage";
import ProfilePage from "./pages/ProfilePage";
import "./App.css";
import { useAuthStore } from "./store/useAuthStore";
import { useEffect } from "react";
import { Loader, Loader2 } from "lucide-react";

function App() {
  const { authUser, isCheckingAuth, checkAuth } = useAuthStore();

  useEffect(() => {
    checkAuth();
  }, [checkAuth]);

  if (isCheckingAuth) {
    return (
      <div className="flex h-screen items-center justify-center">
        <Loader2 className="animate-spin" size={48} />
        <span className="ml-4 text-lg">Checking authentication...</span>
      </div>
    );
  }

  return (
    <>
      <Routes>
        <Route path="/" element={authUser ? <HomePage /> : <LogInPage />} />
        <Route
          path="/signup"
          element={
            !authUser && !isCheckingAuth ? <SignUpPage /> : <LogInPage />
          }
        />
        <Route
          path="/login"
          element={!authUser && !isCheckingAuth ? <LogInPage /> : <HomePage />}
        />
        <Route
          path="/profile"
          element={authUser ? <ProfilePage /> : <LogInPage />}
        />
      </Routes>
    </>
  );
}

export default App;
