import { Routes, Route } from "react-router-dom"
import HomePage from "./pages/HomePage"
import FolderStructure from "./pages/FolderStructure"

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage/>} />
      <Route path="/folder-structure/" element={<FolderStructure/>} />
    </Routes>
  )
}