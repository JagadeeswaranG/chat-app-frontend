import "./App.css";
import "bootstrap/dist/css/bootstrap.css";
import io from "socket.io-client";
import UserContext from "./Context/UserContext";
import { useState } from "react";
import useFindUser from "./Hooks/useFindUser";
import Login from "./Components/Login";
import { Route, Routes } from "react-router-dom";
import Register from "./Components/Register";
import Chat from "./Components/Chats";
import PublicRoutes from "./Routes/PublicRoutes";
import PrivateRoutes from "./Routes/PrivateRoutes";
import JoinChat from "./Components/JoinChat";
import ForgotPassword from "./Components/ForgotPassword";
import ResetPassword from "./Components/ResetPassword";
import Header from "./Components/Header";

// sockect connection FE with BE
const socket = io.connect("http://localhost:3000");

function App() {
  const [user, setUser, loading] = useFindUser();

  return (
    <UserContext.Provider value={{ user, setUser, loading }}>
      <div>
        <Header />
        <Routes>
          <Route element={<PublicRoutes />}>
            <Route path="/" element={<JoinChat socket={socket} />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/forgotPassword" element={<ForgotPassword />} />
            <Route path="/passwordReset" element={<ResetPassword />} />
          </Route>
          <Route element={<PrivateRoutes />}>
            {/* <Route path="/chat" element={<Chat />} /> */}
          </Route>
        </Routes>
      </div>
    </UserContext.Provider>
  );
}

export default App;
