import { Route, Routes, Navigate } from "react-router-dom"
import { LoginPage, RegisterPage } from "../pages"
import { LoginCard } from "../pages/LoginPageCard"

export const AuthRoutes = () => {
  return (
    <>
      <Routes>
        <Route path="/login" element={<LoginCard />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path='/login2' element={<LoginPage />} />

        <Route path="/*" element={<Navigate to="/auth/login" />} />
      </Routes>
    </>
  )
}