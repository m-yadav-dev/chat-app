import { Routes, Route, Navigate } from "react-router-dom";
import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";
import SignupPage from "./pages/SignupPage";
import ProfilePage from "./pages/ProfilePage";
import NotFound from "./pages/NotFound";
// import { useAuthStore } from "./store/useAuthStore";
// import { useEffect } from "react";
import { Toaster } from "sonner";
import { ThreeDots } from "react-loader-spinner";





function App() {

  return (
    <>
      <Routes>
        <Route
          path="/"
          element={ <HomePage />}
        />
        <Route
          path="/signup"
          element={ <SignupPage />}
        />
        <Route
          path="/login"
          element={ <LoginPage /> }
        />
        <Route
          path="/profile"
          element={ <ProfilePage />  }
        />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Toaster position="top-center" richColors /> 
    </>
  );
}

export default App;
