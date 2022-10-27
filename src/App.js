import { Route, Routes } from "react-router-dom";

import Dashboard from "./components/Dashboard/Dashboard";
import Calender from "./components/pages/Calender";
import Chat from "./components/pages/Chat";
import FileManager from "./components/pages/FileManager";
import Ecommerce from "./components/pages/Ecommerce";
import Email from "./components/pages/Email";
import Invoice from "./components/pages/Invoice";
import Projects from "./components/pages/Projects";
import Contacts from "./components/pages/Contacts";
import Sidebar from "./components/Aside/Sidebar";
import "./App.css";
const App = () => {
  return (
    <Sidebar>
      <Routes>
        <Route path="/calender" element={<Calender />} />
        <Route path="/chat" element={<Chat />} />
        <Route path="/filemanager" element={<FileManager />} />
        <Route path="/ecommerce" element={<Ecommerce />} />
        <Route path="/email" element={<Email />} />
        <Route path="/invoice" element={<Invoice />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/contacts" element={<Contacts />} />
        <Route path="/dashborad" element={<Dashboard />} />
        <Route path="/" element={<Dashboard />} />
      </Routes>
    </Sidebar>
  );
};

export default App;
