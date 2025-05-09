import { Route, Routes } from "react-router-dom";
import HomePage from "@/pages/home/HomePage";
import AuthCallbackPage from "@/pages/auth-callback/AuthCallbackPage";
import { AuthenticateWithRedirectCallback } from "@clerk/clerk-react";
import NotFoundPage from "./pages/error/NotFoundPage";
import MainLayout from "./layouts/MainLayout"; 
import AlbumPage from "./album/AlbumPage";
import AdminPage from "./pages/admin/AdminPage";
import FavoritePage from "./pages/favorites/FavoritePage";

function App() {
  return (
    <>
      <Routes>
        <Route
          path="/sso-callback" 
          element={<AuthenticateWithRedirectCallback
          signUpForceRedirectUrl={"/auth-callback"} />}
        />
        <Route path="/auth-callback" element={<AuthCallbackPage />} />
        <Route path="/admin" element={<AdminPage />}/>
        <Route path='*' element={<NotFoundPage />} />

        <Route element={<MainLayout />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/favorites" element={<FavoritePage />} />
          <Route path="/album/:albumId" element={<AlbumPage />}/>
        </Route>
      </Routes>  
    </>
  )
}

export default App
