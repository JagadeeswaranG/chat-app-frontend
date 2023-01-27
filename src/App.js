import logo from "./logo.svg";
import "./App.css";
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

// sockect connection FE with BE
const socket = io.connect("http://localhost:3000");

function App() {
  const [user, setUser, loading] = useFindUser();
  
  return (
    <UserContext.Provider value={{ user, loading }}>
      <Routes>
        <Route element={<PublicRoutes />}>
          <Route path="/chat" element={<Chat/>}/>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Route>
        <Route element={<PrivateRoutes />}>
          {/* <Route path="/chat" element={<Chat />} /> */}
        </Route>
      </Routes>
    </UserContext.Provider>
  );
}

export default App;
