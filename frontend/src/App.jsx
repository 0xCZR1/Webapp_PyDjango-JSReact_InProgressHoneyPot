import react from "react"
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom"
import Login from "./pages/Login"
import Register from "./pages/Register"
import NotFound from "./pages/NotFound"
import ProtectedRoute from "./components/ProtectedRoute"
import Home from "./pages/Home"
import Shiftplan from "./pages/Shiftplan"
import SOPs from "./pages/SOPs"

function Logout() {
  localStorage.clear()
  return <Navigate to="/login" />
}

function RegisterAndLogout() {
  localStorage.clear()
  return <Register />
}
function App() {
  return (
    <BrowserRouter>
      <Routes>
        
        <Route
          path="/shiftplan"element={<ProtectedRoute><Shiftplan /></ProtectedRoute>}/>
        <Route path="/login" element={<Login />} />
        <Route path="/logout" element={<Logout />} />
        <Route path="/register" element={<RegisterAndLogout />} />
        <Route path="*" element={<NotFound />}></Route>
        <Route
          path="/"element={<ProtectedRoute><Home /></ProtectedRoute>}/>
        <Route
          path="/SOPs"
          element={
            <ProtectedRoute>
              <SOPs /> 
            </ProtectedRoute>
          }
        />

          <Route
          path="/shiftplan"
          element={
            <ProtectedRoute>
              <Shiftplan /> 
            </ProtectedRoute>
          }
        />
      </Routes>
      
    </BrowserRouter>
  );
}

export default App



